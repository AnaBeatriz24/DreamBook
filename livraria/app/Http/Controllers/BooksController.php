<?php

namespace App\Http\Controllers;

use App\Models\Books;
use App\Models\Genders;
use App\Models\Publisher;
use App\Models\Suppliers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Authors;

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
        return Inertia::render('CreateBook',["genders" => Genders::all(), "suppliers" => Suppliers::all(), "books" => Books::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

//        dd($request);
        if(Books::where("isbn", $request->isbn)->count() === 0){
            $autores = [];
            foreach ($request->autor as $autor){
                $at = Authors::where("name", '=', $autor)->count();
                if($at === 0)
                    array_push($autores, Authors::create(["name" => $autor]));
                else {
                    $at = Authors::where("name", '=', $autor)->get();
                    array_push($autores, $at);
                }

            }
            $editora = Publisher::create(["name" => $request->editora])->id;

            if($request->file()){
                $fileName = time().'.'.$request->file()["imgcapa"]->getClientOriginalExtension();
                $filePath = $request->file()["imgcapa"]->storeAs('books', $fileName, 'public');
            }

            $book = Books::create([
                "title" => $request->titulo,
                "isbn" => $request->isbn,
                "description" => $request->descricao,
                "publishers_id" => $editora,
                "img" => $filePath
            ]);
            foreach ($autores as $autor){
                $book->authors()->attach($autor);
            }
            foreach ($request->genero as $genero){
                $gen = Genders::find($genero);
                $book->genders()->attach($gen);
            }
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Books $books)
    {
        $books = DB::table('books')->select("id", "title")->get();

        foreach ($books as $book) {
             $book->path = "$book->title.png";
        }

        return Inertia::render('ShowBooks', [
            'books' => $books,
        ]);
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
