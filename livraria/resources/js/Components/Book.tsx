import React, {FormEventHandler, useState} from 'react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AddAuthor from "@/Components/AddAuthor";
import SecondaryButton from "@/Components/SecondaryButton";
import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Book( {dataBook = {isbn: string, titulo: string, autor: string, editora: string, descricao: string}, genders= []}){
    const onHandleChange = (event) => setData(event.target.name, event.target.value);

    const [listAutores, setListAutores] = useState([
        dataBook.autor.split(",").map((a) => {
            return <AddAuthor dataAuthor={{author: a}}/>;
        })
    ]);

    const { data, setData, post, processing, errors, reset } = useForm({
        isbn: dataBook.isbn,
        titulo: dataBook.titulo,
        autor: dataBook.autor.split(","),
        genero: [],
        editora:dataBook.editora,
        quantidade: 0,
        imgcapa: null,
        valor_entrada: 0.00,
        descricao: dataBook.descricao,
    });

    const submit: FormEventHandler = (e) => {
        if(data.autor.length === document.getElementsByName("autor").length){
            e.preventDefault();
            data.imgcapa = document.getElementById("imgcapa").files[0];
            //console.log(data);
            post(route('book.store'));
        }
    };

    const addLine = () => {
            setListAutores([...listAutores, <AddAuthor data={{author: ""}} onHandle={onHandle}/>]);
    }

    const removeAuthors = () =>{
        let array = listAutores
        array.pop()
        setListAutores([...array])
    }

    return <>

        <form onSubmit={submit} enctype="multipart/form-data">
        <InputLabel htmlFor="titulo" value="Título" />
        <TextInput
            id="titulo"
            name="titulo"
            value={data.titulo}
            className="mt-1 mb-2 block w-full text-black"
            onChange={(e) => setData("titulo", e.target.value)}
            autoComplete="titulo"
            isFocused={true}
            required/>

        {...listAutores}

        <SecondaryButton className="ml-4" type={'button'} onClick={() => {
            setListAutores([...listAutores, <AddAuthor dataAuthor={{author: ""}} onHandle={() => {}}/>]);
        }}>
        <SecondaryButton className="ml-4" type={'button'} onClick={addLine}>
            Adicionar autor
        </SecondaryButton>

        {
            listAutores.length==1 ? <>
            </> : <SecondaryButton className="ml-4" type={'button'} onClick={removeAuthors}>
                Remover autor
            </SecondaryButton>
        }



        <InputLabel htmlFor="editora" value="Editora" />
        <TextInput
            id="editora"
            name="editora"
            value={data.editora}
            onChange={(e) => setData("editora", e.target.value)}
            className="mt-1 mb-2 block w-full text-black"
            autoComplete="editora"
            isFocused={true}
            required/>

        <InputLabel htmlFor="imgcapa" value="Capa" />
        <input
            id="imgcapa"
            name="imgcapa"
            type={"file"}
            className="mt-1 mb-2 block w-full text-white"
            required/>

        <InputLabel className={"text-white "} forInput="text" value="Descrição do livro:" />
        <textarea id="descricao" rows="6" name="descricao"
                  className="mb-2 block p-2.5 w-full rounded-lg border
                                          border-amber-900 focus:ring-amber-900 focus:border-amber-900 text-black"
                  onChange={(e) => setData("descricao", e.target.value)}
        >{data.descricao}</textarea>

        <InputLabel htmlFor="genders" value="Selecione o gênero" />
        <select id="genders"
                name="genders"
                data-dropdown-toggle="roleSelect"
                data-dropdown-trigger="hover"
                multiple={true}
                className="w-52 mb-2 lg:w-full sm:w-72 text-black border-amber-900 focus:border-amber-900 focus:ring-amber-900 rounded-[10px] shadow-sm"
                onChange={(e) => setData("genero", [...data.genero, e.target.value])}
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

            <PrimaryButton className="ml-4" onClick={submit} type={"button"}>
                Salvar Livro
            </PrimaryButton>
        </form>
    </>
}
