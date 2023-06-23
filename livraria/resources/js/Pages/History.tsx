import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import Pagination from "@/Components/Pagination";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import TableHistory from "@/Components/TableHistory";

export default function History({ auth }: PageProps, ) {

    let {sales} = usePage().props;

    // console.log(sales.data[0].title)

    let header=["Capa", "Livro", "Data", "Vendedor", "Caixa", "Valor"];
    let actions = ["Comprar de novo"]

    let table = {
        header: header,
        data:sales,
        actions: actions,
    }

    const rotas:object = [
        {
            'name': 'Histórico de compras',
            'route': 'sales.history',
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">Histórico de compras</h2>}
        >
            <Head title="Cupons disponíveis" />

            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>

            {sales.length === 0
                ? <p className={"text-white text-center mt-24 text-3xl font-bold"}>{`Não há nenhuma compra recente`}</p>
                : <TableHistory props={table}></TableHistory>}
        </AuthenticatedLayout>
    );
}
