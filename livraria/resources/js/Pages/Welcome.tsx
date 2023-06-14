import { Head } from '@inertiajs/react';
import WelcomeNavBar from "@/Components/WelcomeNavBar";
import SecondaryButton from "@/Components/SecondaryButton";
import Contact from "@/Components/Contact";
import Team from "@/Components/Team";

export default function Welcome({livrosMaisVendidos}) {

    const routes:object[] = [
        {
            name: "Home",
            route: "home"
        },
        {
            name: "Entre em contato",
            route: "contact"
        },
        {
            name: "Nosso time",
            route: "team"
        },
    ]

    return (
        <WelcomeNavBar routes={routes}>
            <Head title="Welcome" />

            <div className={"flex items-center flex-col mt-16 pb-16 space-y-16"}>
                <section className={"bg-teal-950 w-3/4 h-[80vh] rounded-lg flex flex-col gap-y-16 justify-center items-center"}>
                    <p className={"text-2xl font-bold text-white"}>Livros mais vendidos!</p>
                    <div className={"flex gap-x-16"}>
                        {
                            livrosMaisVendidos.map(
                                (livro:object): any => {

                                    return <div className="max-w-[256px]">
                                        <div className="bg-gray-800 p-6 rounded-lg w-full">
                                            <p className={"text-2xl font-bold text-white w-full break-words text-center flex items-center h-16"}>
                                                {livro["name"]}
                                            </p>
                                        </div>
                                        <div className={""}>
                                            <img src={`${livro["path"]}`} alt="Imagem de livro"/>
                                        </div>
                                        <div className={"bg-gray-800 p-6 rounded-lg w-full"}>
                                            <SecondaryButton className={"w-full justify-center"}>
                                                Adicionar
                                            </SecondaryButton>
                                        </div>
                                    </div>
                                }
                            )
                        }
                    </div>
                </section>

                <section className={"bg-teal-950 w-3/4 h-[80vh] rounded-lg flex flex-col gap-y-16 justify-center items-center"}>
                    <p className={"text-2xl font-bold text-white"}>Nosso Time</p>
                    <Team />
                </section>

                <section className={"bg-teal-950 w-3/4 h-[80vh] rounded-lg flex flex-col gap-y-16 justify-center items-center"}>
                    <Contact/>
                </section>
            </div>
        </WelcomeNavBar>
    );
}
