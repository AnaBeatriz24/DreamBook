<?php

namespace App\Http\Controllers;

use App\Models\Coupons;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

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
        $coupons = $this->editViewDataCoupons(1);
        return Inertia::render('ShowCoupons', [
            "coupons" => $coupons,
            "statusBar" => 1
        ]);
    }

    public function showInactives(Coupons $coupons)
    {
        $coupons = $this->editViewDataCoupons(0);
        return Inertia::render('ShowCoupons', [
            "coupons" => $coupons,
            "statusBar" => 0
        ]);
    }

    public function editStatus(Coupons $coupon)
    {
        $coupon->status = !$coupon->status;
        $coupon->save();
        return redirect()->route($coupon->status ? "coupon.showActive" : "coupon.showInactive");
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

    protected function editViewDataCoupons($status): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        $coupons = DB::table('coupons')
            ->select('id', 'name', 'discount', 'status')
            ->where('status', '=', $status)
            ->paginate(7);

        foreach ($coupons as $coupon) {
            $coupon->status = $coupon->status == 0 ? "Desativado" : "Ativo";
            $coupon->discount = "R$ $coupon->discount";
        }

        return $coupons;
    }
}
