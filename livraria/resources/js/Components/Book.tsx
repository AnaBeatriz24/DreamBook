import React, { useState } from 'react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AddAuthor from "@/Components/AddAuthor";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Book({data = {titulo: String, autor: String, editora: String, descricao: String}, onHandle = () => {}}){

    let autores: Array<String> = data.autor.split(",");

    const [listAutores, setListAutores] = useState([
        autores.map((autor) => {
            return <AddAuthor data={{author: autor}} onHandle={onHandle}/>;
        })
    ]);

    const addLine = () => {
            setListAutores([...listAutores, <AddAuthor data={{author: ""}} onHandle={onHandle}/>]);
    }

    const removeAuthors = () =>{
        let array = listAutores
        array.pop()
        setListAutores([...array])
    }

    return <>
        <InputLabel htmlFor="titulo" value="Título" />
        <TextInput
            id="titulo"
            name="titulo"
            value={data.titulo}
            className="mt-1 mb-2 block w-full text-black"
            autoComplete="titulo"
            isFocused={true}
            required/>

        {...listAutores}

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
            onChange={onHandle}
            className="mt-1 mb-2 block w-full text-black"
            autoComplete="editora"
            isFocused={true}
            required/>

        <InputLabel className={"text-white "} forInput="text" value="Descrição do livro:" />
        <textarea id="message" rows="6" name={"message"}
                  className="mb-2 block p-2.5 w-full rounded-lg border
                                          border-amber-900 focus:ring-amber-900 focus:border-amber-900 text-black"
                  onChange={onHandle}
        >{data.descricao}</textarea>
    </>
}
