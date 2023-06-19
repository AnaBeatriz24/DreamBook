<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\Stocks;
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
        //        $userId = Auth::id();
        //
        //        $books = DB::table('sales_books')
        //            ->join('books', 'sales_books.books_id', '=', 'books.id')
        //            ->join('sales', 'sales_books.sales_id', '=', 'sales.id')
        //            ->where('users_id', '=', $userId)
        //            ->get()
        //        ;
        //
        //        dd($books);

        return Inertia::render("Cart");
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

            $saleAdd = DB::table('sales_books')->where('books_id', $stock->books_id)->first();

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

    /**
     * Display the specified resource.
     */
    public function show(Sales $sales)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sales $sales)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sales $sales)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sales $sales)
    {
        //
    }
}
