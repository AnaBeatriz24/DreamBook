import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import {FormEventHandler, useEffect} from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";

export default function CreateUser({ auth, profiles }: PageProps) {

    const { data, setData, post, processing, errors, reset } = useForm({
        role: profiles[0].id,
        name: '',
        email: '',
        password:'',
        password_confirmation:'',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('user.store'));
    };

    const valida:boolean = !(data.password === data.password_confirmation) || (data.password === '' || data.password_confirmation === '');

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Adicionar Usuário</h2>}>

            <Head title="Adicionar Usuário" />

            <div className="py-12 items-center">
                <div className="max-w-3xl h-auto mx-auto sm:px-6 lg:px-8">
                    <div className="bg-teal-950 grid grid-cols-1 items-center overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="h-auto m-10">
                            <form onSubmit={submit}>

                                <InputLabel htmlFor="role" value="Selecione o tipo de Usuário" />
                                    <div className="mb-3 mt-1">

                                            <select id="role"
                                                    name="role"
                                                    data-dropdown-toggle="roleSelect"
                                                    data-dropdown-trigger="hover"
                                                    className="w-52 lg:w-full sm:w-72 focus:border-amber-900 focus:ring-amber-900 rounded-[10px] shadow-sm"
                                                    onChange={(e) => setData("role", e.target.value)}
                                            >
                                                {
                                                    profiles.map((e) => {
                                                        return (
                                                            <option value={e.id}>{e.role}</option>
                                                        )})
                                                }
                                            </select>

                                    </div>

                                    <div>
                                    <InputLabel htmlFor="name" value="Nome" />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData("name", e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className= " mt-3">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="email"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-3">
                                    <InputLabel htmlFor="password" value="Senha" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password_confirmation" value="Digite a Senha Novamente" />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-center mt-4">
                                    <PrimaryButton className="ml-4" disabled={valida}>
                                        Cadastrar
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
