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
        Schema::create('sales_books', function (Blueprint $table) {
            $table->unsignedBigInteger("sales_id");
            $table->unsignedBigInteger("books_id");
            $table->integer("quantity");
            $table->float("amount");
            $table->timestamps();

            $table->foreign('sales_id')
                ->references('id')
                ->on("sales");

            $table->foreign('books_id')
                ->references('id')
                ->on("books");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("sales_books");
    }
};
