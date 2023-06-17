import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import Pagination from "@/Components/Pagination";
import TableUsers from "@/Components/TableUsers";
import BarGroupViewUsers from "@/Components/BarGroupViewUsers";

export default function ShowUsers({ auth }: PageProps) {
    let {users, statusBar} = usePage().props;

    let actions = ():[string[], string[], string[], string[]] => {
        return auth.user.profiles_id === 1
        ? [["Nome", "Função"], ["user.showAll", "user.showSellers", "user.showAttendants", "user.showBuyers", "user.showCustomers"],
                ["Todos os Usuários", "Vendedores", "Caixas", "Compradores", "Clientes"], ['Histórico', 'Deletar']]
            : [["Nome", "E-mail"], ["user.showCustomers"], ["Clientes"], ["Histórico"]]
    }

    let tabela = {
        header: actions()[0],
        data:users,
        actions: actions()[3],
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

            <BarGroupViewUsers routes={actions()[1]} status={statusBar} title={actions()[2]}/>

            {users.data.length === 0
                ? <p className={"text-zinc-600 text-center mt-24 text-3xl font-bold"}>{`Não há usuários cadastrados`}</p>
                : <TableUsers props={tabela}></TableUsers>}

            <div className={'fixed bottom-0 left-0 right-0 mb-4'}>
                {users.last_page !== 1 ? <Pagination registries={users} /> : <></>}
            </div>


        </AuthenticatedLayout>
    );
}
