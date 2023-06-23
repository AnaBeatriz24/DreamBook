import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import SecondaryButton from "@/Components/SecondaryButton";
import React from "react";
import {PageProps} from "@/types";

export default function PageFinish({auth}:PageProps){
    const routes:object[] = [
        {
            name: "Finalizar Compra",
            route: "cart"
        },
        {
            name: "Sucesso",
            route: ""
        },
    ]
    return <>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">Adicionar Livro</h2>}>
            <Head title="Adicionar Livro" />
            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={routes} />
            </div>


            <div className="flex flex-col m-auto items-center bg-teal-900 h-full mt-52 ">


                <div className="bg-teal-950 w-[40vh] h-[40vh] rounded-lg flex flex-col items-center space-y-6">
                    <img src="/LogoSistema.png" className={"w-32 lg:w-64"} alt=""/>
                    <div className='flex justify-center mt-28'>
                        <h2 className='text-center text-2xl m-2 font-bold text-white'>
                            Parabéns! Obrigada pela sua compra!<br/>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 items-center">

                        <div className="flex justify-around">
                            <Link href={route('book.search')}>
                                <SecondaryButton className="m-4" type={'button'}>
                                    Pesquisar livros
                                </SecondaryButton>
                            </Link>
                        </div>
                        <div className="flex justify-around">
                            <Link href={route('sales.history')}>
                                <SecondaryButton className="m-4" type={'button'}>
                                    Ver Histórico
                                </SecondaryButton>
                            </Link>
                        </div>
                    </div>

                </div>







            </div>



        </AuthenticatedLayout>
    </>
}
