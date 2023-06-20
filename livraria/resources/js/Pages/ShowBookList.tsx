import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import Pagination from "@/Components/Pagination";
import TableUsers from "@/Components/TableUsers";
import BarGroupViewUsers from "@/Components/BarGroupViewUsers";
import ComponentDelete from "@/Components/ComponentDelete";
import TableAvailableCupons from "@/Components/TableAvailableCupons";
import TableBook from "@/Components/TableBook";
import Books from "@/Components/Books";
import ButtonStatusBarGroup from "@/Components/ButtonStatusBarGroup";

export default function ShowBookList({ auth }: PageProps ) {


    let {results, statusBar} = usePage().props;



    let header=["Nome", "Quantidade", "Valor"];
    let routes=["book.showActive", "book.showInactive"]
    let title=["Ativos", "Desativados"]

    const ativosInativos = (): string => {
        return statusBar === 1
            ? "ativos"
            : "desativados"
    }

    let buttonText = () => {
        if (statusBar === 0) {
            return ['Ativar','Editar']
        } else {
            return ['Desativar','Editar']
        }
    }


    let tabela = {
        header: header,
        data:results,
        actions: buttonText(),
    }

    const rotas = [
        {
            'name': 'Ver Livros Cadastrados',
            'route': 'books.showActive',
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Visualizar Livros Cadastrados</h2>}
        >
            <Head title="Visualizar Usuários" />

            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>

            <ButtonStatusBarGroup routes={routes} status={statusBar} title={title}/>


            {results.data.length === 0

                ? <p className={"text-zinc-600 text-center mt-24 text-3xl font-bold"}>{`Não há livros ${ativosInativos()}`}</p>
                : <TableBook props={tabela}></TableBook>}
        </AuthenticatedLayout>
    );
}
