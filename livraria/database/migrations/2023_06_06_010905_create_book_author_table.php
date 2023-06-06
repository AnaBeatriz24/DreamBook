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
        Schema::create('books_authors', function (Blueprint $table) {
            $table->unsignedBigInteger("books_id");
            $table->unsignedBigInteger("authors_id");
            $table->timestamps();

            $table->foreign('books_id')
                ->references('id')
                ->on("books");

            $table->foreign('authors_id')
                ->references('id')
                ->on("authors");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("books_authors");
    }
};
