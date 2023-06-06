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
        Schema::create('exit_book', function (Blueprint $table) {
            $table->foreignId("exit_id")->references("exit");
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
        Schema::table("exit_book", function (Blueprint $table){
            $table->dropForeign("exit_id");
            $table->dropColumn("exit_id");

            $table->dropForeign("book_id");
            $table->dropColumn("book_id");
        });
    }
};
