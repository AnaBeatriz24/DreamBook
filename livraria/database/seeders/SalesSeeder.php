<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sales')->insert([
            "users_id" => 5,
            "status" => 0,
            "buyNow" => 0,
            "tradeDate" => now(),
        ]);
        DB::table('sales')->insert([
            "users_id" => 5,
            "status" => 0,
            "buyNow" => 0,
            "tradeDate" => now(),
        ]);
        DB::table('sales')->insert([
            "users_id" => 5,
            "status" => 0,
            "buyNow" => 0,
            "tradeDate" => now(),
        ]);
    }
}
