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
        Schema::create('book', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("description");
            $table->string("isbn");
            $table->foreignId("publishingHouse_id")->references("publishing_house");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("entry", function (Blueprint $table){
            $table->dropForeign("publishingHouse_id");
            $table->dropColumn("publishingHouse_id");
        });
    }
};
