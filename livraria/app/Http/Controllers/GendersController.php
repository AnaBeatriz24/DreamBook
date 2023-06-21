<?php

namespace App\Http\Controllers;

use App\Models\Genders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GendersController extends Controller
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
        /*
        * TODO: Adicionar as validações sobre o request quando houver pasta lang
        */

        $request->validate([
            'name' => 'required'
        ]);

        $newGender = new Genders();
        $newGender->name = $request->name;
        $newGender->save();

    }

    /**
     * Display the specified resource.
     */
    public function show(Genders $genders)
    {
        $genders = DB::table('genders')->orderBy('id')->select('id', 'name')->paginate(6);

        return Inertia::render('ShowGenders', ['genders' => $genders]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Genders $genders)
    {
        dd('AAAAAAAAAAAAAA');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Genders $genders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Genders $gender)
    {

    }
}
