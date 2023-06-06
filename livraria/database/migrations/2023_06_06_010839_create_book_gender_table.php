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
        Schema::create('book_gender', function (Blueprint $table) {
            $table->foreignId("book_id")->references("book");
            $table->foreignId("gender_id")->references("gender");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("book_gender", function (Blueprint $table){
            $table->dropForeign("book_id");
            $table->dropColumn("book_id");

            $table->dropForeign("gender_id");
            $table->dropColumn("gender_id");
        });
    }
};
