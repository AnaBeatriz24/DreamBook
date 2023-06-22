<?php

namespace App\Http\Controllers;

use App\Models\Books;
use App\Models\Company;
use App\Models\Genders;
use App\Models\Publisher;
use App\Models\Stocks;
use App\Models\Suppliers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Authors;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Books $book)
    {
        $publisher = DB::table('publishers')
            ->where("id", $book->publishers_id)
            ->first()
        ;
        $book->publisher = $publisher->name;

        $author = DB::table('books_authors')
            ->join('authors', 'books_authors.authors_id', '=', "authors.id")
            ->where("books_id", $book->id)
            ->first()
        ;
        $book->author = $author->name;

        $stocks = DB::table('stocks')
            ->where("books_id", $book->id)
            ->first()
        ;
        $book->amount = $stocks->amount;


        return Inertia::render("BookIndex", ['book' => $book]);
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
                $filePath = $request->file()["imgcapa"]->storeAs('/', $fileName, 'public');
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

        return redirect()->route("book.create");

    }

    /**
     * Display the specified resource.
     */
    public function show(Books $books, Genders $gender)
    {
        if (!empty($gender->id)) {
            $queryGender = trim($gender->id);

            $gender = Genders::find($queryGender);

            $books = DB::table('books_genders')
                ->join('books', 'books_genders.books_id', '=', 'books.id')
                ->where('genders_id', '=', $gender->id)
                ->get();
        } else {
            $books = DB::table('books')->get();
        }

        $genders = DB::table('genders')->get();

        foreach ($books as $book) {
             $book->path = "$book->title.png";
        }

        return Inertia::render('ShowBooks', [
            'books' => $books,
            'genders' => $genders,
        ]);
    }

//    public function showAdd(Books $books, Stocks $stocks){
//
//
//        $results = DB::table('books')
//            ->join('stocks', 'books.id', '=', 'stocks.books_id')
//            ->select("books.id", "books.title", "stocks.quantity", "stocks.amount")
//            ->get();
//
//        return Inertia::render('ShowBookList',["results"=>$results]);
//    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Books $book)
    {
        //dd($books);

        return Inertia::render('EditBook',['book'=>$book]);
    }

    public function editBook(Books $book, Request $request, Stocks $stocks)
    {

        $results = DB::table('books')
            ->join('stocks', 'books.id', '=', 'stocks.books_id')
            ->get();

        $results->title = $request ->title_book;
        $results->description = $request ->descricao;
        $results->isbn = $request->isbn_book;
        $results->img = $request->imgcapa_books;
        $results->publishers = $request->editora_book;
        $results->authors= $request->autor_book;
        $results->genders=$request->genero_book;
        $results->quantity=$request->quantidade_stocks;
        $results->amount=$request->valor_entrada;

        dd($results);





//        if(Books::where("isbn", $request->isbn)->count() === 0){
//            $autores = [];
//            foreach ($request->autor as $autor){
//                $at = Authors::where("name", '=', $autor)->count();
//                if($at === 0)
//                    array_push($autores, Authors::create(["name" => $autor]));
//                else {
//                    $at = Authors::where("name", '=', $autor)->get();
//                    array_push($autores, $at);
//                }
//
//            }
//            $editora = Publisher::create(["name" => $request->editora])->id;
//
//            if($request->file()){
//                $fileName = time().'.'.$request->file()["imgcapa"]->getClientOriginalExtension();
//                $filePath = $request->file()["imgcapa"]->storeAs('/', $fileName, 'public');
//            }
//
//            $book = Books::create([
//                "title" => $request->titulo,
//                "isbn" => $request->isbn,
//                "description" => $request->descricao,
//                "publishers_id" => $editora,
//                "img" => $filePath
//            ]);
//            foreach ($autores as $autor){
//                $book->authors()->attach($autor);
//            }
//            foreach ($request->genero as $genero){
//                $gen = Genders::find($genero);
//                $book->genders()->attach($gen);

//        $manager->name = $request->name_manager;
//        $manager->email = $request->email;
//        $manager->save();
    }

    public function showtwo(Books $books, Stocks $stocks)
    {
        $results = $this->editViewDataBook(1);
//        $results = DB::table('books')
//            ->join('stocks', 'books.id', '=', 'stocks.books_id')
//            ->select("books.id", "books.title", "stocks.quantity", "stocks.amount")
//            ->get();

        return Inertia::render('ShowBookList', [
            "results" =>$results,
            "statusBar" => 1
        ]);
    }
    public function showInactives(Books $books)
    {
        $results = $this->editViewDataBook(0);

//        $results = DB::table('books')
//            ->join('stocks', 'books.id', '=', 'stocks.books_id')
//            ->select("books.id", "books.title", "stocks.quantity", "stocks.amount")
//            ->get();

        return Inertia::render('ShowBookList', [
            "results" =>$results,
            "statusBar" => 0
        ]);
    }


    public function editStatus(Books $book)
    {
        $results = $book;
        $results->status = !$results->status;
        $results->save();
        return redirect()->route($results->status ? "book.showActive" : "book.showInactive");
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
    public function destroy(Books $book)

    {
        //
    }
    protected function editViewDataBook($status): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return DB::table('books')
            ->where('status', '=', $status)
            ->join('stocks', 'books.id', '=', 'stocks.books_id')
            ->select("books.id", "books.title", "books.status", "stocks.quantity", "stocks.amount")
            ->paginate(7);
//        $books = DB::table('books')
//            ->select('id', 'title', 'status')
//            ->where('status', '=', $status)
//





    }

}
