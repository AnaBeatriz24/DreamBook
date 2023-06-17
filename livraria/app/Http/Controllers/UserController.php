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
use stdClass;

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
        if (Auth::user()->profiles_id != 1) {
            return redirect()->route('user.showCustomers');
        } else {
            $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
                $joinClause->on('users.profiles_id', '=', 'profiles.id');
            })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '>', 1)->paginate(7);

            return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 1]);
        }
    }

    public function showSellersUsers()
    {
        $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '=', 2)->paginate(7);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 2]);
    }

    public function showAttendantsUsers()
    {
        $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '=', 3)->paginate(7);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 3]);
    }

    public function showBuyersUsers()
    {
        $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '=', 4)->paginate(7);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 4]);
    }

    public function showCustomersUsers()
    {
        if (Auth::user()->profiles_id != 1) {
            $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
                $joinClause->on('users.profiles_id', '=', 'profiles.id');
            })->selectRaw('users.id, users.name, users.email')->where('users.profiles_id', '=', 5)->paginate(7);
        } else {
            $users = DB::table('users')->leftJoin('profiles', function (JoinClause $joinClause) {
                $joinClause->on('users.profiles_id', '=', 'profiles.id');
            })->selectRaw('users.id, users.name, profiles.role')->where('users.profiles_id', '=', 5)->paginate(7);
        }

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
    public function destroy(User $user)
    {
        DB::table('users')->where("id", '=', $user->id)->delete();
        $user->destroy($user->id);

        $userEmail = new stdClass();
        $userEmail->name = $user->name;
        $userEmail->email = $user->email;
        $userEmail->id = base64_encode($user->id);

    }
}
