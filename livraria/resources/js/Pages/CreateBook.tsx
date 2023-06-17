import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import { PageProps } from '@/types';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {FormEventHandler, useEffect, useState} from "react";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import PrimaryButton from "@/Components/PrimaryButton";
import RegistrationSupplier from "@/Components/RegistrationSupplier";
import SecondaryButton from "@/Components/SecondaryButton";

export default function CreateBook({ auth, books, genders, suppliers}: PageProps) {
    const rotas = [
        {
            'name': 'Adicionar Livro',
            'route': 'book.create',
        }
    ]

    const { data, setData, post, processing, errors, reset } = useForm({
        isbn: '',
        titulo: '',
        autor:'',
        genero:genders[0].id,
        editora:'',
        quantidade:'',
        imgcapa:'',
        valor_entrada:'',
        descricao:'',
    });


    const [preenchimento, setPreenchimento] = useState({
        status: false,
    })

    const [authors, setAuthors] = useState([])

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('book.store'));
    };


    useEffect(() => {
        if(data.isbn.length === 13) {
            console.log(data.isbn);
            resp();
        }
    }, [data.isbn])


    const resp: () => void = async ():Promise<void> =>
    {
        const response = await fetch(`https://openlibrary.org/isbn/${data.isbn}.json`)
        if (!response.ok) {
            throw new Error("livro não localizado");
        } else {
            const dataResponse = await response.json();
            let title = dataResponse.title;
            let editora = dataResponse.publishers[0];
            let autores:string[] = []
            dataResponse.authors.map(async (author) => {
                console.log(`https://openlibrary.org${author.key}.json`);

                const respo = await fetch(`https://openlibrary.org${author.key}.json`);
                if (!respo.ok) {
                    throw new Error("autor não localizado");
                }
                const dataResp = await respo.json();
                autores.push(dataResp.personal_name);
            })
            console.log(autores)
            setDados({
                autor: autores[0],
                descricao: "",
                genero: undefined,
                imgcapa: "",
                isbn: data.isbn,
                quantidade: "",
                valor_entrada: "",
                titulo: title,
                editora: editora
            });
            console.log(dados);
        }
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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <div className="p-6 bg-teal-950 text-white grid-cols-2">
                            <form onSubmit={submit}>
                                <div className="flex flex-col mx-auto">
                                    <RegistrationSupplier suppliers={suppliers} />

                                    <div className="justify-center flex ">
                                            <SecondaryButton className="ml-4" type={'button'}>
                                                Adicionar Livro
                                            </SecondaryButton>
                                    </div>

                                    <InputLabel htmlFor="isbn" value="ISBN" />
                                    <TextInput
                                        id="isbn"
                                        name="isbn"
                                        value={dados.isbn}
                                        onChange={(e) => setData("isbn", e.target.value)}
                                        className="mt-1 mb-2 block w-full text-black"
                                        autoComplete="isbn"
                                        isFocused={true}
                                        required/>
                                    <div hidden={preenchimento.status}>

                                        <InputLabel htmlFor="titulo" value="Título" />
                                        <TextInput
                                            id="titulo"
                                            name="titulo"
                                            value={dados.titulo}
                                            onChange={(e) => setData("titulo", e.target.value)}
                                            className="mt-1 mb-2 block w-full text-black"
                                            autoComplete="titulo"
                                            isFocused={true}
                                            required/>

                                        <InputLabel htmlFor="autor" value="Autor" />
                                        <TextInput
                                            id="autor"
                                            name="autor"
                                            value={dados.autor}
                                            onChange={(e) => setData("autor", e.target.value)}
                                            className="mt-1 mb-2 block w-full text-black"
                                            autoComplete="titulo"
                                            isFocused={true}
                                            required/>

                                        <InputLabel htmlFor="editora" value="Editora" />
                                        <TextInput
                                            id="editora"
                                            name="editora"
                                            value={dados.editora}
                                            onChange={(e) => setData("editora", e.target.value)}
                                            className="mt-1 mb-2 block w-full text-black"
                                            autoComplete="editora"
                                            isFocused={true}
                                            required/>

                                        <InputLabel className={"text-white "} forInput="text" value="Descrição do livro:" />
                                        <textarea id="message" rows="6" name={"message"}
                                                  className="mb-2 block p-2.5 w-full rounded-lg border
                                          border-amber-900 focus:ring-amber-900 focus:border-amber-900 text-black"
                                                  onChange={onHandleChange}
                                        ></textarea>


                                        <InputLabel htmlFor="genders" value="Selecione o gênero" />
                                        <select id="genders"
                                                name="genders"
                                                data-dropdown-toggle="roleSelect"
                                                data-dropdown-trigger="hover"
                                                className="w-52 mb-2 lg:w-full sm:w-72 text-black border-amber-900 focus:border-amber-900 focus:ring-amber-900 rounded-[10px] shadow-sm"
                                                onChange={(e) => setData("genders", e.target.value)}
                                        >
                                            {
                                                genders.map((e) => {
                                                    return (
                                                        <option value={e.id}>{e.name}</option>
                                                    )})
                                            }
                                        </select>


                                        <InputLabel htmlFor="quantidade" value="Quantidade" />
                                        <TextInput
                                            id="quantidade"
                                            name="quantidade"
                                            value={data.quantidade}
                                            onChange={(e) => setData("quantidade", e.target.value)}
                                            className="mt-1 mb-2 block w-full text-black"
                                            autoComplete="quantidade"
                                            isFocused={true}
                                            required/>



                                        <InputLabel htmlFor="valor_entrada" value="Valor de Entrada" />
                                        <TextInput
                                            id="valor_entrada"
                                            name="valor_entrada"
                                            value={data.valor_entrada}
                                            onChange={(e) => setData("valor_entrada", e.target.value)}
                                            className="mt-1 mb-2 block w-full text-black"
                                            autoComplete="valor_entrada"
                                            isFocused={true}
                                            required/>



                                    </div>
                                    <div className="flex items-center justify-center mt-4">
                                        <PrimaryButton className="ml-4">
                                            Cadastrar
                                        </PrimaryButton>
                                    </div>



                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
