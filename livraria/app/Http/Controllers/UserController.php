<?php

namespace App\Http\Controllers;

use App\Models\Profiles;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    public function create()
    {
        $profiles = (Auth::user()->profiles_id === 1) ? Profiles::where("id", ">", 1)->get() : Profiles::where("id", "=", 5)->get();
        return Inertia::render('CreateUser', ["profiles" => $profiles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->profiles_id = $request->role;
        $user->email_verified_at = now();
        $user->save();
        return Inertia::render("ConfirmCreateUser");
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
