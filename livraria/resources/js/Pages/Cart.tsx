import {Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import TableCart from "@/Components/TableCart";
import CupomApply from "@/Components/CupomApply";

export default function Cart({ auth, books, sale, coupon }: PageProps) {

    const rotas = [
        {
            'name': 'Carrinho',
            'route': 'cart',
        }
    ]

    const listBooks = books.map((book) => {
        return {idBook: book.id, idSales: book.pivot.sales_id, title: book.title, quantity: book.pivot.quantity, maxStock: book.maxStock, amount: book.pivot.amount}
    })

    console.log(sale);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Carrinho</h2>}
        >
            <Head title="Carrinho" />

            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>

            {sale === null ? <h1>Não há nenhum item no carrinho de compras</h1> :
                <>
                    <TableCart books={listBooks}></TableCart>
                    <div className={"mt-8 ml-20"}>
                        <CupomApply idSale={sale.id} coupon={coupon}/>
                    </div>
                </>
            }

        </AuthenticatedLayout>
    )
}
