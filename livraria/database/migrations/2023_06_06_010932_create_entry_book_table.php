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
        Schema::create('entry_book', function (Blueprint $table) {
            $table->foreignId("entry_id")->references("entry");
            $table->foreignId("book_id")->references("book");
            $table->integer("quantity");
            $table->float("amount");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("entry_book", function (Blueprint $table){
            $table->dropForeign("book_id");
            $table->dropColumn("book_id");

            $table->dropForeign("entry_id");
            $table->dropColumn("entry_id");
        });
    }
};
