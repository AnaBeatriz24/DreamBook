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
        Schema::create('stock', function (Blueprint $table) {
            $table->id();
            $table->integer("quantity");
            $table->float("amount");
            $table->timestamps();
            $table->foreignId("book_id")->references("book");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock');
        Schema::table("stock", function (Blueprint $table){
            $table->dropForeign("book_id");
            $table->dropColumn("book_id");
        });
    }
};
