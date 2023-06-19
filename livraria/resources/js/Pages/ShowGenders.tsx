import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import TableGenders from "@/Components/TableGenders";
import Pagination from "@/Components/Pagination";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";
import {FormEventHandler} from "react";

export default function ShowGenders({ auth }: PageProps, ) {

    let {genders} = usePage().props;

    let table = {
        header: ["Nome", "Ações"],
        data:genders,
        actions: ["Editar", "Deletar"],
    }

    const rotas:object = [
        {
            'name': 'Gerenciar Gêneros',
            'route': 'gender.show',
        }
    ]

    const { data, setData, post, processing, errors } = useForm({
        name: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('gender.store'));
        alert("Gênero Cadastrado!")
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gerenciar Gêneros Textuais</h2>}
        >
            <Head title="Gêneros Textuais" />

            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>

            <div className={"flex justify-center mt-12"}>
                <div className={"p-12 bg-teal-950 w-2/6 sm:rounded-lg "}>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" className={"text-white"} value="Novo Gênero" />

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
                                Cadastrar
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>

            {genders.data.length === 0
                ? <p className={"text-zinc-600 text-center mt-24 text-3xl font-bold"}>{`Não há gêneros cadastrados`}</p>
                : <TableGenders props={table} ></TableGenders>}

            <div className={'fixed bottom-0 left-0 right-0 mb-4'}>
                {genders.last_page !== 1 ? <Pagination registries={genders} /> : <></>}
            </div>
        </AuthenticatedLayout>
    );
}
