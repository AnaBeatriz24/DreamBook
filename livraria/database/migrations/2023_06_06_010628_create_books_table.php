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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->longText("description")->nullable();
            $table->string("isbn");
            $table->longText("img")->nullable();
            $table->unsignedBigInteger("publishers_id");
            $table->timestamps();

            $table->foreign('publishers_id')
                ->references('id')
                ->on("publishers");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("books");
    }
};
