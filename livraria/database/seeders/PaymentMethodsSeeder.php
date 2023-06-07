<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentMethodsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("payment_methods")->insert([
            'method' => "PIX"
        ]);

        DB::table("payment_methods")->insert([
            'method' => "Boleto"
        ]);

        DB::table("payment_methods")->insert([
            'method' => "Crédito"
        ]);

        DB::table("payment_methods")->insert([
            'method' => "Dinheiro"
        ]);

    }
}
