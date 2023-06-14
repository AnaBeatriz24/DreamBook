import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import { PageProps } from '@/types';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {FormEventHandler} from "react";
import BreadchumbSystem from "@/Components/BreadchumbSystem";

export default function CreateBook({ auth, books, genders}: PageProps) {

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

    const resp: (isbn:string) => Promise<{}> = async (isbn: string): Promise<{}> => {
        const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`)
        if(!response.ok){
            throw new Error("livro não localizado");
            return Promise<{}>
        }
        const dataResponse = await response.json()
        console.log(dataResponse.title)
        return  dataResponse
    }


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
                        <div className="p-6 bg-teal-950 text-white grid grid-cols-2">
                            <form onSubmit={submit}>
                                <InputLabel htmlFor="isbn" value="ISBN" />
                                <TextInput
                                    id="isbn"
                                    name="isbn"
                                    value={data.isbn}
                                    onChange={(e) => setData("isbn", e.target.value)}
                                    onBlur={resp(data.isbn)}
                                    className="mt-1 block w-full text-black"
                                    autoComplete="isbn"
                                    isFocused={true}
                                    required/>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
