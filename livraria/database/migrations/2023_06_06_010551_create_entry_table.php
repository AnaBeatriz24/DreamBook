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
        Schema::create('entry', function (Blueprint $table) {
            $table->id();
            $table->dateTime("dateBuy");
            $table->foreignId("supplier_id")->references("supplier");
            $table->foreignId("users_id")->references("users");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("entry", function (Blueprint $table){
            $table->dropForeign("supplier_id");
            $table->dropColumn("supplier_id");
            $table->dropForeign("users_id");
            $table->dropColumn("users_id");
        });
    }
};
