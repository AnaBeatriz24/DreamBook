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
            "isbn" => "9788532512062",
            "publishers_id" => 1
        ]);
        DB::table('books')->insert([
           "title" => "Diário de um Banana 16 Bola Fora",
            "description" => "Greg não quer jogar bola",
            "isbn" => "9786586070620",
            "publishers_id" => 2
        ]);
        DB::table('books')->insert([
           "title" => "Diário de um Banana 11 Vai ou Racha",
            "description" => "Greg só quer jogar videogame",
            "isbn" => "9788550700601",
            "publishers_id" => 2
        ]);
    }
}
