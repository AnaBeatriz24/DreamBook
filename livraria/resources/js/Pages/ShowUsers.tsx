import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import Pagination from "@/Components/Pagination";
import TableUsers from "@/Components/TableUsers";
import ButtonStatusBarGroup from "@/Components/ButtonStatusBarGroup";

export default function ShowUsers({ auth }: PageProps) {
    let {users, statusBar} = usePage().props;
    console.log(statusBar)

    let header:string[] =["Nome", "Função"];
    let routes:string[] = ["user.showAll", "user.showSellers", "user.showAttendants", "user.showBuyers", "user.showCustomers"]
    let title:string[] = ["Todos os Usuários", "Vendedores", "Caixas", "Compradores", "Clientes"]


    let buttonText = ():[string, string] => {
        if (statusBar === 1) {
            return ['Histórico', 'Desativar']
        } else if (statusBar === 3) {
            return ['Histórico', 'Ativar']
        } else {
            return ['Histórico', 'Excluir']
        }
    }

    console.log(buttonText())

    let tabela = {
        header: header,
        data:users,
        actions: ['Histórico', 'Deletar'],
    }

    const ativosInativos = () => {
        return statusBar === 1
            ? "ativos"
            : statusBar === 2
                ? "não verificados"
                : "desativados"
    }
    const rotas = [
        {
            'name': 'Ver Usuários',
            'route': 'user.showAll',
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Visualizar Usuários</h2>}
        >
            <Head title="Visualizar Usuários" />

            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>

            <ButtonStatusBarGroup routes={routes} status={statusBar} title={title}/>

            {users.data.length === 0
                ? <p className={"text-zinc-600 text-center mt-24 text-3xl font-bold"}>{`Não há usuários ${ativosInativos()}`}</p>
                : <TableUsers props={tabela}></TableUsers>}

            <div className={'fixed bottom-0 left-0 right-0 mb-4'}>
                {users.last_page !== 1 ? <Pagination registries={users} /> : <></>}
            </div>


        </AuthenticatedLayout>
    );
}
