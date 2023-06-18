<?php

namespace App\Http\Controllers;

use App\Models\Sales;
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
        $sales = DB::table('sales')
            ->join('users', 'sales.users_id', '=', 'users.id')
            ->join('sales_books', 'sales_books.sales_id', '=', 'sales.id')
            ->select('sales_books.sales_id', 'users.name', 'sales_books.amount')
            ->where('users.profiles_id','=', 3)
            ->where('sales.status','=', 0)->paginate(7);

        return Inertia::render('ShowOpenSales', ['sales' => $sales]);
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
        // nome do livro
        // isbn do livro
        // amount do livro
        // quantidade de livros

        $results = DB::table('sales_books')
            ->join('books', 'sales_books.books_id', '=', 'books.id')
            ->join('sales', 'sales_books.sales_id', '=', 'sales.id')
            ->select('books.title', 'books.isbn', 'sales.*')
            ->where('sales.users_id', '=', Auth::id())
            ;

        return Inertia::render("Cart");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
