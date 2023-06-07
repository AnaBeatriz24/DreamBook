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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->foreignId("users_id");
            $table->boolean("status")->default(false);
            $table->boolean("buyNow")->default(false);
            $table->timestamp("tradeDate")->default(now());
            $table->unsignedBigInteger("coupons_id")->nullable();
            $table->unsignedBigInteger("paymentMethods_id")->nullable();
            $table->unsignedBigInteger("addresses_id")->nullable();
            $table->unsignedBigInteger("cashier_id")->nullable();
            $table->unsignedBigInteger("attendant_id")->nullable();
            $table->integer("parcels")->nullable();
            $table->float("discount")->nullable();
            $table->foreign("addresses_id")->references("id")->on("addresses");
            $table->foreign("coupons_id")->references("id")->on("coupons");
            $table->foreign("paymentMethods_id")->references("id")->on("payment_methods");
            $table->foreign("cashier_id")->references("id")->on("users");
            $table->foreign("attendant_id")->references("id")->on("users");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("sales");
    }
};
