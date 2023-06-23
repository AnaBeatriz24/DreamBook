// import {useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";
import {useForm} from "@inertiajs/react";
import {useRef, useState} from "react";
import RowTableCart from "@/Components/RowTableCart";

export default function TableCart({books= [], cupom}) {

    const header = (item:string) => {
        return <div className="px-8 py-3 font-medium text-black">
            {item}
        </div>
    }

    let head = ["Livro", "Quantidade", "Valor Uni.", "Valor Total"];

    let total = books.reduce((a, b) => Number(a)  + Number(b.quantity * b.amount), 0)
    return <>
        <div className="grid grid-flow-col grid-cols-4 justify-evenly text-center">
            {
                head.map(
                    item => {
                        return header(item)
                    })
            }
        </div>

        {

            books.map((d) => {
                return <div className="mx-auto bg-teal-950 rounded-lg w-[90vw] grid grid-cols-4 justify-evenly text-center items-center mb-2">
                    <RowTableCart book={d}/>
                </div>
            })
        }
        <div className="mx-auto bg-teal-950 rounded-lg w-[90vw] grid grid-cols-4 mb-2">
            <div className="px-2 py-3 break-words font-medium text-white rounded col-span-3 place-self-end">
                Total
            </div>
            {(cupom === null) ?
                <div className="px-2 py-3 break-words font-medium text-white rounded">
                    R$ { total }
                </div>
                :
                <div className="px-2 py-3 break-words font-medium text-white rounded">
                    <span className={"line-through"}>R$ { total }</span> (- {`${cupom.discount}%`})
                    <h3>R$ {total * (1 - cupom.discount/100)}</h3>
                </div>
            }
        </div>
    </>
}
