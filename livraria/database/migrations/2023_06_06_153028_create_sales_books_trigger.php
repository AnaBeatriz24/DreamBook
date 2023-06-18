<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
//        DB::unprepared("
//        CREATE TRIGGER sales_books_after_insert before INSERT ON sales_books FOR EACH ROW
//        BEGIN
//            set @quantidade = 0;
//            select stocks.quantity into @quantidade from stocks where stocks.books_id = new.books_id;
//            if @quantidade >= new.quantity then
//                update stocks set stocks.quantity = (@quantidade - new.quantity) where books_id = new.books_id;
//            else
//                signal sqlstate '45000' set message_text = 'quantidade fora de estoque';
//            end if;
//        END
//        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("drop TRIGGER 'sales_books_after_insert'");
    }
};
