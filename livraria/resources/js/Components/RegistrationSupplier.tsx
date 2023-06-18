import {PageProps} from "@/types";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";


export default function RegistrationSupplier({suppliers}:Array<String>){
    const {data, setData, post, errors, reset} = useForm({
        cnpj:'',
        fornecedor:''
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const localizaCNPJ: (cnpj:string) => void = (cnpj:string): void => {
        suppliers.map((s) => {
            if(s.cnpj === cnpj){
                setData("fornecedor", s.name)
            }
        })
    }

    return(
        <div className="bg-teal-950  justify-center my-4">
            <div className={"grid grid-cols-2 gap-4 w-full"}>
                <div>
                    <InputLabel htmlFor="cnpj" value="CNPJ do Fornecedor"/>
                    <TextInput
                        id="cnpj"
                        name="cnpj"
                        value={data.cnpj}
                        onChange={(e) => setData("cnpj", e.target.value)}
                        onBlur={(e) => localizaCNPJ(e.target.value)}
                        className="mt-1 mb-2 block w-full text-black"
                        autoComplete="cnpj"
                        isFocused={true}
                        required/>
                </div>
                <div>
                    <InputLabel htmlFor="fornecedor" value="Fornecedor"/>
                    <TextInput
                        id="fornecedor"
                        name="fornecedor"
                        value={data.fornecedor}
                        onChange={(e) => setData("fornecedor", e.target.value)}
                        className="mt-1 mb-2 block w-full text-black"
                        autoComplete="fornecedor"
                        isFocused={true}
                        required/>
                </div>
            </div>
        </div>


    )
}
