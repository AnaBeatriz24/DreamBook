import {Head, Link, useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import Breadchumb from "@/Components/BreadchumbSystem";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import React, {useState} from "react";
import {name} from "axios";
import PrimaryButton from "@/Components/PrimaryButton";
import AddAuthor from "@/Components/AddAuthor";
import internal from "stream";

const rotas = [
    {
        'name': 'Ver Compras',
        'route': 'book.showActive',
    },
    {
        'name': 'Editar Livro',
        'route': 'books.edit',
    },
]

export default function EditBook( { auth, book, autores, editora, generos }: PageProps){
    //

    // const selectAutor = (
    //     autores.map((e) =>{
    //
    //     })
    // )
    //
    // const addLine = () => {
    //     setListAutores([...listAutores, <AddAuthor dataAuthor={{author: ""}} />]);
    // }
    //
    // const removeAuthors = () =>{
    //     let array = listAutores
    //     array.pop()
    //     setListAutores([...array])
    // }
    let b =[];
    const selectAutores = (


        autores.map((a) => {
            console.log(autores[1].name)
            return <AddAuthor dataAuthor={{author: autores.length.name}}/>;


        })
    );



    const { data, setData, post, processing, errors } = useForm({
        id_book: book.id,
        titulo_book: book.title,
        descricao: book.description,
        isbn_book: book.isbn,
        imgcapa_books: book.img,
        editora_book: editora.name,
        autor_book: autores[0].name,
        genero_book: generos.length.name,
        // quantidade_stocks: stocks.quantidade,
        // valor_entrada: stocks.valor_entrada,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault()
        post(route("store.editBook", [data.id_book]));
    };

    return<>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Editar Livro</h2>}>
            <Head title="Editar Livro" />

            <div className={"mt-8 ml-20"}>
                <Breadchumb rota={rotas} />
            </div>

            <div className="bg-teal-950 w-[90vw] lg:w-3/4 lg:h-[80vh] rounded-lg flex flex-col items-center space-y-6">
                <div className="flex flex-col m-auto space-y-2 items-center bg-teal-950 h-screen">
                    <form onSubmit={submit} method={"post"}>
                        <div className="flex flex-col mx-auto">
                            <div className="flex gap-4 justify-center">
                                <form>
                                    <div className="mt-4 w-full lg:w-[60vw]">
                                        <InputLabel className={"text-white"} forInput="titulo_book" value="Título" />

                                        <TextInput
                                            id="titulo_book"
                                            name="titulo_book"
                                            type={"text"}
                                            value={data.titulo_book}
                                            className="mt-1 w-full"
                                            autoComplete="titulo_book"
                                            onChange={onHandleChange}
                                            required={true}
                                        />
                                    </div>
                                </form>
                            </div>

                            <div className="flex flex-col  items-center">
                                <div className="mt-4 w-full">
                                    <InputLabel className={"text-white"} forInput="autor_book" value="Autor" />

                                    <TextInput
                                        id="autor_book"
                                        name="autor_book"
                                        type={"text"}
                                        value={data.autor_book}
                                        className="mt-1 w-full"
                                        autoComplete="autor_book"
                                        handleChange={onHandleChange}
                                        required={true}
                                    />
                                    {/*{...listAutores}*/}

                                    {/*<SecondaryButton className="ml-4" type={'button'} onClick={addLine}>*/}
                                    {/*    Adicionar autor*/}
                                    {/*</SecondaryButton>*/}

                                    {/*{*/}
                                    {/*    (listAutores.length===1) ? <>*/}
                                    {/*    </> : <SecondaryButton className="ml-4" type={'button'} onClick={removeAuthors}>*/}
                                    {/*        Remover autor*/}
                                    {/*    </SecondaryButton>*/}
                                    {/*}*/}
                                </div>
                            </div>
                            <div className="flex flex-col  items-center">
                                <div className="mt-4 w-full">
                                    <InputLabel className={"text-white"} forInput="editora_book" value="Editora" />

                                    <TextInput
                                        id="editora_book"
                                        name="editora_book"
                                        type={"text"}
                                        value={data.editora_book}
                                        className="mt-1 w-full"
                                        autoComplete="editora_book"
                                        onChange={onHandleChange}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="mt-4 w-full align-text-top whitespace-normal rows=5">
                                    <InputLabel className={"text-white"} forInput="descricao" value="Descrição" />
                                    <textarea id="descricao" rows="6" name={"descricao"}
                                              className="block p-2.5 w-full rounded-lg border border-gray-300 focus:border-amber-900 focus:ring-amber-900 rounded-md shadow-sm"
                                              onChange={onHandleChange}
                                    >{data.descricao}</textarea>
                                </div>
                            </div>
                            <div className="flex flex-col  items-center">
                                <div className="mt-4 w-full">
                                    <InputLabel className={"text-white"} forInput="genero_book" value="Generos Associados" />

                                    <TextInput
                                        id="genero_book"
                                        name="genero_book"
                                        type={"text"}
                                        value={data.genero_book}
                                        className="mt-1 w-full"
                                        autoComplete="genero_book"
                                        handleChange={onHandleChange}
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className="mt-28 flex gap-4 justify-around">
                                <Link href={route('book.showActive')}>
                                    <SecondaryButton className="ml-4 bg-[#ef4444] hover:bg-red-700" processing={processing} type={"button"}>
                                        Cancelar
                                    </SecondaryButton>
                                </Link>
                                <SecondaryButton className="bg-green-500 ml-4 hover:bg-green-700" processing={processing} type={'submit'}>
                                    Salvar
                                </SecondaryButton>
                            </div>

                        </div>
                    </form>
                </div>
            </div>



        </AuthenticatedLayout>
    </>

}
