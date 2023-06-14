<?php

namespace App\Http\Controllers;

use App\Models\Coupons;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;
use function Termwind\render;

class CouponsController extends Controller
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
        return Inertia::render('CreateCoupon');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        /*
         * TODO: Adicionar as validações sobre o request quando houver pasta lang
         */

        $newCoupon = new Coupons();
        $newCoupon->name = $request->name;
        $newCoupon->discount = $request->discount;
        $newCoupon->save();

        return redirect()->route('coupon.success');
    }

    public function createCouponFinish()
    {
        return Inertia::render("FinishCreateCoupon");
    }

    /**
     * Display the specified resource.
     */
    public function show(Coupons $coupons)
    {
        return Inertia::render('ShowCoupons');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Coupons $coupons)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Coupons $coupons)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Coupons $coupons)
    {
        //
    }
}
