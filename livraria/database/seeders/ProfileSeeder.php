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
            'role' => "Gerente"
        ]);

        DB::table("profiles")->insert([
            'role' => "Vendedor"
        ]);

        DB::table("profiles")->insert([
            'role' => "Atendente"
        ]);

        DB::table("profiles")->insert([
            'role' => "Comprador"
        ]);

        DB::table("profiles")->insert([
            'role' => "Cliente"
        ]);
    }
}
