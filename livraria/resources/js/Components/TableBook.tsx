import {usePage} from "@inertiajs/react";
import TableUsers from "@/Components/TableUsers";
import Pagination from "@/Components/Pagination";
import ListBook from "@/Components/ListBook";

export default function TableBook(){
    let {books, statusBar} = usePage().props;

    let header=["Título", "Quantidade", "Valor"];
    let routes =["books.search"]



    let table={
        header:header,
        data: books,
        actions: statusBar
            [ "Editar", "Excluir"]
    }

    return(<>
            {books.data.length === 0
                ? <p className={"text-zinc-600 text-center mt-24 text-3xl font-bold"}>{`Não há usuários cadastrados`}</p>
                : <ListBook props={books}></ListBook>}
            <div className={'fixed bottom-0 left-0 right-0 mb-4'}>
                {books.last_page !== 1 ? <Pagination registries={books} /> : <></>}
            </div>
        </>
    )
}
