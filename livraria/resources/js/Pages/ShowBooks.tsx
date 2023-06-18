import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import SearchBooks from "@/Components/SearchBooks";
import Dropdown from "@/Components/Dropdown";

export default function ShowBooks({ auth }: PageProps) {

    const {books, genders} = usePage().props

    const {data, setData, post} = useForm({
        genderId: 0
    });

    const submit = (e):void => {
        e.preventDefault();
        post(route('books.searchSubmit', [e.target.id]));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pesquisar Livro</h2>}
        >
            <Head title="Pesquisar Livro" />
            <form method={'post'}>
            <div className="max-w-7xl mx-auto px-4 mt-6 sm:px-6 lg:px-8">
                <Dropdown >
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-lg leading-4 font-medium rounded-md text-white bg-teal-600 hover:text-gray-300 focus:outline-none transition ease-in-out duration-150">
                                Explore por Gêneros
                                <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                                </svg>
                            </button>
                        </span>
                                </Dropdown.Trigger>
                                <Dropdown.Content align={'left'} width={'96'} contentClasses={'lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 py-1 rounded-lg bg-teal-600'}>
                                    {
                                        genders.map((gender) => {
                                            return <button className={"lg:flex lg:flex-row bg-teal-600 hover:bg-teal-700 text-white font-bold block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out"} id={gender.id} type={"submit"} onClick={submit}>{gender.name}</button>
                                        })
                                    }
                    </Dropdown.Content>
                </Dropdown>
            </div>
            </form>
            <div className={"flex flex-col items-center mt-6 pb-6 space-y-16"}>
            <section className={"bg-teal-950 rounded-lg w-[90vw] lg:w-3/4 lg:min-h-[80vh] flex flex-col items-center pb-6 justify-center"}>
                <p className={"text-2xl font-bold text-white mt-6"}>Catálogo</p>
                <SearchBooks books={books}/>
            </section>

            </div>
        </AuthenticatedLayout>
    );
}
