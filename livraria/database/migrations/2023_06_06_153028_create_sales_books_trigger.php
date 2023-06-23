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
        drop procedure if exists finaliza_venda;
        Create procedure if not exists finaliza_venda(idVenda int, pagamento int, parcelas int)
        begin
            set @discount = 0;
            select coupons.discount into @discount from coupons join sales on (sales.coupons_id = coupons.id) where sales.id = idVenda and coupons.status = 1;
            if @discount = 0 then
                if parcelas = 0 then
                    update sales set status = 1, paymentMethods_id = pagamento where id = idVenda;
                else
                    update sales set status = 1, paymentMethods_id = pagamento, parcels = parcelas where id = idVenda;
                end if;
            else
                if parcelas = 0 then
                    update sales set status = 1, paymentMethods_id = pagamento, discount = (@discount + 5) where id = idVenda;
                else
                    update sales set status = 1, paymentMethods_id = pagamento, parcels = parcelas, discount = (@discount) where id = idVenda;
                end if;
            end if;
        end
        ");

//        exemplo = DB::unprepared("call finaliza_venda(1, 1, 0)"); sem cupom e sem parcelas
//        exemplo = DB::unprepared("call finaliza_venda(1, 3, 1)"); com cupom e parcelado em 1 vez
//        exemplo = DB::unprepared("call finaliza_venda(1, 3, 10)"); com cupom e parcelado em 10 vez
//        exemplo = DB::unprepared("call finaliza_venda(1, 3, 10)"); sem cupom e parcelado em 10 vez
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("drop TRIGGER 'sales_books_after_insert'");
    }
};
