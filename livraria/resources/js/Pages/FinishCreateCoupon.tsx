import {PageProps} from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import { Link, Head } from '@inertiajs/react';
import SecondaryButton from "@/Components/SecondaryButton";

export default function FinishCreateCoupon({ auth }: PageProps) {

    const rotas = [
        {
            'name': 'Adicionar cupom',
            'route': 'coupon.create',
        },
        {
            'name': 'Cupom adicionado',
            'route': 'coupon.success',
        }
    ]

    // TODO: Finalizar a estilização da página

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">Cupom adicionado</h2>}
        >

            <Head title={"Cupom adicionado"}/>

            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>

            <div className='flex justify-center mt-16'>
                <h2 className='text-center text-2xl font-bold text-zinc-900'>
                    Cupom cadastrado com sucesso!
                </h2>
            </div>
            <div className="mt-60 flex gap-4 justify-around">
                <Link href={route('coupon.showActive')}>
                    <SecondaryButton className="ml-4 lg:w-auto bg-zinc-500 hover:bg-zinc-700" type={'button'}>
                        Ver cupons cadastrados
                    </SecondaryButton>
                </Link>
                <Link href={route('coupon.create')}>
                    <SecondaryButton className="ml-4 lg:w-auto bg-zinc-500 hover:bg-zinc-700" type={'button'}>
                        Cadastrar outro cupom
                    </SecondaryButton>
                </Link>
            </div>
        </AuthenticatedLayout>
    )
}
