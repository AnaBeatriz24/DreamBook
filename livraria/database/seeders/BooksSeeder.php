<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BooksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('books')->insert([
           "title" => "Harry Potter e o Prisioneiro de Azkaban",
            "description" => "Harry tem escola",
            "isbn" => "978-85-325-1206-2",
            "publishers_id" => 1
        ]);
        DB::table('books')->insert([
           "title" => "Diário de um Banana 16 Bola Fora",
            "description" => "Greg não quer jogar bola",
            "isbn" => "978-65-86070-62-0",
            "publishers_id" => 2
        ]);
        DB::table('books')->insert([
           "title" => "Diário de um Banana 11 Vai ou Racha",
            "description" => "Greg só quer jogar videogame",
            "isbn" => "978-85-507-0060-1",
            "publishers_id" => 2
        ]);
    }
}
