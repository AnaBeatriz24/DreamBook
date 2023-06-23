import SecondaryButton from "@/Components/SecondaryButton";
import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {Link, useForm} from "@inertiajs/react";

export default function SearchBooks({books}: string[object]) {


    let novoArray = [];
    const corte = 9;
    for (let i = 0; i < books.length; i = i + corte) {
        novoArray.push(books.slice(i, i + corte));
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevBookList = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? novoArray.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextBookList = () => {
        const isLastBookList = currentIndex === novoArray.length - 1;
        const newIndex = isLastBookList ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const {data, setData, post, reset} = useForm({
        idLivro: null
    })

    const submit = (e) => {
        e.preventDefault();
        data.idLivro = e.target.value;
        alert("Livro adicionado ao carrinho")
        post(route("cart.store"));
    }

    return (
        <>
            <div className={`flex items-center w-full ${novoArray.length > 1 ? "justify-between" : "justify-center"} p-6`}>
                {
                    novoArray.length > 1 ? <div
                        className='text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer -translate-x-0 translate-y-[-50%]'>
                        <BsChevronCompactLeft onClick={prevBookList} size={30}/>
                    </div> : <></>
                }
                <div className={`mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6`}>
                    {
                        novoArray[currentIndex].map(
                            (livro:string[object]): any => {
                                console.log(livro);
                                return <div className="max-w-[256px] bg-gray-800 ">
                                    <Link href={route("book.index", [livro.id])}>
                                        <div className="p-6 rounded-lg w-full">
                                            <p className={"text-xl font-bold text-white w-full text-center h-8 truncate ..."}>
                                                {livro.title}
                                            </p>
                                        </div>
                                        <div className={"h-[380px] flex items-center"}>
                                            <img src={`${window.location.origin}/storage/${livro.img}`} alt="Imagem de livro"/>
                                        </div>
                                    </Link>
                                    <div className={"p-6 rounded-lg w-full"}>
                                        <SecondaryButton className={"w-full justify-center"} onClick={submit} value={livro.id}>
                                            Adicionar
                                        </SecondaryButton>
                                    </div>
                                </div>
                            })
                    }
                </div>
                {
                    novoArray.length > 1 ? <div className='text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer -translate-x-0 translate-y-[-50%]'>
                        <BsChevronCompactRight onClick={nextBookList} size={30} />
                    </div> : <></>
                }
            </div>
        </>
    )
}
