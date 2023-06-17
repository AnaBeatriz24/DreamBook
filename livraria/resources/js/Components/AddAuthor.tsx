import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function AddAuthor({authors}:Array<string>){
    const {data, setData, post, errors, reset} = useForm({
        autor:'',
    });


    return(
    <div className="bg-teal-950 justify-center my-4">
                <InputLabel htmlFor="autor" value="Autor" />
                <TextInput
                    id="autor"
                    name="autor"
                    value={data.autor}
                    onChange={(e) => setData("autor", e.target.value)}
                    className="block w-full text-black"
                    autoComplete="titulo"
                    isFocused={true}
                    required/>
    </div>

    )
}
