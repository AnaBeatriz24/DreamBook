import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {Head, useForm, usePage} from '@inertiajs/react';
import SecondaryButton from "@/Components/SecondaryButton";
import {FormEventHandler} from "react";

const rotas = [
    {
        'name': 'Gerenciar Gêneros',
        'route': 'gender.showActives',
    },
    {
        'name': 'Editar Gênero',
        'route': 'gender.edit',
    },
]
export default function EditGender({ auth }: PageProps) {

    const {gender} = usePage().props

    const { data, setData, post, processing, errors } = useForm({
        name: gender[0].name,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('gender.update', [gender[0].id]));
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar gênero</h2>}
        >
            <Head title="Editar gênero" />

            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>

            <div className={"flex justify-center mt-12"}>
                <div className={"p-12 bg-teal-950 w-2/6 sm:rounded-lg "}>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" className={"text-white"} value="Nome do gênero" />

                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={onHandleChange}
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="w-full flex justify-center mt-6">
                            <SecondaryButton type={'submit'} className="ml-4" disabled={processing}>
                                Alterar Gênero
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
