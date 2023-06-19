import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import Pagination from "@/Components/Pagination";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import TableOpenSales from "@/Components/TableOpenSales";

export default function ShowOpenSales({ auth }: PageProps, ) {

    let {sales} = usePage().props;
    console.log(sales)

    let header=["N° do pedido", "Vendedor", "Valor R$"];

    let table = {
        header: header,
        data:sales,
        actions: ['Fechar pedido'],
    }

    const rotas:object = [
        {
            'name': 'Ver Pedidos Abertos',
            'route': 'sales.open',
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pedidos abertos por funcionários</h2>}
        >
            <Head title="Pedidos abertos" />

            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>

            {sales.length === 0
                ? <p className={"text-zinc-600 text-center mt-24 text-3xl font-bold"}>{`Não há pedidos abertos`}</p>
                : <TableOpenSales props={table} ></TableOpenSales>}

            {/*<div className={'fixed bottom-0 left-0 right-0 mb-4'}>*/}
            {/*    {sales.last_page !== 1 ? <Pagination registries={sales} /> : <></>}*/}
            {/*</div>*/}
        </AuthenticatedLayout>
    );
}
