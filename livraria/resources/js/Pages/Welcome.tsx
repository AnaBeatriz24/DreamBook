import {Head, Link, useForm, usePage} from '@inertiajs/react';
import WelcomeNavBar from "@/Components/WelcomeNavBar";
import ContactComponent from "@/Components/ContactComponent";
import Team from "@/Components/Team";
import Books from "@/Components/Books";
import {PageProps} from "@/types";
import ComponentFindBook from "@/Components/ComponentFindBook";
import React from "react";

export default function Welcome({livrosMaisVendidos}, { auth }: PageProps) {


    const { genders} = usePage().props


    const routes:object[] = [
        {
            name: "Home",
            route: "home"
        },
        {
            name: "Entre em contato",
            route: "contact.show"
        },
        {
            name: "Nosso time",
            route: "team.index"
        },
    ]

    return (
        <WelcomeNavBar routes={routes}>
            {}
            <Head title="Dream Book Library" />

            {/*<ComponentFindBook />*/}

            {/*<ComponentFindBook auth={auth}/>*/}

        </WelcomeNavBar>
    );
}
