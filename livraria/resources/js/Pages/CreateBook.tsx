import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import { PageProps } from '@/types';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {FormEventHandler, ReactComponentElement, ReactElement, useEffect, useState} from "react";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import PrimaryButton from "@/Components/PrimaryButton";
import RegistrationSupplier from "@/Components/RegistrationSupplier";
import SecondaryButton from "@/Components/SecondaryButton";
import AddAuthor from "@/Components/AddAuthor";
import Book from "@/Components/Book";

export default function CreateBook({ auth, genders, suppliers}: PageProps) {
    const rotas = [
        {
            'name': 'Adicionar Livro',
            'route': 'book.create',
        }
    ]
    const [rows, setRows] = useState(0)
    const [rowsState, setRowsState] = useState([])
    const addAutor=() =>{
        if(rows <=1){
            setRowsState([...rowsState, <AddAuthor/> ])
        }
    }

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

    const [preenchimento, setPreenchimento] = useState({
        status: true,
    });

    const [books, setBooks] = useState([]);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('book.store'));
    };


    useEffect(() => {
        if(data.isbn.length === 10 || data.isbn.length === 13){
            console.log(data);
            if(data.titulo === "")
                resp();
        }
    }, [data.isbn])

    const resp: () => Promise<void> = async ():Promise<void> => {
        //https://www.googleapis.com/books/v1/volumes?q=isbn:
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${data.isbn}`)
        if (!response.ok) {
            throw new Error("livro não localizado");
        } else {
            const dataResponse = await response.json();
            // setAuthors(dataResponse.authors);
            alert("livro localizado");
            if(dataResponse.items[0].volumeInfo.authors?.length > 0){
                data.autor = dataResponse.items[0].volumeInfo.authors.toString();
            }
            console.log(dataResponse);
            data.titulo = dataResponse.items[0].volumeInfo.title + (dataResponse.items[0].volumeInfo.subtitle?.length > 0 ? dataResponse.items[0].volumeInfo.subtitle : "");
            data.editora = dataResponse.items[0].volumeInfo.publisher ?? "";
            data.descricao = dataResponse.items[0].volumeInfo.description ?? "";
            console.log(data);
            setBooks([...books, <Book data={{
                titulo: dataResponse.items[0].volumeInfo.title + (dataResponse.items[0].volumeInfo.subtitle?.length > 0 ? dataResponse.items[0].volumeInfo.subtitle : ""),
                editora: dataResponse.items[0].volumeInfo.publisher ?? "",
                descricao: dataResponse.items[0].volumeInfo.description ?? "",
                autor: dataResponse.items[0].volumeInfo.authors.toString()
            }} onHandle={setData}/>]);
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
                                            <SecondaryButton className="ml-4" type={'button'} >
                                                Adicionar Livro
                                            </SecondaryButton>

                                    </div>

                                    <InputLabel htmlFor="isbn" value="ISBN" />
                                    <TextInput
                                        id="isbn"
                                        name="isbn"
                                        value={data.isbn}
                                        onChange={(e) => setData("isbn", e.target.value)}
                                        className="mt-1 mb-2 block w-full text-black"
                                        autoComplete="isbn"
                                        isFocused={true}
                                        required/>
                                    <div id="booksList">

                                        <div hidden={preenchimento.status}>
                                            <svg className="animate-spin bg-white h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
                                        </div>

                                        {...books}


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
