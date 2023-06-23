import {Head, Link, useForm, usePage} from '@inertiajs/react';
import WelcomeNavBar from "@/Components/WelcomeNavBar";
import ContactComponent from "@/Components/ContactComponent";
import Team from "@/Components/Team";
import Books from "@/Components/Books";
import ButtonHome from "@/Components/ButtonHome";
import {loadConfigFromFile} from "vite";
import Dropdown from "@/Components/Dropdown";
import {PageProps} from "@/types";

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
            <Head title="Welcome" />
            <div className={"flex flex-col items-center mt-6 pb-6 space-y-16"}>
                <div className={"grid  space-x-16"}>
                    <Link href={route("book.search")}>
                        <ButtonHome opt="searchBook" />
                    </Link>
                </div>
                <section className={"bg-teal-950 rounded-lg w-[90vw] lg:w-3/4 lg:min-h-[80vh] flex flex-col items-center pb-6 justify-center"}>
                    <p className={"text-2xl font-bold text-white mt-6"}>Livros mais vendidos!</p>
                    <Books livrosMaisVendidos={livrosMaisVendidos}/>
                </section>

                <section className={"bg-teal-950 w-[90vw] lg:w-3/4 lg:min-h-[80vh] rounded-lg flex flex-col items-center justify-center space-y-6"}>
                    <p className={"text-2xl font-bold text-white mt-6"}>Nosso Time</p>
                    <Team />
                </section>

                <section className={"bg-teal-950 w-[90vw] lg:w-3/4 lg:h-[80vh] rounded-lg flex flex-col items-center space-y-6"}>
                    <ContactComponent/>
                </section>
            </div>
        </WelcomeNavBar>
    );
}
