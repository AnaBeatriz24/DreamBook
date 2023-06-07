<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("profiles")->insert([
            'profile' => "Gerente"
        ]);

        DB::table("profiles")->insert([
            'profile' => "Vendedor"
        ]);

        DB::table("profiles")->insert([
            'profile' => "Atendente"
        ]);

        DB::table("profiles")->insert([
            'profile' => "Comprador"
        ]);

        DB::table("profiles")->insert([
            'profile' => "Cliente"
        ]);
    }
}
