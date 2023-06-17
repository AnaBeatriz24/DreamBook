import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Head, useForm } from '@inertiajs/react';
import SecondaryButton from "@/Components/SecondaryButton";
import {FormEventHandler} from "react";

export default function CreateCoupon({ auth }: PageProps) {

    const rotas = [
        {
            'name': 'Adicionar Cupom',
            'route': 'coupon.create',
        }
    ]

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        discount: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('coupon.store'));
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    // TODO: Finalizar a estilização da página

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Adicionar Cupons</h2>}
        >
            <Head title="Adicionar Cupons" />

            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>

            <div className={"flex justify-center mt-12"}>
                <div className={"p-12 bg-teal-950 w-2/6 sm:rounded-lg "}>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" className={"text-white"} value="Nome" />

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

                        <div className="mt-4">
                            <InputLabel htmlFor="discount" className={"text-white"} value="Desconto em porcentagem" />

                            <TextInput
                                id="discount"
                                type="number"
                                name="discount"
                                value={data.discount}
                                className="mt-1 block w-full"
                                autoComplete="discount"
                                onChange={onHandleChange}
                            />

                            <InputError message={errors.discount} className="mt-2" />
                        </div>

                        <div className="w-full flex justify-center mt-6">
                            <SecondaryButton type={'submit'} className="ml-4" disabled={processing}>
                                Cadastrar
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
