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
        Schema::create('address', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("cep");
            $table->integer("number");
            $table->string("complement");
            $table->foreignId("users_id")->references("users");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("address", function (Blueprint $table){
            $table->dropForeign("users_id");
            $table->dropColumn("users_id");
        });
    }
};
