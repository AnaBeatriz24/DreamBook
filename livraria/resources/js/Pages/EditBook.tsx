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
import BookEdit from "@/Components/BookEdit";



export default function EditBook( { auth, book, autores, editora, generos, gendersBooks }: PageProps){
    const rotas = [
        {
            'name': 'Ver Compras',
            'route': 'book.showActive',
        },
        {
            'name': 'Editar Livro',
            'route': 'books.edit',
        },
    ];

    console.log(book);
    return<>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Editar Livro</h2>}>
            <Head title="Editar Livro" />

            <div className={"mt-8 ml-20"}>
                <Breadchumb rota={rotas} />
            </div>

            <BookEdit dataBook={book} gendersBooks={gendersBooks} genders={generos} authors={autores} />

        </AuthenticatedLayout>
    </>

}
