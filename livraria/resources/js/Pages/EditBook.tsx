import {Head, Link, useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import Breadchumb from "@/Components/BreadchumbSystem";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import AddAuthor from "@/Components/AddAuthor";
import React from "react";
import UpdateTitle from "@/Components/UpdateTitle";

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
export default function EditBook({ auth, book, autores, editora }: PageProps){

    console.log(book, editora, autores)

    const { data, setData, post, processing, errors } = useForm({
        id_book: book.id,
        titulo_book: book.title,
        descricao: book.description,
        isbn_book: book.isbn,
        imgcapa_books: book.img,
        editora_book: editora.name,
        autor_book: book.author,
        genero_book: book.genero,
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
                                <div className="mt-4 w-full lg:w-[60vw]">
                                    <UpdateTitle dataTitle={{title: "" }} value={data.title}/>
                                </div>
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
                                        handleChange={onHandleChange}
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
                                    <InputLabel className={"text-white"} forInput="editora_book" value="Assunto" />

                                    <TextInput
                                        id="editora_book"
                                        name="editora_book"
                                        type={"text"}
                                        value={data.editora_book}
                                        className="mt-1 w-full"
                                        autoComplete="editora_book"
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
    // <form onSubmit={submit} method={'post'}>
    //
    //     <TextInput
    //         id="id_book"
    //         type="id_book"
    //         name="id_book"
    //         value={data.id_book}
    //         className="mt-1 block w-screen"
    //         isFocused={true}
    //         handleChange={onHandleChange}
    //     />
    //
    //     <div className="mt-4 flex gap-4 justify-center">
    //         <div className="flex flex-col">
    //             <div className="mt-4">
    //                 <InputLabel forInput="titulo_book" value="Título" />
    //                 <TextInput
    //                     id="titulo_book"
    //                     type="text"
    //                     name="titulo_book"
    //                     value={data.titulo_book}
    //                     className="mt-1 block w-screen"
    //                     isFocused={true}
    //                     handleChange={onHandleChange}
    //                 />
    //                 <InputError message={errors.titulo_book} className="mt-2" />
    //             </div>
    //
    //             <div className="mt-4">
    //                 <InputLabel forInput="descricao" value="E-mail de confirmação do gerente" />
    //                 <TextInput
    //                     id="descricao"
    //                     type="descricao"
    //                     name="descricao"
    //                     value={data.descricao}
    //                     className="mt-1 block w-screen"
    //                     autoComplete="username"
    //                     isFocused={true}
    //                     handleChange={onHandleChange}
    //                 />
    //                 <InputError message={errors.descricao} className="mt-2" />
    //             </div>
    //
    //             <div className="mt-4">
    //                 <InputLabel forInput="isbn_book" value="E-mail de confirmação do gerente" />
    //                 <TextInput
    //                     id="isbn_book"
    //                     type="isbn_book"
    //                     name="isbn_book"
    //                     value={data.isbn_book}
    //                     className="mt-1 block w-screen"
    //                     autoComplete="username"
    //                     isFocused={true}
    //                     handleChange={onHandleChange}
    //                 />
    //                 <InputError message={errors.isbn_book} className="mt-2" />
    //             </div>
    //
    //             <div className="mt-4">
    //                 <InputLabel forInput="editora_book" value="E-mail de confirmação do gerente" />
    //                 <TextInput
    //                     id="editora_book"
    //                     type="editora_book"
    //                     name="editora_book"
    //                     value={data.editora_book}
    //                     className="mt-1 block w-screen"
    //                     autoComplete="username"
    //                     isFocused={true}
    //                     handleChange={onHandleChange}
    //                 />
    //                 <InputError message={errors.editora_book} className="mt-2" />
    //             </div>
    //
    //             <div className="mt-4">
    //                 <InputLabel forInput="autor_book" value="E-mail de confirmação do gerente" />
    //                 <TextInput
    //                     id="autor_book"
    //                     type="autor_book"
    //                     name="autor_book"
    //                     value={data.autor_book}
    //                     className="mt-1 block w-screen"
    //                     autoComplete="username"
    //                     isFocused={true}
    //                     handleChange={onHandleChange}
    //                 />
    //             </div>
    //             <InputError message={errors.autor_book} className="mt-2" />
    //
    //             <div className="mt-4">
    //                 <InputLabel forInput="genero_book" value="E-mail de confirmação do gerente" />
    //                 <TextInput
    //                     id="genero_book"
    //                     type="genero_bookgenero_book"
    //                     name="genero_book"
    //                     value={data.genero_book}
    //                     className="mt-1 block w-screen"
    //                     autoComplete="username"
    //                     isFocused={true}
    //                     handleChange={onHandleChange}
    //                 />
    //                 <InputError message={errors.genero_book} className="mt-2" />
    //             </div>
    //         </div>
    //     </div>
    //
    //
    //     <div className="mt-28 flex gap-4 justify-around">
    //         <Link href={route('book.showActive')}>
    //             <SecondaryButton className="ml-4 bg-[#ef4444] hover:bg-red-700" processing={processing} type={"button"}>
    //                 Cancelar
    //             </SecondaryButton>
    //         </Link>
    //         <SecondaryButton className="bg-green-500 ml-4 hover:bg-green-700" processing={processing} type={'submit'}>
    //             Editar informações
    //         </SecondaryButton>
    //     </div>
    // </form>

}
