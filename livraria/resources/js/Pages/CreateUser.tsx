import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import {FormEventHandler} from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";

export default function CreateUser({ auth, profiles }: PageProps) {

    console.log(profiles);
    const { data, setData, post, processing, errors, reset } = useForm({
        role: profiles,
        name: '',
        email: '',

    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };



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

                                            <select id="id"
                                                    name="role"
                                                    data-dropdown-toggle="roleSelect"
                                                    data-dropdown-trigger="hover"
                                                    className="w-52 lg:w-full sm:w-72 focus:border-amber-900 focus:ring-amber-900 rounded-[10px] shadow-sm"
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
                                    <InputLabel htmlFor="name" value="Name" />

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

                                <div className="flex items-center justify-center mt-4">
                                    <PrimaryButton className="ml-4" processing={processing}>
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
