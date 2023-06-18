import {usePage} from "@inertiajs/react";

export default function ShowBooks(){
    let {books, statusBar} = usePage().props;

    let header=["Título", "Quantidade", "Valor"];
    let routes =["books.search"]



    let table={
        header:header,
        data: books,
        actions: statusBar
            [ "Editar", "Excluir"]
    }

    return(<></>
    )
}
