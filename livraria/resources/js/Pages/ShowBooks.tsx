import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import SearchBooks from "@/Components/SearchBooks";

export default function ShowBooks({ auth }: PageProps) {

    const {books} = usePage().props

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pesquisar Livro</h2>}
        >
            <Head title="Pesquisar Livro" />
            <div className={"flex flex-col items-center mt-6 pb-6 space-y-16"}>

            <section className={"bg-teal-950 rounded-lg w-[90vw] lg:w-3/4 lg:min-h-[80vh] flex flex-col items-center pb-6 justify-center"}>
                <p className={"text-2xl font-bold text-white mt-6"}>Catálogo</p>
                <SearchBooks books={books}/>
            </section>

            </div>
        </AuthenticatedLayout>
    );
}
