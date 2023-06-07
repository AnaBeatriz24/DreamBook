<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("genders")->insert([
            'name' => "Ação e Aventura"
        ]);

        DB::table("genders")->insert([
            'name' => "Autoajuda"
        ]);

        DB::table("genders")->insert([
            'name' => "Biografia"
        ]);

        DB::table("genders")->insert([
            'name' => "Crimes Reais"
        ]);

        DB::table("genders")->insert([
            'name' => "Conto"
        ]);

        DB::table("genders")->insert([
            'name' => "Drama"
        ]);

        DB::table("genders")->insert([
            'name' => "Economia"
        ]);

        DB::table("genders")->insert([
            'name' => "Educação"
        ]);

        DB::table("genders")->insert([
            'name' => "Esporte"
        ]);

        DB::table("genders")->insert([
            'name' => "Fantasia"
        ]);

        DB::table("genders")->insert([
            'name' => "Ficção científica"
        ]);

        DB::table("genders")->insert([
            'name' => "Ficção histórica"
        ]);

        DB::table("genders")->insert([
            'name' => "Gastronomia"
        ]);

        DB::table("genders")->insert([
            'name' => "Guias & Como fazer"
        ]);

        DB::table("genders")->insert([
            'name' => "História"
        ]);

        DB::table("genders")->insert([
            'name' => "História em Quadrinhos"
        ]);

        DB::table("genders")->insert([
            'name' => "Horror"
        ]);

        DB::table("genders")->insert([
            'name' => "Humanidades e Ciências Sociais"
        ]);

        DB::table("genders")->insert([
            'name' => "Humor"
        ]);

        DB::table("genders")->insert([
            'name' => "Infantil"
        ]);

        DB::table("genders")->insert([
            'name' => "Jogos & Atividades"
        ]);

        DB::table("genders")->insert([
            'name' => "LGBT+"
        ]);

        DB::table("genders")->insert([
            'name' => "Memórias e Autobiografia"
        ]);

        DB::table("genders")->insert([
            'name' => "Novela"
        ]);

        DB::table("genders")->insert([
            'name' => "Paternidade e família"
        ]);

        DB::table("genders")->insert([
            'name' => "Poesia"
        ]);

        DB::table("genders")->insert([
            'name' => "Psicologia"
        ]);


        DB::table("genders")->insert([
            'name' => "Religião e Espiritualidade"
        ]);

        DB::table("genders")->insert([
            'name' => "Romance"
        ]);

        DB::table("genders")->insert([
            'name' => "Tecnologia e Ciência"
        ]);

        DB::table("genders")->insert([
            'name' => "Thriller e Suspense"
        ]);

        DB::table("genders")->insert([
            'name' => "Viagem"
        ]);
    }
}
