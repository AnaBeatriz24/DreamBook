import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function UpdateTitle({dataTitle={title:string}}){
    const { data, setData, post, processing, errors, reset } = useForm({
        title: dataTitle.title,
    });

    return(
        <div className="bg-teal-950 justify-center my-4">
            <InputLabel htmlFor="title" value="Título" />
            <TextInput
                id="title"
                name="title"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                className="block w-full text-black"
                autoComplete="title"
                isFocused={true}
                required/>
        </div>
    )
}
