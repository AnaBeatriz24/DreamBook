<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ProfileSeeder::class,
            UserSeeder::class,
            PaymentMethodsSeeder::class,
            GenderSeeder::class,
            SuppliersSeeder::class,
            PublisersSeeder::class,
            BooksSeeder::class,
            StocksSeeder::class,
            SalesSeeder::class,
        ]);
    }
}
