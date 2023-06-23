<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("cep");
            $table->string("district");
            $table->string("city");
            $table->string("uf");
            $table->integer("number");
            $table->string("complement");
            $table->unsignedBigInteger("users_id");
            $table->timestamps();

            $table->foreign('users_id')
                ->references('id')
                ->on("users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
