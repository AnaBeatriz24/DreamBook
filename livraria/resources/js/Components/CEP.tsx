// import {useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";
import {useForm} from "@inertiajs/react";
import React, {FormEventHandler, useRef, useState} from "react";
import RowTableCart from "@/Components/RowTableCart";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import Book from "@/Components/Book";

export default function CEP() {
    const {data, setData, post} = useForm({
        cep: "",
        name: "",
        number: "",
        district: "",
        complement: "",
        city: "",
        uf: "",
    })

    const desativa = useRef({status: false});

    const [abre, setAbre] = useState({status:true});
    const [dados, setDados] = useState({
        cep: data.cep,
        name: data.name,
        number: data.number,
        district: data.district,
        complement: data.complement,
        city: data.city,
        uf: data.uf,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        desativa.current.status = true;
        post(route("cart.cep", {...dados}));
    }

    const resp: () => Promise<void> = async ():Promise<void> => {
        if(data.cep.length < 8){
            alert("CEP deve ter pelo menos 8 digitos");
            return;
        }
        const response = await fetch(`https://viacep.com.br/ws/${data.cep}/json/`);
        if (!response.ok) {
            alert("CEP não localizado, insira os dados manualmente");
            setAbre({status: false});
        } else {
            const dataResponse = await response.json();
            setDados({
                cep: data.cep,
                name: dataResponse.logradouro,
                number: data.number,
                district: dataResponse.bairro,
                complement: dataResponse.complemento,
                city: dataResponse.localidade,
                uf: dataResponse.uf,
            });
            setAbre({status: false});
        }
    }

    return <>
        <div className={" text-black"}>
            <div className={"grid grid-cols-3 gap-2"}>
                <div className={"col-span-3  text-white"}>
                    <h2>CEP:</h2>
                    <TextInput require=""     name="cep" id="cep" value={data.cep} minLength={8} maxLength={8} onChange={(e) => setData(e.target.name, e.target.value)} onBlur={resp}/>
                </div>
                <div>
                    <h2 className=' text-white'>Logradouro:</h2>
                    <TextInput require="" name="name" className={"w-full"} value={dados.name} onChange={(e) => setDados({...dados, name: e.target.value})} disabled={abre.status}/>
                </div>
                <div>
                    <h2 className=' text-white'>Complemento:</h2>
                    <TextInput require="" name="complement" className={"w-full"} value={dados.complement}
                               onChange={(e) => setDados({...dados, complement: e.target.value})} disabled={abre.status}/>
                </div>
                <div>
                    <h2 className=' text-white'>Bairro:</h2>
                    <TextInput require="" name="district" value={dados.district}
                               onChange={(e) => setDados({...dados, district: e.target.value})} disabled={abre.status}/>
                </div>
                <div>
                    <h2 className=' text-white'>Número:</h2>
                    <TextInput require="" name="number" value={dados.number}
                               onChange={(e) => setDados({...dados, number: e.target.value})} disabled={abre.status}/>
                </div>

                <div>
                    <h2 className=' text-white'>Cidade:</h2>
                    <TextInput require="" name="city" value={dados.city}
                               onChange={(e) => setDados({...dados, city: e.target.value})} disabled={abre.status}/>
                </div>
                <div>
                    <h2 className=' text-white'>UF:</h2>
                    <TextInput require="" name="uf" value={dados.uf}
                               onChange={(e) => setDados({...dados, uf: e.target.value})} disabled={abre.status}/>
                </div>
            </div>
            <SecondaryButton id={"salvarCEP"} className={"place-self-center mt-4"} type={"button"} onClick={submit} disabled={desativa.current.status}>Salvar</SecondaryButton>
        </div>
    </>
}
