<?php

namespace App\Http\Controllers;

use App\Models\Genders;
use Hamcrest\Type\IsBoolean;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
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
            'name' => ['required', 'unique:genders']
        ]);

        $newGender = new Genders();
        $newGender->name = $request->name;
        $newGender->save();

    }

    /**
     * Display the specified resource.
     */
    public function show(Genders $genders, $status)
    {
        //
    }

    public function showActives(Genders $genders)
    {
        $genders = $this->editViewDataGenders(1);
        return Inertia::render('ShowGenders', [
            "genders" => $genders,
            "statusBar" => 1
        ]);
    }

    public function showInactives(Genders $genders)
    {
        $genders = $this->editViewDataGenders(0);
        return Inertia::render('ShowGenders', [
            "genders" => $genders,
            "statusBar" => 0
        ]);
    }

    public function editStatus(Genders $gender)
    {
        dd('aaaa');
        $gender->status = !$gender->status;
        $gender->save();
        return redirect()->route($gender->status ? "gender.showActives" : "gender.showInactives");
    }

    protected function editViewDataGenders($status): LengthAwarePaginator
    {
        $genders = DB::table('genders')
            ->select('id', 'name')
            ->where('status', '=', $status)
            ->paginate(6);

        return $genders;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Genders $genders)
    {
        dd("Mano00");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Genders $genders)
    {
        dd($request);

//        if ($user->email === $request->email) {
//            $request->validate([
//                'name_user' => 'required',
//                'email' => 'required',
//                'email_confirmation' => 'required',
//                'emails' => [new DifferentEmailRule('', $request->emails)]
//            ]);
        }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Genders $gender)
    {

    }
}
