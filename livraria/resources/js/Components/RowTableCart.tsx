// import {useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";
import {useForm} from "@inertiajs/react";
import {useState} from "react";

export default function RowTableCart({book}) {

    const {data, setData, post} = useForm(book);

    return <>
            <div className="px-2 py-3 break-words font-medium text-white rounded">
                {data.title}
            </div>
            <div className="px-2 py-3 break-words font-medium text-black rounded">

                <input type="number" name="quantity" id="quantity"
                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                       value={data.quantity} onChange={(e) => {
                           setData("quantity", e.target.value);
                       }} onBlur={() => post(route("cart.updateSales"))} min={0} max={data.maxStock}/>
            </div>
            <div className="px-2 py-3 break-words font-medium text-white rounded">
                R$ {data.amount}
            </div>
            <div className="px-2 py-3 break-words font-medium text-white rounded">
                R$ {data.amount * data.quantity}
            </div>
    </>
}
