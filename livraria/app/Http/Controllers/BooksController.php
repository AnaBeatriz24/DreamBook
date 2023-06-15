<?php

namespace App\Http\Controllers;

use App\Models\Books;
use App\Models\Genders;
use App\Models\Suppliers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BooksController extends Controller
{
    public function searchBooks()
    {
        return Inertia::render('SearchBooks');
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
        return Inertia::render('CreateBook',["genders" => Genders::all(), "suppliers" => Suppliers::all()]);


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
    public function show(Books $books)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Books $books)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Books $books)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Books $books)
    {
        //
    }
}
