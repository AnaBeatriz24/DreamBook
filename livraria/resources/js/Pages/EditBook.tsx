import {useForm, usePage} from "@inertiajs/react";

export default function EditBook(){
    const {book}=usePage().props
    console.log(book)

    const { data, setData, post, processing, errors } = useForm({
        id_book: book.id,
        title_book: book.title,
        autor_book: book.autor,
        email: book.email,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault()
        post(route("manager.storeEditManagers", [data.id_manager]));
    };

    return<>
    ok</>
}
