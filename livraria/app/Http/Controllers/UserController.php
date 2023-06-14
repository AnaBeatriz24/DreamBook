<?php

namespace App\Http\Controllers;

use App\Models\Profiles;
use Illuminate\Http\Request;
use Inertia\Inertia;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $request->validate([
            'role' => 'required',
            'name' => 'required',
            'email' => 'required',
        ]);
        $modelo = new User();
        $modelo->role = $request->role;
        $modelo->name = $request->name;
        $modelo->email = $request->email;
        $modelo->save();

        $profile = Profiles::all() -> where('profile_id', )


        return Inertia::render('CreateUser', ["profiles" => Profiles::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return Inertia::render('ShowUsers');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
