import {PageProps} from "@/types";
import {Head, Link} from "@inertiajs/react";
import React, {ReactNode} from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import BreadchumbSystem from "@/Components/BreadchumbSystem";


export default function SucessCreateBook({auth}:PageProps){
    const routes:object[] = [
        {
            name: "Adiconar Compra",
            route: "book.store"
        },
        {
            name: "Sucesso",
            route: "sucess.book"
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
                                Parabéns! Você acaba de adiconar uma compra ao sistema!<br/>
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 items-center">

                            <div className="flex justify-around">
                                <Link href={route('book.store')}>
                                    <SecondaryButton className="m-4" type={'button'}>
                                        Adicionar Compra
                                    </SecondaryButton>
                                </Link>
                            </div>
                            <div className="flex justify-around">
                                <SecondaryButton className="m-4" type={'button'}>
                                    Ver Lista de Livros
                                </SecondaryButton>
                            </div>
                        </div>

                    </div>







                </div>



        </AuthenticatedLayout>
    </>

}
