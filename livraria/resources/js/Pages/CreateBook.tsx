import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import { PageProps } from '@/types';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import React, {createRef, FormEventHandler, ReactComponentElement, ReactElement, useEffect, useRef, useState} from "react";
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import PrimaryButton from "@/Components/PrimaryButton";
import RegistrationSupplier from "@/Components/RegistrationSupplier";
import SecondaryButton from "@/Components/SecondaryButton";
import AddAuthor from "@/Components/AddAuthor";
import Book from "@/Components/Book";
import {unmountComponentAtNode} from "react-dom";
import OptionsTable from "@/Components/OptionsTable";

export default function CreateBook({ auth, genders, suppliers}: PageProps) {
    const rotas = [
        {
            'name': 'Adicionar Compra',
            'route': 'book.create',
        }
    ]

    const book_status = useRef({status: false});
    const book_insert = useRef({isbn: null, quantity: null, amount: null});
    const [listBook, setListBook] = useState([]);

    const head = ["isbn", "quantidade", "valor unitário"];

    const header = (item:string) => {
        return <div className="px-2 py-3 font-medium font-black text-white text-sm">
            {item.toUpperCase()}
        </div>
    }

    const dataText = (itens:object) => {
        return Object.values(itens).map((item) => {
            return <div className="px-2 py-3 break-all font-medium font-black text-white text-sm rounded">
                    {item}
                </div>
        })
    }

    const { data, setData, post, processing, errors, reset } = useForm({
        isbn: '',
        fornecedor:'',
        cnpj_fornecedor:'',
        listaLivro: []
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
        data.listaLivro = listBook;
        post(route('entry.store'));
    };

    const localizaCNPJ: (cnpj:string) => void = (cnpj:string): void => {
        suppliers.map((s) => {
            if(s.cnpj === cnpj){
                alert("CNPJ já cadastrado");
                setData("fornecedor", s.name);
            }
        })
    }

    useEffect(() => {
        if(book_status.current.status){
            books.pop();
            data.isbn = "";
            setPreenchimento({status: true});
            book_status.current.status = false;
            setListBook([...listBook, {isbn: book_insert.current.isbn, quantity: book_insert.current.quantity, amount: book_insert.current.amount}]);
        }
    }, [book_status.current.status]);

    const resp: () => Promise<void> = async ():Promise<void> => {
        //https://www.googleapis.com/books/v1/volumes?q=isbn:
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${data.isbn}`)
        if (!response.ok) {
            alert("livro não localizado");
            setBooks([...books, <Book dataBook={{
                isbn: data.isbn,
                titulo: "",
                editora: "",
                descricao: "",
                autor: ""
            }} genders={genders} status={book_status} book={book_insert}/>]);
        } else {
            const dataResponse = await response.json();
            // setAuthors(dataResponse.authors);
            if(dataResponse.totalItems === 0){
                alert("livro não localizado");
                setBooks([...books, <Book dataBook={{
                    isbn: data.isbn,
                    titulo: "",
                    editora: "",
                    descricao: "",
                    autor: ""
                }} genders={genders} status={book_status} book={book_insert}/>]);
            } else {
                alert("livro localizado");
                // if (dataResponse.items[0].volumeInfo.authors?.length > 0) {
                //     data.autor = dataResponse.items[0].volumeInfo.authors;
                // }
                // data.titulo = dataResponse.items[0].volumeInfo.title + (dataResponse.items[0].volumeInfo.subtitle?.length > 0 ? dataResponse.items[0].volumeInfo.subtitle : "");
                // data.editora = dataResponse.items[0].volumeInfo.publisher ?? "";
                // data.descricao = dataResponse.items[0].volumeInfo.description ?? "";
                setBooks([...books, <Book dataBook={{
                    isbn: data.isbn,
                    titulo: dataResponse.items[0].volumeInfo.title + (dataResponse.items[0].volumeInfo.subtitle?.length > 0 ? dataResponse.items[0].volumeInfo.subtitle : ""),
                    editora: dataResponse.items[0].volumeInfo.publisher ?? "",
                    descricao: dataResponse.items[0].volumeInfo.description ?? "",
                    autor: dataResponse.items[0].volumeInfo.authors?.length > 0 ? dataResponse.items[0].volumeInfo.authors.toString() : ""
                }} genders={genders} status={book_status} book={book_insert}/>]);
            }
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
                                    <div className="bg-teal-950  justify-center my-4">
                                        <div className={"grid grid-cols-2 gap-4 w-full"}>
                                            <div>
                                                <InputLabel htmlFor="cnpj" value="CNPJ do Fornecedor"/>
                                                <TextInput
                                                    id="cnpj"
                                                    name="cnpj"
                                                    value={data.cnpj_fornecedor}
                                                    onChange={(e) => setData("cnpj_fornecedor", e.target.value)}
                                                    onBlur={(e) => localizaCNPJ(e.target.value)}
                                                    className="mt-1 mb-2 block w-full text-black"
                                                    autoComplete="cnpj"
                                                    isFocused={true}
                                                    required/>
                                            </div>
                                            <div>
                                                <InputLabel htmlFor="fornecedor" value="Fornecedor"/>
                                                <TextInput
                                                    id="fornecedor"
                                                    name="fornecedor"
                                                    value={data.fornecedor}
                                                    onChange={(e) => setData("fornecedor", e.target.value)}
                                                    className="mt-1 mb-2 block w-full text-black"
                                                    autoComplete="fornecedor"
                                                    isFocused={true}
                                                    required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="justify-center flex ">
                                            <SecondaryButton className="ml-4" type={'button'} onClick={() => {
                                                setPreenchimento({status: false})
                                            }}>
                                                Adicionar Livro
                                            </SecondaryButton>
                                    </div>

                                    <div hidden={preenchimento.status}>
                                        {/*<svg className="animate-spin bg-white h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>*/}
                                        <InputLabel htmlFor="isbn" value="ISBN" />
                                        <TextInput
                                            id="isbn"
                                            name="isbn"
                                            value={data.isbn}
                                            onChange={onHandleChange}
                                            onBlur={(e) => {
                                                if(e.target.value.length === 10 || e.target.value.length === 13){
                                                    let controle = true;
                                                    listBook.map((item) => {
                                                        if(item.isbn === e.target.value){
                                                            alert("livro já está na lista de compra");
                                                            controle = false;
                                                        }
                                                    })
                                                    if (controle)
                                                        resp();
                                                }
                                            }}
                                            className="mt-1 mb-2 block w-full text-black"
                                            autoComplete="isbn"
                                            isFocused={true}
                                            required/>

                                    </div>

                                    <div id="booksList">
                                        {...books}
                                    </div>

                                    <div>
                                        <InputLabel value={"Livros Comprados"}/>
                                        <div className="grid grid-flow-col grid-cols-4 gap-4 w-3/4 mx-auto">
                                            { head.map(item => {
                                                return header(item)
                                            })
                                            }
                                            <div className="px-6 py-3">
                                            </div>
                                        </div>
                                        {
                                            listBook.map(datas => {
                                                return <div className="mx-auto bg-teal-900 rounded-lg w-[90vw] grid grid-cols-4 text-center items-center mb-2">
                                                    {dataText(datas)}
                                                    <div className="px-6 py-3">
                                                        <SecondaryButton className="ml-4" type={'button'} onClick={() => {
                                                            let arra = listBook.filter(item => item !== datas);
                                                            setListBook([...arra]);
                                                        }}>
                                                            Remover livro
                                                        </SecondaryButton>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="flex items-center justify-center mt-4">
                                        <PrimaryButton className="ml-4" type={"button"} onClick={submit} disabled={(data.cnpj_fornecedor === "" || data.fornecedor === "" || listBook.length === 0)}>
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
