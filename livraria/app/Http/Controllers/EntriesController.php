<?php

namespace App\Http\Controllers;

use App\Models\Books;
use App\Models\Entries;
use App\Models\Suppliers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EntriesController extends Controller
{
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $fornecedor = Suppliers::where("cnpj", $request->cnpj_fornecedor)->count();
        if($fornecedor === 0){
            $fornecedor = Suppliers::create(["cnpj" => $request->cnpj_fornecedor, "name"=> $request->fornecedor]);
        } else {
            $fornecedor = Suppliers::where("cnpj", $request->cnpj_fornecedor)->first();
        }

        $entry = Entries::create(["users_id"=> Auth::user()->id, "suppliers_id"=>$fornecedor->id]);

        foreach ($request->listaLivro as $lista){
            $livro = Books::where("isbn", $lista["isbn"])->first();
            $entry->books()->attach([$livro->id => ["quantity" => $lista["quantity"], "amount"=> floatval($lista["amount"])]]);
        }

        //fazer a tela de agradecimento aqui
//        return Inertia::render('ShowBooks', []);
        return redirect()->route("sucess.book");


    }

    /**
     * Display the specified resource.
     */
    public function show(Entries $entries)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Entries $entries)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Entries $entries)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Entries $entries)
    {
        //
    }
}
