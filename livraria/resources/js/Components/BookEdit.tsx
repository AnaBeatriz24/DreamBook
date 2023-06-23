import React, {FormEventHandler, useState} from 'react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AddAuthor from "@/Components/AddAuthor";
import SecondaryButton from "@/Components/SecondaryButton";
import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import {unmountComponentAtNode} from "react-dom";
import EditAuthor from "@/Components/EditAuthor";

export default function BookEdit( {dataBook = {}, genders= [], authors, publishers}){

    const [listAutores, setListAutores] = useState(
        dataBook.authors.map((a) => {
            return <EditAuthor dataAuthor={a}/>;
        })
    );

    const [gens, setGens] = useState([])

    const { data, setData, post, processing, errors, reset } = useForm({
        idBook: dataBook.id,
        isbn: dataBook.isbn,
        titulo: dataBook.title,
        genero: [],
        editora:dataBook.publishers.name,
        editoraId: dataBook.publishers_id,
        imgcapa: dataBook.img,
        descricao: dataBook.description,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        data.imgcapa = document.getElementById("imgcapa").files[0];
        if(gens.length > 0) {
            let options = document.getElementById("genders").options;
            for (var i=0, iLen=document.getElementById("genders").options.length; i<iLen; i++) {
                let opt = options[i];
                if (opt.selected) {
                    data.genero.push(opt.value);
                }
            }
        };
        post(route('updateBook'));
    };

    const addLine = () => {
            setListAutores([...listAutores, <AddAuthor dataAuthor={{author: ""}} />]);
    }

    const removeAuthors = () =>{
        let at = dataBook.authors.pop();
        let array = listAutores;
        array.pop();
        setListAutores([...array]);
        post(route("excluiAutor", {"idAutor": at.id}));
    }

    return <form id="book_cad" onSubmit={submit} enctype="multipart/form-data">
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

        <SecondaryButton className="ml-4" type={'button'} onClick={addLine}>
            Adicionar autor
        </SecondaryButton>

        {
            (listAutores.length===1) ? <>
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
            onBlur={(e) => {
                post(route("updatePub", {"idPub": data.editoraId, "name": e.target.value}));
            }}
            className="mt-1 mb-2 block w-full text-black"
            autoComplete="editora"
            isFocused={true}
            required/>

        <div className="px-2 py-3 w-full flex justify-center">
            <img className={"w-32"} src={`${window.location.origin}/storage/${dataBook.img}`} />
        </div>

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
                  defaultValue={data.descricao}
        ></textarea>

        <InputLabel htmlFor="genders" value="Gêneros do livro:" />
        {dataBook.genders.map(g => {
            return <h1 className={"text-white"}>{g.name}</h1>
        })}

        <InputLabel htmlFor="genders" value="Selecione o gênero" />
        <select id="genders"
                name="genders"
                data-dropdown-toggle="roleSelect"
                data-dropdown-trigger="hover"
                multiple={true}
                className="w-52 mb-2 lg:w-full sm:w-72 text-black border-amber-900 focus:border-amber-900 focus:ring-amber-900 rounded-[10px] shadow-sm"
                onChange={(e) => setGens([...gens, e.target.value])}
        >
            {
                genders.map((e) => {
                    return <option value={e.id}>{e.name}</option>
                })
            }
        </select>

        <PrimaryButton className="ml-4" onClick={submit} type={"button"}>
            Salvar Livro
        </PrimaryButton>

    </form>
}
