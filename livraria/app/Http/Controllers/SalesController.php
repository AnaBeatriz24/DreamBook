<?php

namespace App\Http\Controllers;

use App\Models\Addresses;
use App\Models\Coupons;
use App\Models\PaymentMethods;
use App\Models\Sales;
use App\Models\Stocks;
use App\Models\Books;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class SalesController extends Controller
{
    /*
     * Show the table of sales not finalized, created by sellers
     * */
    public function showOpenSales(): Response
    {
        $sales = Sales::where("status", 0)->get();
        $openSales=[];

        if (count($sales)>0){
            foreach ($sales as $sale){
                if(!is_null($sale->attendant_id)) {
                    $sale->idVendedor = $sale->attendant->id;
                    $sale->nameVendedor = $sale->attendant->name;
                }
            }

            foreach ($sales as $sale){
                $sale->idUser = $sale->users->id;
                $sale->nameUser = $sale->users->name;
            }

            foreach ($sales as $sale){
                $total = 0;
                foreach($sale->books as $book){
                    $total += ($book->pivot->amount * $book->pivot->quantity);
                }
                $sale->total = $total;
            }

            foreach ($sales as $sale){
                if(!is_null($sale->attendant_id)){
                    $openSales[] = [$sale->id, $sale->nameVendedor,$sale->total];
                }
            }
        }

        return Inertia::render('ShowOpenSales', ['sales' => $openSales]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        $sale = Sales::where('users_id', "=", $user->id)->where("status", "=", 0)->count() > 0 ? Sales::where('users_id', "=", $user->id)->where("status", "=", 0)->get()[0] : null;
        $books = $sale === null ? null : $sale->books;
        $coupon = $sale === null ? null : $sale->coupons;
        if($books !== null){
            foreach ($books as $book){
                $book->maxStock = $book->stocks->quantity;
            }
        }
        return Inertia::render("Cart", ["sale"=> $sale, "books" => $books, "coupon" => $coupon]);
    }

    public function createFinish()
    {
        $user = Auth::user();
        $sale = Sales::where('users_id', "=", $user->id)->where("status", "=", 0)->count() > 0 ? Sales::where('users_id', "=", $user->id)->where("status", "=", 0)->get()[0] : null;
        $books = $sale === null ? null : $sale->books;
        $coupon = $sale === null ? null : $sale->coupons;
        $payments = PaymentMethods::all();
        if($books !== null){
            foreach ($books as $book){
                $book->maxStock = $book->stocks->quantity;
            }
        }
        return Inertia::render("CartFinish", ["sale"=> $sale, "books" => $books, "coupon" => $coupon, "payments" => $payments]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if(Auth::user()->profiles_id === 5){

            if(Sales::where("users_id", Auth::user()->id)->where("status", 0)->count() > 0){
                $cart = Sales::where("users_id", Auth::user()->id)->where("status", 0)->first();
            } else {
                $cart = Sales::create([
                    "users_id" => Auth::user()->id
                ]);
            }
            $stock = Stocks::where("books_id", $request->idLivro)->first();
            $saleAdd = DB::table('sales_books')->where('books_id', $stock->books_id)->where('sales_id', $cart->id)->first();


            if (is_null($saleAdd)) {
                if($stock->quantity > 0)
                    $cart->books()->attach([$request->idLivro => ["quantity" => 1, "amount" => $stock->amount]]);
            } else {
                DB::table('sales_books')
                    ->where('books_id', $saleAdd->books_id)
                    ->update([
                    'quantity' => $saleAdd->quantity + 1
                ]);
            }
        }
    }

    public function storeFinish(Request $request)
    {
        if(Auth::user()->profiles_id === 5){
            if(Sales::where("users_id", Auth::user()->id)->where("status", 0)->count() > 0){
                $cart = Sales::where("users_id", Auth::user()->id)->where("status", 0)->first();
                $method = $request->query->get('method');
                DB::unprepared("call finaliza_venda($cart->id, $method, $request->parcel)");
            }
        }
        return Inertia::render("PageFinish");
    }

    public function cepStore(Request $request)
    {
        if(Auth::user()->profiles_id === 5){
            $addr = Addresses::create([
                "name" => $request->query->get("name"),
                "cep" => $request->query->get("cep"),
                "number" => $request->query->get("number"),
                "complement" => $request->query->get("complement"),
                "district" => $request->query->get("district"),
                "city" => $request->query->get("city"),
                "uf" => $request->query->get("uf"),
                "users_id" => Auth::user()->id
            ]);


            $cart = Sales::where("users_id", Auth::user()->id)->where("status", 0)->first();
            $cart->addresses_id = $addr->id;
            $cart->save();
        }
    }

    public function updateSales(Request $request)
    {
        $book = Books::find($request->idBook)->stocks->quantity;
        if($request->quantity <= $book) {
            DB::unprepared("update sales_books set quantity = $request->quantity where sales_id = $request->idSales and books_id = $request->idBook");
        }
    }

    public function updateSalesRemoveBook(Request $request)
    {
        DB::unprepared("delete from sales_books where books_id = $request->idBook and sales_id = $request->idSales");
        return redirect()->route("cart", ["atualiza" => true]);
    }

    public function appliedCouponSale(Request $request)
    {
//        dd($request);
        $cupom = Coupons::where("name", "=", $request->cupom)->where("status", "=", 1)->count() == 1 ? Coupons::where("name", "=", $request->cupom)->where("status", "=", 1)->get()[0]: null;
        if($cupom !== null){
            $sale = Sales::find($request->idSale);
            $sale->coupons_id = $cupom->id;
            $sale->save();
        }
        return redirect()->route("cart");
    }

    public function appliedCouponSaleRemove(Request $request)
    {
//        dd($request);

        $sale = Sales::find($request->idSale);
        $sale->coupons_id = null;
        $sale->save();
        return redirect()->route("cart");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sales $sales)
    {
        //
    }
}
