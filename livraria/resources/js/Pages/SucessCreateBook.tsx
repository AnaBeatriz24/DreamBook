import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Breadchumb from "@/Components/BreadchumbSystem";
import SecondaryButton from "@/Components/SecondaryButton";
import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";

const rotas = [
    {
        'name': 'Adicionar Compra',
        'route': 'book.create',
    },
    {
        'name': 'Sucesso',
        'route': 'book.store',
    }
]
export default function CreateUserFinish({ auth, props}: PageProps) {

    return (
        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Administrador Alterado</h2>}
            >
                <Head title={'Administrador Alterado'}/>

                <div className={"mt-8 ml-20"}>
                    <Breadchumb rota={rotas} />
                </div>
                <div className='flex justify-center mt-16'>
                    <h2 className='text-center text-2xl font-bold text-zinc-900'>
                        Administrador da Empresa foi alterado com sucesso!<br/>
                        O Administrador anterior tornou-se um usuário comum vinculado a empresa.
                    </h2>
                </div>
                <div className="mt-60 flex gap-4 justify-around">
                    <Link href={route('home')}>
                        <SecondaryButton className="ml-4 lg:w-auto bg-zinc-600 hover:bg-zinc-700" >
                            Voltar para home
                        </SecondaryButton>
                    </Link>
                    <Link href={route('company.index')}>
                        <SecondaryButton className="ml-4 lg:w-auto bg-green-500 hover:bg-green-700" >
                            Ver Empresas
                        </SecondaryButton>
                    </Link>
                </div>

            </AuthenticatedLayout>
        </>
    )
};
