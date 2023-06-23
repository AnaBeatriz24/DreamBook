import {PageProps} from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import { Link, Head } from '@inertiajs/react';
import SecondaryButton from "@/Components/SecondaryButton";

export default function FinishCreateCoupon({ auth }: PageProps) {

    const rotas = [
        {
            'name': 'Gerenciar Gêneros',
            'route': 'gender.showActives',
        },
        {
            'name': 'Gênero Editado',
            'route': 'gender.success',
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gênero Editado</h2>}
        >

            <Head title={"Gênero Editado"}/>

            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>

            <div className='flex justify-center mt-16'>
                <h2 className='text-center text-2xl font-bold text-zinc-900'>
                    Gênero editado com sucesso!
                </h2>
            </div>
            <div className="mt-60 flex gap-4 justify-around">
                <Link href={route('home')}>
                    <SecondaryButton className="ml-4 lg:w-auto bg-zinc-500 hover:bg-zinc-700" type={'button'}>
                        Voltar para home
                    </SecondaryButton>
                </Link>
                <Link href={route('gender.showActives')}>
                    <SecondaryButton className="ml-4 lg:w-auto bg-zinc-500 hover:bg-zinc-700" type={'button'}>
                        Gerenciar Gêneros
                    </SecondaryButton>
                </Link>
            </div>
        </AuthenticatedLayout>
    )
}
