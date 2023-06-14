import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import { PageProps } from '@/types';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {FormEventHandler} from "react";
import BreadchumbSystem from "@/Components/BreadchumbSystem";

export default function CreateBook({ auth, books, genders}: PageProps) {

    console.log(genders);
    const { data, setData, post, processing, errors, reset } = useForm({
        isbn: '',
        titulo: '',
        autor:'',
        genero:genders[0].id,
        editora:'',
        fornecedor:'',
        quantidade:'',
        cnpj_fornecedor:'',
        imgcapa:'',
        valor_entrada:'',
        descricao:'',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('book.store'));
    };

    const rotas = [
        {
            'name': 'Adicionar Livro',
            'route': 'book.create',
        }
    ]


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Adicionar Livro</h2>}
        >
            <Head title="Adicionar Livro" />

            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-teal-950 text-white">
                            <form onSubmit={submit}>
                                <TextInput htmlFor="isbn" value="ISBN" />
                                <div className="mb-3 mt-1">
                                    <InputLabel
                                        id="isbn"
                                        name="isbn"
                                        value={data.isbn}
                                        className="mt-1 block w-full"
                                        autoComplete="isbn"
                                        isFocused={true}
                                        required/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
