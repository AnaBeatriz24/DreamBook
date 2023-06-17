<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StocksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('stocks')->insert([
            "quantity" => 999,
            "amount" => 50.00,
            "books_id" => 1
        ]);
        DB::table('stocks')->insert([
            "quantity" => 800,
            "amount" => 45.00,
            "books_id" => 2
        ]);
        DB::table('stocks')->insert([
            "quantity" => 800,
            "amount" => 45.00,
            "books_id" => 3
        ]);
    }
}
