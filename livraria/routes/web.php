<?php

use App\Http\Controllers\BooksController;
use App\Http\Controllers\CouponsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EntriesController;
use App\Models\Genders;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,

        /*TODO: Fazer a seleção dos livros mais vendidos pelo banco de dados */
        'livrosMaisVendidos' => [
            0 => [
                "name" => "Harry Potter e o Cálice de Fogo",
                "path" => "books/HarryPotterCaliceFogo.png"
            ],
            1 => [
                "name" => "O diário de Anne Frank",
                "path" => "books/DiarioAnne.png"
            ],
            2 => [
                "name" => "A temperatura entre você e eu",
                "path" => "books/TemperaturaVoceEu.png"
            ],
        ],
    ]);
});

Route::get('/contact', fn() => Inertia::render("Contact"))->name('contact.show');

Route::get('/team', function () {
    dd('Desenvolver tela de time/sobre nós');
})->name('team.index');

Route::get('/home', function () {
    return Inertia::render('Home', ['generos' => \App\Models\Genders::all()]);
})->middleware(['auth', 'verified'])->name('home');

Route::middleware('auth')->group(function () {

    Route::get("/cart", [SalesController::class, 'create'])->name("cart");
    Route::post("/cart", [SalesController::class, 'store'])->name("cart.store");
    Route::get('/openSales', [SalesController::class, 'showOpenSales'])->name('sales.open');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/createUsers', [UserController::class, 'create'])->name('user.create');
    Route::post('/createUsers', [UserController::class, 'store'])->name('user.store');
    Route::post('/deleteUser/{user}', [UserController::class, 'destroy'])->name('user.destroy');
    Route::post('/activeUser/{user}', [UserController::class, 'active'])->name('user.active');

    //Visualização da tabela de usuários
    Route::get('/showUsers', [UserController::class, 'showAllUsers'])->name('user.showAll');
    Route::get('/showSellers', [UserController::class, 'showSellersUsers'])->name('user.showSellers');
    Route::get('/showAttendants', [UserController::class, 'showAttendantsUsers'])->name('user.showAttendants');
    Route::get('/showBuyers', [UserController::class, 'showBuyersUsers'])->name('user.showBuyers');
    Route::get('/showCustomers', [UserController::class, 'showCustomersUsers'])->name('user.showCustomers');
    Route::get('/showInactives', [UserController::class, 'showInactives'])->name('user.showInactives');

    Route::post('/showUser', [UserController::class, 'showAllUsers'])->name('user.search');



    Route::get('/coupons/createCoupon', [CouponsController::class, 'create'])->name('coupon.create');

    Route::post('/coupons/createCoupon', [CouponsController::class, 'store'])->name('coupon.store');

    Route::get('/coupons/createdCoupon', [CouponsController::class, 'createCouponFinish'])
    ->name('coupon.success');

    Route::get('/coupons/showActiveCoupons', [CouponsController::class, 'show'])->name('coupon.showActive');
    Route::get('/coupons/showInactiveCoupons', [CouponsController::class, 'showInactives'])->name('coupon.showInactive');
    Route::post("/coupons/{coupon}", [CouponsController::class, 'editStatus'])->name("coupons.editStatus");


    Route::get('/books/showActiveBooks', [BooksController::class, 'showtwo'])->name('book.showActive');
    Route::get('/books/showInactiveBooks', [BooksController::class, 'showInactives'])->name('book.showInactive');
    Route::post("/books/{book}", [BooksController::class, 'editStatus'])->name("book.editStatus");


    Route::get('/createBook', [BooksController::class, 'create'])->name('book.create');
    Route::post('/createBook', [BooksController::class, 'store'])->name('book.store');
    Route::post('/createEntry', [EntriesController::class, 'store'])->name('entry.store');


    Route::get('/SucessCreateBook', fn() => Inertia::render("SucessCreateBook"))->name('sucess.book');

   // Route::get('/ShowBookList',[BooksController::class, 'showAdd'])->name('book.show');
    Route::post('/ShowBookList/{book}',[BooksController::class, 'destroy'])->name('book.destroy');
    Route::get('/ShowBookList/EditBook/{book}',[BooksController::class, 'update'])->name('book.update');


    Route::get('/Edit/{book}', [BooksController::class, 'edit'])->name('books.edit');
    Route::get("/EditB/{book}", [BooksController::class, 'editBook'])->name('store.editBook');



    Route::get('/showBooks/{gender}', [BooksController::class, 'show'])->name('book.searchGender');
    Route::post('/showBooks/{gender}', [BooksController::class, 'show'])->name('books.searchSubmit');

    Route::get("/showBook/{book}", [BooksController::class, 'index'])->name("book.index");

    Route::get('/salesHistory', function () {
        dd('Desenvolver tela de histórico de vendas');
    })->name('sales.history');

});

Route::get('/showBooks', [BooksController::class, 'show'])->name('book.search');
Route::get('/showBooks/{gender}', [BooksController::class, 'show'])->name('book.searchGender');
Route::post('/showBooks/{gender}', [BooksController::class, 'show'])->name('books.searchSubmit');

require __DIR__.'/auth.php';
