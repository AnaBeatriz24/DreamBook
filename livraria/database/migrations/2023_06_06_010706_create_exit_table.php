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
        Schema::create('exit', function (Blueprint $table) {
            $table->id();
            $table->foreignId("users_id")->references("users");
            $table->boolean("status");
            $table->boolean("byNow");
            $table->dateTime("exitDate");
            $table->foreignId("coupon_id")->references("coupon");
            $table->foreignId("paymentMethods_id")->references("payment_methods");
            $table->integer("parcel");
            $table->float("discount");
            $table->foreignId("address_id")->references("address");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("exit", function (Blueprint $table){
            $table->dropForeign("users_id");
            $table->dropColumn("users_id");

            $table->dropForeign("coupon_id");
            $table->dropColumn("coupon_id");

            $table->dropForeign("paymentMethods_id");
            $table->dropColumn("paymentMethods_id");

            $table->dropForeign("address_id");
            $table->dropColumn("address_id");
        });
    }
};
