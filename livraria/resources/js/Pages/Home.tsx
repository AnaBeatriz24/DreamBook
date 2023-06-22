import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import GridHome from "@/Components/GridHome";

export default function Home({ auth, generos }: PageProps) {

    const rotas = [
        {
            'name': 'Home',
            'route': 'home',
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl leading-tight">Home</h2>}
        >
            <Head title="Home" />

            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>

            <GridHome props={auth.user.profiles_id}/>
        </AuthenticatedLayout>
    );
}
