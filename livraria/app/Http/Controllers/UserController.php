<?php

namespace App\Http\Controllers;

use App\Models\Profiles;
use App\Models\Sales;
use App\Models\User;
use DateTime;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use function Symfony\Component\String\s;

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
    public function showAllUsers(Request $request)
    {
        if (Auth::user()->profiles_id !== 1) {
            return redirect()->route('user.showCustomers');
        } else {
            if (!empty($request->value)) {
                switch ($request->type){
                    case "name":
                    {
                        $query = trim($request->value);
                        $users = DB::table('users')
                            ->where('name', 'like', '%' . $query . '%')
                            ->join('profiles', function (JoinClause $joinClause) {
                                $joinClause->on('users.profiles_id', '=', 'profiles.id');
                            })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '>', 1)->where("status", "=", 1)->paginate(7);
                        break;
                    }
                    case "email":
                    {
                        $query = trim($request->value);
                        $users = DB::table('users')
                            ->where('email', 'like', '%' . $query . '%')
                            ->join('profiles', function (JoinClause $joinClause) {
                                $joinClause->on('users.profiles_id', '=', 'profiles.id');
                            })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '>', 1)->where("status", "=", 1)->paginate(7);
                        break;
                    }
                }
            } elseif($request->type === "profile"){
                $users = DB::table('users')
                    ->join('profiles', function (JoinClause $joinClause) {
                        $joinClause->on('users.profiles_id', '=', 'profiles.id');
                    })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '=', $request->profiles)->where("status", "=", 1)->paginate(7);
            } else {
                $users = DB::table('users')->join('profiles', function (JoinClause $joinClause) {
                    $joinClause->on('users.profiles_id', '=', 'profiles.id');
                })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '>', 1)->where("status", "=", 1)->paginate(7);
            }

            return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 1]);
        }
    }

    public function showSellersUsers()
    {
        $users = DB::table('users')->join('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '=', 2)->where("status", "=", 1)->paginate(7);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 2]);
    }

    public function showAttendantsUsers()
    {
        $users = DB::table('users')->join('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '=', 3)->where("status", "=", 1)->paginate(7);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 3]);
    }

    public function showBuyersUsers()
    {
        $users = DB::table('users')->join('profiles', function (JoinClause $joinClause) {
            $joinClause->on('users.profiles_id', '=', 'profiles.id');
        })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '=', 4)->where("status", "=", 1)->paginate(7);

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 4]);
    }

    public function showCustomersUsers()
    {
        if (Auth::user()->profiles_id != 1) {
            $users = DB::table('users')->join('profiles', function (JoinClause $joinClause) {
                $joinClause->on('users.profiles_id', '=', 'profiles.id');
            })->selectRaw('users.id, users.name, users.email, users.email')->where('users.profiles_id', '=', 5)->where("status", "=", 1)->paginate(7);
        } else {
            $users = DB::table('users')->join('profiles', function (JoinClause $joinClause) {
                $joinClause->on('users.profiles_id', '=', 'profiles.id');
            })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '=', 5)->where("status", "=", 1)->paginate(7);
        }

        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 5]);
    }

    public function showInactives(Request $request)
    {
        if (Auth::user()->profiles_id !== 1) {
            if (!empty($request->value)) {
                switch ($request->type){
                    case "name":
                    {
                        $query = trim($request->value);
                        $users = DB::table('users')
                            ->where('name', 'like', '%' . $query . '%')
                            ->join('profiles', function (JoinClause $joinClause) {
                                $joinClause->on('users.profiles_id', '=', 'profiles.id');
                            })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '=', Auth::user()->profiles_id)->where("status","=", 0)->paginate(7);
                        break;
                    }
                    case "email":
                    {
                        $query = trim($request->value);
                        $users = DB::table('users')
                            ->where('email', 'like', '%' . $query . '%')
                            ->join('profiles', function (JoinClause $joinClause) {
                                $joinClause->on('users.profiles_id', '=', 'profiles.id');
                            })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '=', Auth::user()->profiles_id)->where("status","=", 0)->paginate(7);
                        break;
                    }
                }
            } else {
                $users = DB::table('users')->join('profiles', function (JoinClause $joinClause) {
                    $joinClause->on('users.profiles_id', '=', 'profiles.id');
                })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '=', Auth::user()->profiles_id)->where("status","=", 0)->paginate(7);
            }
        } else {
            if (!empty($request->value)) {
                switch ($request->type){
                    case "name":
                    {
                        $query = trim($request->value);
                        $users = DB::table('users')
                            ->where('name', 'like', '%' . $query . '%')
                            ->join('profiles', function (JoinClause $joinClause) {
                                $joinClause->on('users.profiles_id', '=', 'profiles.id');
                            })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '>', 1)->where("status","=", 0)->paginate(7);
                        break;
                    }
                    case "email":
                    {
                        $query = trim($request->value);
                        $users = DB::table('users')
                            ->where('email', 'like', '%' . $query . '%')
                            ->join('profiles', function (JoinClause $joinClause) {
                                $joinClause->on('users.profiles_id', '=', 'profiles.id');
                            })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '>', 1)->where("status","=", 0)->paginate(7);
                        break;
                    }
                }
            } elseif($request->type === "profile"){
                $users = DB::table('users')
                    ->join('profiles', function (JoinClause $joinClause) {
                        $joinClause->on('users.profiles_id', '=', 'profiles.id');
                    })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '=', $request->profiles)->where("status", "=", 0)->paginate(7);
            } else {
                $users = DB::table('users')->join('profiles', function (JoinClause $joinClause) {
                    $joinClause->on('users.profiles_id', '=', 'profiles.id');
                })->selectRaw('users.id, users.name, users.email, profiles.role')->where('users.profiles_id', '>', 1)->where("status","=", 0)->paginate(7);
            }
        }
        return Inertia::render('ShowUsers', ['users' => $users, 'statusBar'=> 6]);
    }

    public function history()
    {
        $sales = DB::table('sales_books')
            ->join('sales', 'sales_books.sales_id', '=', 'sales.id')
            ->join('books', 'sales_books.books_id', '=', 'books.id')
            ->select('books.id', 'books.img', 'books.title', 'sales.tradeDate', 'sales.attendant_id', 'sales.cashier_id', 'sales_books.amount')
            ->where('sales.status', 1)
            ->where('sales.users_id', Auth::id())
            ->paginate(7);

        foreach ($sales as $sale) {
            $cashier = User::where('id', '=', $sale->cashier_id)->first();
            $attendant = User::where('id', '=', $sale->attendant_id)->first();

            if (is_null($cashier)) {
                $sale->cashier = "Não houve caixa";
            } else {
                $sale->cashier = $cashier->name;
            }
            if (is_null($attendant)) {
                $sale->attendant = "Não houve atendente";
            } else {
                $sale->attendant = $attendant->name;
            }

            unset($sale->cashier_id);
            unset($sale->attendant_id);
        }

        foreach ($sales as $sale) {
            $sale->tradeDate = (new DateTime($sale->tradeDate))->format("d/m/Y h:m:s");
        }

        return Inertia::render('UserHistory', [
            'sales' => $sales,
        ]);

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

    public function active(User $user)
    {
        $user->status = 1;
        $user->save();
        return redirect()->back();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->status = 0;
        $user->save();
        return redirect()->back();

    }
}
