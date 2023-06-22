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

    console.log(auth.user)


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
                </WelcomeNavBar>

                : <AuthenticatedLayout
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl  leading-tight">Cupons disponíveis</h2>}
                >
                    <Head title="Cupons disponíveis" />

                    <ComponentFindBook/>
                    </AuthenticatedLayout>
                }


        </div>
</>;
}
