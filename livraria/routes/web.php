<?php

use App\Http\Controllers\BooksController;
use App\Http\Controllers\CouponsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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

Route::get('/contact', function () {
    dd('Desenvolver tela de entre em contato');
})->name('contact.index');

Route::get('/team', function () {
    dd('Desenvolver tela de time/sobre nós');
})->name('team.index');

Route::get('/home', function () {
    return Inertia::render('Home', ['generos' => \App\Models\Genders::all()]);
})->middleware(['auth', 'verified'])->name('home');

Route::middleware('auth')->group(function () {

    Route::get("/cart", function () {
        dd("carrinho");
    })->name("cart");

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/createUsers', [UserController::class, 'create'])->name('user.create');
    Route::post('/createUsers', [UserController::class, 'store'])->name('user.store');
    Route::post('/deleteUser/{user}', [UserController::class, 'destroy'])->name('user.destroy');

    //Visualização da tabela de usuários
    Route::get('/showUsers', [UserController::class, 'showAllUsers'])->name('user.showAll');
    Route::get('/showSellers', [UserController::class, 'showSellersUsers'])->name('user.showSellers');
    Route::get('/showAttendants', [UserController::class, 'showAttendantsUsers'])->name('user.showAttendants');
    Route::get('/showBuyers', [UserController::class, 'showBuyersUsers'])->name('user.showBuyers');
    Route::get('/showCustomers', [UserController::class, 'showCustomersUsers'])->name('user.showCustomers');


    Route::get('/coupons/createCoupon', [CouponsController::class, 'create'])->name('coupon.create');

    Route::post('/coupons/createCoupon', [CouponsController::class, 'store'])->name('coupon.store');

    Route::get('coupons/createdCoupon', [CouponsController::class, 'createCouponFinish'])
    ->name('coupon.success');

    Route::get('/coupons/showActiveCoupons', [CouponsController::class, 'show'])->name('coupon.showActive');

    Route::get('/coupons/showInactiveCoupons', [CouponsController::class, 'showInactives'])->name('coupon.showInactive');

    Route::post("/coupons/{coupon}", [CouponsController::class, 'editStatus'])->name("coupons.editStatus");


    Route::get('/createBook', [BooksController::class, 'create'])->name('book.create');
    Route::get('/showBooks', [BooksController::class, 'searchBooks'])->name('book.search');

    Route::get('/salesHistory', function () {
        dd('Desenvolver tela de histórico de vendas');
    })->name('sales.history');

    Route::get('/openSales', function () {
        dd('Desenvolver tela de pedidos abertos');
    })->name('sales.open');

});
require __DIR__.'/auth.php';
