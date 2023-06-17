<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalesBooksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sales_books')->insert([
            "sales_id" => 1,
            "books_id" => 1,
            "quantity" => 2,
            "amount" => 50.00
        ]);
        DB::table('sales_books')->insert([
            "sales_id" => 2,
            "books_id" => 2,
            "quantity" => 1,
            "amount" => 50.00
        ]);
        DB::table('sales_books')->insert([
            "sales_id" => 3,
            "books_id" => 3,
            "quantity" => 4,
            "amount" => 50.00
        ]);
    }
}
