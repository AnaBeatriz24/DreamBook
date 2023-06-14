import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import BreadchumbSystem from "@/Components/BreadchumbSystem";

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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Home" />

            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!<br/>profiles_id: {auth.user.profiles_id}<br/>perfil: {auth.user.role}</div>
                        {generos.map(genero => console.log(genero.books))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
