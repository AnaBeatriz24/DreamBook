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
        Schema::create('book_author', function (Blueprint $table) {
            $table->foreignId("book_id")->references("book");
            $table->foreignId("author_id")->references("author");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("book_author", function (Blueprint $table){
            $table->dropForeign("book_id");
            $table->dropColumn("book_id");

            $table->dropForeign("author_id");
            $table->dropColumn("author_id");
        });
    }
};
