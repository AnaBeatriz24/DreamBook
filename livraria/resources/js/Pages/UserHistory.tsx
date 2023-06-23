import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import Pagination from "@/Components/Pagination";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import TableHistory from "@/Components/TableHistory";
import {FormEventHandler} from "react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";

export default function History({ auth }: PageProps, ) {

    let {sales}:PageProps = usePage().props;

    let header: string[]=["Capa", "Livro", "Data", "Vendedor", "Caixa", "Valor", "Ações", ""];
    let actions = ["Comprar de novo"]


    let table:object = {
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


            {sales.data.length === 0
                ? <p className={"text-white text-center mt-24 text-3xl font-bold"}>{`Não há nenhuma venda recente`}</p>
                : <TableHistory props={table}></TableHistory>
            }

            <div className={'fixed bottom-0 left-0 right-0 mb-4'}>
                {sales.last_page !== 1 ? <Pagination registries={sales} /> : <></>}
            </div>
        </AuthenticatedLayout>
    );
}
