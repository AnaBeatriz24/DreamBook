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
        Create procedure if not exists finaliza_venda(idVenda int, cupom int, pagamento int, parcelas int)
        begin
            set @idCupom = 0;
            select id into @idCupom from coupons where id = cupom and status = 1;
            if @idCupom = 0 then
                if parcelas = 0 then
                    update sales set paymentMethods_id = pagamento where id = idVenda;
                else
                    update sales set paymentMethods_id = pagamento, parcels = parcelas where id = idVenda;
                end if;
            else
                if parcelas = 0 then
                    update sales set paymentMethods_id = pagamento, coupons_id = @idCupom where id = idVenda;
                else
                    update sales set paymentMethods_id = pagamento, parcels = parcelas, coupons_id = @idCupom where id = idVenda;
                end if;
            end if;
        end
        ");

//        exemplo = DB::unprepared("call finaliza_venda(1, 0, 1, 0)"); sem cupom e sem parcelas
//        exemplo = DB::unprepared("call finaliza_venda(1, 1, 3, 1)"); com cupom e parcelado em 1 vez
//        exemplo = DB::unprepared("call finaliza_venda(1, 2, 3, 10)"); com cupom e parcelado em 10 vez
//        exemplo = DB::unprepared("call finaliza_venda(1, 0, 3, 10)"); sem cupom e parcelado em 10 vez
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("drop TRIGGER 'sales_books_after_insert'");
    }
};
