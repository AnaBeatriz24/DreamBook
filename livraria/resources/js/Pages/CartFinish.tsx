import {Head, useForm} from "@inertiajs/react";
import {PageProps} from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import TableCart from "@/Components/TableCart";
import CupomApply from "@/Components/CupomApply";
import SecondaryButton from "@/Components/SecondaryButton";
import CEP from "@/Components/CEP";
import React, {FormEventHandler, useEffect, useRef, useState} from "react";
import {Input} from "postcss";
import RadioButton from "@/Components/RadioButton";
import TextInput from "@/Components/TextInput";

export default function CartFinish({ auth, books, sale, coupon, payments }: PageProps) {

    const rotas = [{'name': 'Carrinho', 'route': 'cart'}];

    const [ceps, setCeps] = useState([]);
    const [pay, setPay] = useState({method: 0});

    const {data, setData, post} = useForm({
        parcel: 0,
        discount: 0,
    });

    const submit:FormEventHandler = (e) => {
        e.preventDefault();
        if(pay.method === 0){
            alert("escolha o método de pagamento");
            return
        }
        if(ceps.length > 0){
            if(!document.getElementById("salvarCEP").disabled){
                alert("insira um endereço para entrega, ou clique em salvar")
                return
            }
        }
        post(route("cart.finishPayment", {"method": pay.method}));
    }

    const listBooks = books.map((book) => {
        return {idBook: book.id, idSales: book.pivot.sales_id, title: book.title, quantity: book.pivot.quantity, maxStock: book.maxStock, amount: book.pivot.amount}
    });

    let total = listBooks.reduce((a, b) => Number(a)  + Number(b.quantity * b.amount), 0);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Carrinho</h2>}
        >
            <Head title="Carrinho" />

            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>

            {sale === null ? <h1>Não há nenhum item no carrinho de compras</h1> :
                <>
                    <div className={"mt-8 ml-20 mr-20  text-white"}>
                        <h1 className={"text-lg text-white"}>Local de Entrega</h1>

                        <RadioButton className={"text-lg mr-2 "} name={"retirada"} onClick={() => {
                            setCeps([])
                        }}>Na loja</RadioButton>
                        <RadioButton className={"ml-6 text-lg mr-2 "} name={"retirada"} onClick={() => {
                            setCeps([<CEP/>])
                        }}>Entrega</RadioButton>

                        {...ceps}

                        <h1 className={"text-lg text-white"}>Método de Pagamento</h1>
                        {payments.map((p, index) => {
                            return <RadioButton className={index === 0 ? "text-lg mr-2" : "ml-8 text-lg mr-2"} name={"payment"} onClick={() => setPay({method: p.id})}>{p.method}</RadioButton>
                        })}

                        {(pay.method === 3) ? <div>
                            <h2 >Quantidade de Parcelas:</h2>
                            <TextInput type="number" require="" name="parcel" value={data.parcel} onChange={(e) => setData(e.target.name, e.target.value)} min={1} max={12} onBlur={(e) => {
                                if(e.target.value > 12) {
                                    e.target.value = 12;
                                    setData(e.target.name, e.target.value);
                                    alert("Quantidade máxima de parcelas é 12x");
                                }
                            }}/>
                        </div> : () => setData("parcel", 0)}

                        <h1 className={"text-lg text-white"}>Total</h1>
                        {
                            coupon === null ?
                            <>
                                <h1 className={"text-lg text-white"}>R$ {total}</h1>
                                {pay.method === 3 ?
                                    <></> :
                                    pay.method === 0 ?
                                        <></>
                                        :
                                        <h1 className={"text-lg text-white"}>Pagamento em {`${payments[pay.method-1].method} tem 5% de desconto`}</h1>
                                }
                            </>
                            :
                            <>
                                <h1 className={"text-lg line-through"}>R$ {total}</h1>
                                <h1 className={"text-lg"}>Cupom de {`${coupon.discount} %`}</h1>
                                {pay.method === 3 ?
                                    <h1 className={"text-lg"}>R$ {total * (1 - coupon.discount / 100)}</h1> :
                                    pay.method === 0 ?
                                        <h1 className={"text-lg"}>R$ {total * (1 - (coupon.discount) / 100)}</h1>
                                        :
                                        <>
                                            <h1 className={"text-lg line-through"}>R$ {total * (1 - (coupon.discount) / 100)}</h1>
                                            <h1 className={"text-lg"}>Pagamento em {`${payments[pay.method-1].method} tem 5% de desconto`}</h1>
                                            <h1 className={"text-lg"}>R$ {total * (1 - (coupon.discount + 5) / 100)}</h1>
                                        </>
                                }
                            </>
                        }
                        <SecondaryButton type={"button"} onClick={submit}>Comprar</SecondaryButton>
                    </div>
                </>
            }

        </AuthenticatedLayout>
    )
}
