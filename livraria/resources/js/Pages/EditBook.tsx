import {Head, useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import Breadchumb from "@/Components/BreadchumbSystem";
import SecondaryButton from "@/Components/SecondaryButton";

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
        quantidade_stocks: stocks.quantidade,
        valor_entrada: stocks.valor_entrada,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault()
        post(route("store.editBook", [data.isbn]));
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
                    value={data.id_manager}
                    className="mt-1 block w-screen"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="mt-4 flex gap-4 justify-center">
                    <div className="flex flex-col">
                        <div className="mt-4">
                            <InputLabel forInput="name_manager" value="Nome do gerente" />
                            <TextInput
                                id="name_manager"
                                type="text"
                                name="name_manager"
                                value={data.name_manager}
                                className="mt-1 block w-screen"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.name_manager} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="email" value="E-mail de confirmação do gerente" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-screen"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                    </div>
                </div>

                <div className="mt-28 flex gap-4 justify-around">
                    <Link href={route('manager.view')}>
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
