// import {useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";
import {useForm} from "@inertiajs/react";
import {FormEventHandler, useRef, useState} from "react";
import RowTableCart from "@/Components/RowTableCart";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";

export default function CupomApply({idSale, coupon}) {
    const {data, setData, post} = useForm({
        cupom: coupon === null ? "" : coupon.name,
        idSale: idSale
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("cart.appliedCoupon"));
    }
    return <>
        <div className={"text-black"}>
            <h3>Tem um cupomzinho? {coupon === null ? "" : `${coupon.discount}%`}</h3>
            <TextInput name="cupom" value={data.cupom} onChange={(e) => setData(e.target.name, e.target.value)}/>
            <SecondaryButton className={"ml-2"} type={"button"} onClick={submit} disabled={data.cupom.length === 0}>Aplicar</SecondaryButton>
        </div>
    </>
}
