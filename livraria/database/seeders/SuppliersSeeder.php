<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SuppliersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('suppliers')->insert([
            "name" => "Criativa",
            "cnpj" => "35.368.139/0001-77"
        ]);

        DB::table('suppliers')->insert([
            "name" => "Polytechnica",
            "cnpj" => "20.663.687/0001-52"
        ]);
    }
}
