import {Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BreadchumbSystem from "@/Components/BreadchumbSystem";

export default function Cart({ auth }: PageProps) {

    const rotas = [
        {
            'name': 'Carrinho',
            'route': 'cart',
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Carrinho</h2>}
        >
            <Head title="Carrinho" />

            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>
        </AuthenticatedLayout>
    )
}
