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
        Schema::table("users", function (Blueprint $table){
            $table->unsignedBigInteger("profiles_id");

            $table->foreign('profiles_id')
                ->references('id')
                ->on("profiles");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("users", function (Blueprint $table){
            $table->dropForeign("profile_id");
            $table->dropColumn("profile_id");
        });
    }
};
