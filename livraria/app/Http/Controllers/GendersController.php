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

    public function showActives()
    {
        $genders = $this->editViewDataGenders(1);
        return Inertia::render('ShowGenders', [
            "genders" => $genders,
            "statusBar" => 1,
        ]);
    }

    public function showInactives()
    {
        $genders = $this->editViewDataGenders(0);
        return Inertia::render('ShowGenders', [
            "genders" => $genders,
            "statusBar" => 0
        ]);
    }

    public function editStatus(Genders $gender)
    {
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
    public function edit(Genders $gender)
    {
        $genders = Genders::where('id', $gender->id)->get();

        return Inertia::render('EditGender', ['gender' => $genders]);
    }

    public function editedFinish()
    {
        return Inertia::render('FinishEditedGender');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Genders $gender)
    {
        if ($request->name === $gender->name) {
            $request->validate([
                'name' => 'required',
            ]);
        } else {
            $request->validate([
                'name' => 'required', 'unique:genders'
            ]);
        }

        if ($gender->name !== $request->name) {
            $gender->name = $request->name;
            $gender->save();
        }

        return redirect()->route('gender.success');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Genders $gender)
    {

    }
}
