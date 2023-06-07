<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("users")->insert([
            'name' => "gerente",
            'email' => "gerente@mail.com.br",
            'password' => Hash::make("123"),
            'email_verified_at' => now(),
            'status' => true,
            'profile_id' => 1,
        ]);

        DB::table("users")->insert([
            'name' => "vendedor",
            'email' => "vendedor@mail.com.br",
            'password' => Hash::make("123"),
            'email_verified_at' => now(),
            'status' => true,
            'profile_id' => 2,
        ]);

        DB::table("users")->insert([
            'name' => "atendente",
            'email' => "atendente@mail.com.br",
            'password' => Hash::make("123"),
            'email_verified_at' => now(),
            'status' => true,
            'profile_id' => 3,
        ]);

        DB::table("users")->insert([
            'name' => "comprador",
            'email' => "comprador@mail.com.br",
            'password' => Hash::make("123"),
            'email_verified_at' => now(),
            'status' => true,
            'profile_id' => 4,
        ]);
        DB::table("users")->insert([
            'name' =>"cliente 1",
            'email' =>"cliente1@mail.com.br",
            'email_verified_at' => now(),
            'status' => true,
            'profile_id' => 5,

        ]);
        DB::table("users")->insert([
            'name' =>"cliente 2",
            'email' =>"cliente2@mail.com.br",
            'email_verified_at' => now(),
            'status' => true,
            'profile_id' => 5,

        ]);
        DB::table("users")->insert([
            'name' =>"cliente 3",
            'email' =>"cliente3@mail.com.br",
            'email_verified_at' => now(),
            'status' => true,
            'profile_id' => 5,

        ]);
    }
}
