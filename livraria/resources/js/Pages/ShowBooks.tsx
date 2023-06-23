import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import SearchBooks from "@/Components/SearchBooks";
import Dropdown from "@/Components/Dropdown";
import WelcomeNavBar from "@/Components/WelcomeNavBar";
import React from "react";
import ComponentFindBook from "@/Components/ComponentFindBook";
import ButtonHome from "@/Components/ButtonHome";
import Books from "@/Components/Books";
import Team from "@/Components/Team";
import ContactComponent from "@/Components/ContactComponent";
import A from "../../../vendor/tightenco/ziggy/dist/index.m";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import ButtonStatusBarGroup from "@/Components/ButtonStatusBarGroup";
import TableAvailableCupons from "@/Components/TableAvailableCupons";
import Pagination from "@/Components/Pagination";

export default function ShowBooks({ auth }: PageProps) {

    const routes:object[] = [
        {
            name: "Home",
            route: "book.search"
        },
        {
            name:"Entre em Contato",
            route: 'contact.show'
        },
        {
            name: 'Meu Histórico',
            route: 'sales.history'
        }
    ]
    const routes1:object[] = [
        {
            name: "Livros listados",
            route: "book.search"
        }
    ]

    const {books, genders} = usePage().props

    const {post} = useForm({
        genderId: 0
    });

    const submit = (e):void => {
        e.preventDefault();
        post(route('books.searchSubmit', [e.target.id]));
    }

    return <>

        <div>
            { auth.user === null
                ?
                <WelcomeNavBar routes={routes}>
                    <Head title="Welcome"/>
                    <ComponentFindBook/>
                    <div className={"flex flex-col items-center mt-6 pb-6 space-y-16"}>
                        <section className={"bg-teal-950 w-[90vw] lg:w-3/4 lg:min-h-[80vh] rounded-lg flex flex-col items-center justify-center space-y-6"}>
                            <p className={"text-2xl font-bold text-white mt-6"}>Nosso Time</p>
                            <Team />
                        </section>

                        <section className={"bg-teal-950 w-[90vw] lg:w-3/4 lg:h-[80vh] rounded-lg flex flex-col items-center space-y-6"}>
                            <ContactComponent/>
                        </section>
                    </div>
                </WelcomeNavBar>



                : <AuthenticatedLayout
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl  leading-tight">Dream Book Library</h2>}
                >
                    <Head title="Pesquisar Livros" />
                    <div className={"mt-8 ml-20"}>
                        <BreadchumbSystem rota={routes1} />
                    </div>

                    <ComponentFindBook/>

                    <div className={"flex flex-col items-center mt-6 pb-6 space-y-16"}>


                    </div>
                    </AuthenticatedLayout>
                }


        </div>
</>;
}
