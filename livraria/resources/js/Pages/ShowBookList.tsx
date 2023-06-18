import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import Pagination from "@/Components/Pagination";
import TableUsers from "@/Components/TableUsers";
import BarGroupViewUsers from "@/Components/BarGroupViewUsers";

export default function ShowUsers({ auth }: PageProps) {
    let {books, statusBar} = usePage().props;

    let dataAction = (item, id, profile) => {
        if (profile === 1) {
            switch (item){
                case "Alterar Adm": return <Link href={route("company.AlterAdm", [id])} className={"inline-flex items-center px-4 py-2 bg-zinc-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-zinc-500 active:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition ease-in-out duration-150 font-medium font-black hover:bg-zinc-800 text-white text-sm px-3 py-0.5 rounded border border-zinc-600"}>{item}</Link>
                case 'Desativar':
                    return (
                        <button onClick={submit} value={id} className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 font-medium font-black hover:bg-red-800 text-white text-sm px-3 py-0.5 rounded border border-red-600" type={"submit"}>{item}</button>
                    )
                case 'Ativar':
                    return (
                        <button onClick={submit} value={id} className="inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-800 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150 font-medium font-black hover:bg-green-800 text-white text-sm px-3 py-0.5 rounded border border-green-600" type={"submit"}>{item}</button>
                    )
                case 'Excluir':
                    const deleteComponentData = {
                        routePost: "company.delete",
                        item: "empresa",
                        id: id
                    }
                    return (
                        <ComponentDelete routePost={deleteComponentData.routePost} item={deleteComponentData.item} id={deleteComponentData.id}/>
                    )

            }
        } else {
            switch (item){
                case "Alterar Adm": return <Link href={route("company.AlterAdm", [id])} className={"inline-flex items-center px-4 py-2 bg-zinc-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-zinc-500 active:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition ease-in-out duration-150 font-medium font-black hover:bg-zinc-800 text-white text-sm px-3 py-0.5 rounded border border-zinc-600"}>{item}</Link>
            }
        }
    }

    let header=["Nome", "Quantidade", "Valor"];
    let routes = ["books.show", "coupon.showInactive"]
    let title = ["Ativos", "Desativados"]


    let table = {
        header: header,
        data:books,
    }

    const rotas = [
        {
            'name': 'Ver livros cadastrados',
            'route': 'book.show',
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



        </AuthenticatedLayout>
    );
}
