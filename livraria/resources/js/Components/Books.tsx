import SecondaryButton from "@/Components/SecondaryButton";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Books({livrosMaisVendidos}: string[]) {

    let novoArray = [];
    const corte = 3;
    for (let i = 0; i < livrosMaisVendidos.length; i = i + corte) {
        novoArray.push(livrosMaisVendidos.slice(i, i + corte));
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

    return (
        <>
                <div className={`flex items-center w-full ${novoArray.length > 1 ? "justify-between" : "justify-center"} p-6`}>
                    {
                        novoArray.length > 1 ? <div
                        className='text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer -translate-x-0 translate-y-[-50%]'>
                        <BsChevronCompactLeft onClick={prevBookList} size={30}/>
                        </div> : <></>
                    }
                    <div className={`mt-6 grid grid-cols-1 lg:grid-cols-${novoArray[currentIndex].length} gap-6`}>
                        {
                            novoArray[currentIndex].map(
                                (livro:string[]): any => {
                                    return <div className="max-w-[256px]">
                                        <div className="bg-gray-800 p-6 rounded-lg w-full">
                                            <p className={"text-2xl font-bold text-white w-full break-words text-center flex items-center min-h-16"}>
                                                {livro["name"]}
                                            </p>
                                        </div>
                                        <div className={""}>
                                            <img src={`${livro["path"]}`} alt="Imagem de livro"/>
                                        </div>
                                        <div className={"bg-gray-800 p-6 rounded-lg w-full"}>
                                            <SecondaryButton className={"w-full justify-center"}>
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
