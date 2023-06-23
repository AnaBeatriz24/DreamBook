import {Head, Link, useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import Breadchumb from "@/Components/BreadchumbSystem";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

const rotas = [
    {
        'name': 'Ver Compras',
        'route': 'book.showActive',
    },
    {
        'name': 'Editar Livro',
        'route': 'books.edit',
    },
]
export default function EditBook({ auth }: PageProps){
    const {book}=usePage().props
    const {stocks}=usePage().props

    console.log(book)

    const { data, setData, post, processing, errors } = useForm({
        id_book: book.id,
        titulo_book: book.titulo,
        descricao: book.descricao,
        isbn_book: book.isbn,
        imgcapa_books: book.imgcapa,
        editora_book: book.editora,
        autor_book: book.autor,
        genero_book: book.genero,
        // quantidade_stocks: stocks.quantidade,
        // valor_entrada: stocks.valor_entrada,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault()
        post(route("store.editBook", [data.id_book]));
    };

    return<>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Livro</h2>}>
            <Head title="Editar Livro" />

            <div className={"mt-8 ml-20"}>
                <Breadchumb rota={rotas} />
            </div>

            <form onSubmit={submit} method={'post'}>

                <TextInput
                    id="id_book"
                    type="id_book"
                    name="id_book"
                    value={data.id_book}
                    className="mt-1 block w-screen"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="mt-4 flex gap-4 justify-center">
                    <div className="flex flex-col">
                        <div className="mt-4">
                            <InputLabel forInput="titulo_book" value="Título" />
                            <TextInput
                                id="titulo_book"
                                type="text"
                                name="titulo_book"
                                value={data.titulo_book}
                                className="mt-1 block w-screen"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.titulo_book} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="descricao" value="E-mail de confirmação do gerente" />
                            <TextInput
                                id="descricao"
                                type="descricao"
                                name="descricao"
                                value={data.descricao}
                                className="mt-1 block w-screen"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.descricao} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="isbn_book" value="E-mail de confirmação do gerente" />
                            <TextInput
                                id="isbn_book"
                                type="isbn_book"
                                name="isbn_book"
                                value={data.isbn_book}
                                className="mt-1 block w-screen"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.isbn_book} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="editora_book" value="E-mail de confirmação do gerente" />
                            <TextInput
                                id="editora_book"
                                type="editora_book"
                                name="editora_book"
                                value={data.editora_book}
                                className="mt-1 block w-screen"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.editora_book} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="autor_book" value="E-mail de confirmação do gerente" />
                            <TextInput
                                id="autor_book"
                                type="autor_book"
                                name="autor_book"
                                value={data.autor_book}
                                className="mt-1 block w-screen"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>
                            <InputError message={errors.autor_book} className="mt-2" />

                        <div className="mt-4">
                            <InputLabel forInput="genero_book" value="E-mail de confirmação do gerente" />
                            <TextInput
                                id="genero_book"
                                type="genero_bookgenero_book"
                                name="genero_book"
                                value={data.genero_book}
                                className="mt-1 block w-screen"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.genero_book} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="quantidade_stocks" value="E-mail de confirmação do gerente" />
                            <TextInput
                                id="quantidade_stocks"
                                type="quantidade_stocks"
                                name="quantidade_stocks"
                                value={data.quantidade_stocks}
                                className="mt-1 block w-screen"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.quantidade_stocks} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="valor_entrada" value="E-mail de confirmação do gerente" />
                            <TextInput
                                id="valor_entrada"
                                type="valor_entrada"
                                name="valor_entrada"
                                value={data.valor_entrada}
                                className="mt-1 block w-screen"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.valor_entrada} className="mt-2" />
                        </div>
                    </div>
                </div>

                <div className="mt-28 flex gap-4 justify-around">
                    <Link href={route('book.showActive')}>
                        <SecondaryButton className="ml-4 bg-[#ef4444] hover:bg-red-700" processing={processing} type={"button"}>
                            Cancelar
                        </SecondaryButton>
                    </Link>
                    <SecondaryButton className="bg-green-500 ml-4 hover:bg-green-700" processing={processing} type={'submit'}>
                        Editar informações
                    </SecondaryButton>
                </div>
            </form>


        </AuthenticatedLayout>
    </>

}
