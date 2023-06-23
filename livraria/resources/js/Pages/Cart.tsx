import {Head, useForm} from "@inertiajs/react";
import {PageProps} from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import TableCart from "@/Components/TableCart";
import CupomApply from "@/Components/CupomApply";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Cart({ auth, books, sale, coupon }: PageProps) {

    const rotas = [
        {
            'name': 'Carrinho',
            'route': 'cart',
        }
    ]

    const {get} = useForm();

    if(window.location.search.includes("atualiza")){
        window.location.href = window.location.pathname;
    }

    const listBooks = sale === null ? null : books.map((book) => {
        return {idBook: book.id, idSales: book.pivot.sales_id, title: book.title, quantity: book.pivot.quantity, maxStock: book.maxStock, amount: book.pivot.amount}
    })

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">Carrinho</h2>}
        >
            <Head title="Carrinho" />

            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>

            {sale === null ? <h1>Não há nenhum item no carrinho de compras</h1> :
                <>
                    <TableCart books={listBooks} cupom={coupon}></TableCart>
                    <div className={"mt-8 ml-20 grid grid-cols-2"}>
                        <CupomApply idSale={sale.id} coupon={coupon}/>
                        <SecondaryButton className={"place-self-center"} type={"button"} onClick={() => get(route("cart.finish"))}>Continuar</SecondaryButton>
                    </div>
                </>
            }

        </AuthenticatedLayout>
    )
}
