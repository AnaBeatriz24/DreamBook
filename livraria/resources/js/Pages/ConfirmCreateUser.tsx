import {PageProps} from "@/types";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default function ConfirmCreateUser({auth}: PageProps){

    const rotas = [
        {
            'name': 'Adicionar Usuário',
            'route': 'user.store',
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">Adicionar Usuário</h2>}>
            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>

            <div className="m-20 flex items-center justify-center">

                <a href="#"
                   className="grid grid-cols-1 block w-auto p-6 bg-white border items-center border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Usuário Cadastrado com sucesso</h5>
                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">Agora ele já pode acessar o sistema!</p>

                    <div className=" m-3 flex gap-4 justify-around">
                        <Link href={route('user.store')}>
                            <SecondaryButton className="ml-4" type={'button'}>
                                Voltar
                            </SecondaryButton>
                        </Link>
                    </div>

                </a>


            </div>


        </AuthenticatedLayout>
    )
}
