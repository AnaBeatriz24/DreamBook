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
        DB::unprepared("
        CREATE TRIGGER entries_books_after_insert AFTER INSERT ON entries_books FOR EACH ROW
        BEGIN
            set @quantidade = 0;
            select stocks.quantity into @quantidade from stocks where stocks.books_id = new.books_id;
	        update stocks set quantity = (@quantidade + new.quantity) where books_id = new.books_id;
        END
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("drop TRIGGER 'entries_books_after_insert'");
    }
};
