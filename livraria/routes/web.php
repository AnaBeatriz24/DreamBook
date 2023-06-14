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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', ['generos' => \App\Models\Genders::all()]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/createUsers', [UserController::class, 'create'])->name('user.create');
    Route::get('/showUsers', [UserController::class, 'show'])->name('user.show');

    Route::get('/createCoupons', [CouponsController::class, 'create'])->name('coupon.create');
    Route::post('/createCoupons', [CouponsController::class, 'store'])->name('coupon.store');

    Route::get("/createdCoupons", [CouponsController::class, 'createCouponFinish'])
        ->name("coupon.success");

    Route::get('/showCoupons', [CouponsController::class, 'show'])->name('coupon.show');

    Route::get('/createBook', [BooksController::class, 'create'])->name('book.create');
    Route::get('/showBooks', [BooksController::class, 'searchBooks'])->name('book.search');
});

Route::get("home")
    ->middleware(['auth', 'verified'])->name("home");

require __DIR__.'/auth.php';
