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
        Schema::create('entries', function (Blueprint $table) {
            $table->id();
            $table->timestamp("dateBuy")->default(now());
            $table->unsignedBigInteger("suppliers_id");
            $table->unsignedBigInteger("users_id");
            $table->timestamps();

            $table->foreign('suppliers_id')
                ->references('id')
                ->on("suppliers");

            $table->foreign('users_id')
                ->references('id')
                ->on("users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("entries");
    }
};
