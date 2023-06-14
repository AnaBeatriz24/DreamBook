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
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/createUsers', [UserController::class, 'create'])->name('user.create');
    Route::post('/createUsers', [UserController::class, 'store'])->name('user.store');
    Route::get('/showUsers', [UserController::class, 'show'])->name('user.show');

    Route::get('/createCoupons', [CouponsController::class, 'create'])->name('coupon.create');
    Route::get('/showCoupons', [CouponsController::class, 'show'])->name('coupon.show');

    Route::get('/createBook', [BooksController::class, 'create'])->name('book.create');
    Route::get('/showBooks', [BooksController::class, 'searchBooks'])->name('book.search');

    Route::get('/salesHistory', function () {
        dd('Desenvolver tela de histórico de vendas');
    })->name('sales.history');

    Route::get('/openSales', function () {
        dd('Desenvolver tela de pedidos abertos');
    })->name('sales.open');

    Route::get('/startSale', function () {
        dd('Desenvolver tela de iniciar pedido');
    })->name('sales.start');

});

require __DIR__.'/auth.php';
