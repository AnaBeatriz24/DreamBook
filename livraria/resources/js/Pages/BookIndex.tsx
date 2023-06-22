import {useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import React from "react";
import Card from "@/Logos/Card";
import Pix from "@/Logos/Pix";
import Boleto from "@/Logos/Boleto";
import SecondaryButton from "@/Components/SecondaryButton";

export default function BookIndex({auth}) {

    const {book} = usePage().props

    const rotas = [
        {
            'name': 'Pesquisar livro',
            'route': 'book.search',
        },
        {
            'name': book.title,
            'route': 'book.index',
        }
    ]

    const {data, setData, post, reset} = useForm({
        idLivro: null
    })

    const submit = (e) => {
        e.preventDefault();
        data.idLivro = e.target.value;
        alert("Livro adicionado ao carrinho")
        post(route("cart.store"));
    }

    const buyNow = (e) => {
        alert("Finalizar pedido")
        // TODO: Fazer tela de finalizar pedido.
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">{book.title}</h2>}
        >
            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>

            <div className={"flex justify-center gap-x-6 mt-16"}>
                <div className={"w-[60vw] h-[60vh] bg-teal-950 rounded-lg flex"}>
                    <div className={"w-1/2 flex justify-center items-center"}>
                        <img className={"w-80"} src={`${window.location.origin}/storage/${book.img}`} alt="Imagem de livro"/>
                    </div>
                    <div className={"text-white mt-16"}>
                        <p className={"text-3xl mt-6 w-96 break-words"}>Livro: {book.title}</p>
                        <p className={"text-2xl mt-6 w-96 break-words"}>Descrição: {book.description}</p>
                        <p className={"text-xl mt-6 w-96 break-words"}>Autor(a): {book.author}</p>
                        <p className={"text-xl mt-6 w-96 break-words"}>Editora: {book.publisher}</p>
                    </div>
                </div>
                <div className={"w-[30vw] h-[60vh] bg-teal-950 rounded-lg text-white flex items-center flex-col"}>
                    <p className={"text-6xl font-bold mt-16"}>R$ {book.amount}</p>
                    <div className={"mt-6 flex items-center gap-x-2"}>
                        <span><Card/></span>
                        <span className={"text-xl"}>Até 3x de R$ {Math.round(book.amount/3)}</span>
                    </div>
                    <div className={"mt-6 flex items-center gap-x-2"}>
                        <span><Pix/></span>
                        <span className={"text-xl"}>Pix por R$ {Math.round(book.amount - (book.amount * 0.1))}</span>
                    </div>
                    <div className={"mt-6 flex items-center gap-x-2"}>
                        <span><Boleto/></span>
                        <span className={"text-xl"}>Boleto por R$ {Math.round(book.amount - (book.amount * 0.1))}</span>
                    </div>
                    <div className={"mt-12 w-3/4 flex flex-col gap-y-6"}>
                        <SecondaryButton className={"w-full justify-center"} onClick={submit} value={book.id}>
                            Adicionar
                        </SecondaryButton>
                        <SecondaryButton onClick={buyNow} value={book.id} className={"w-full justify-center"} >
                            Comprar agora
                        </SecondaryButton>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
