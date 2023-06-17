<?php

namespace App\Http\Controllers;

use App\Models\Profiles;
use App\Models\User;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use mysql_xdevapi\Table;

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
        return Inertia::render("ShowCoupons");
    }

    /**
     * Display the specified resource.
     */
    public function showAllUsers()
    {
        $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '>', 1)->paginate(4);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 1]);
    }

    public function showSellersUsers()
    {
        $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '=', 2)->paginate(4);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 2]);
    }

    public function showAttendantsUsers()
    {
        $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '=', 3)->paginate(4);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 3]);
    }

    public function showBuyersUsers()
    {
        $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '=', 4)->paginate(4);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 4]);
    }

    public function showCustomersUsers()
    {
        $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '=', 5)->paginate(4);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 5]);
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
        dd("Criar método de deleção de usuário");
    }
}
