import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import BreadchumbSystem from "@/Components/BreadchumbSystem";
import Pagination from "@/Components/Pagination";
import TableUsers from "@/Components/TableUsers";
import BarGroupViewUsers from "@/Components/BarGroupViewUsers";
import {FormEventHandler, useState} from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";
import RadioButton from "@/Components/RadioButton";

export default function ShowUsers({ auth }: PageProps) {
    let {users, statusBar} = usePage().props;
    let actions = ():[string[], string[], string[], string[]] => {
        return auth.user.profiles_id === 1
        ? [["Nome", "Função"], ["user.showAll", "user.showSellers", "user.showAttendants", "user.showBuyers", "user.showCustomers", "user.showInactives"],
                ["Todos os Usuários", "Vendedores", "Caixas", "Compradores", "Clientes", "Desativados"], ['Histórico', (window.location.pathname.includes("showInactives")) ? 'Ativar' : 'Desativar']]
            : [["Nome", "E-mail"], ["user.showCustomers"], ["Clientes"], ["Histórico"]]
    }

    let tabela = {
        header: actions()[0],
        data:users,
        actions: actions()[3],
    }

    const rotas = [
        {
            'name': 'Ver Usuários',
            'route': 'user.showAll',
        }
    ]

    const { data, setData, post, processing, errors } = useForm({
        value: '', type: "", profiles: 0
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('user.search'));
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Visualizar Usuários</h2>}
        >
            <Head title="Visualizar Usuários" />

            <div className={"mt-8 ml-20"}>
                <BreadchumbSystem rota={rotas} />
            </div>

            <div className={"flex justify-center mt-12 mb-12"}>
                <div className={"p-12 bg-teal-950 text-white w-4/6 sm:rounded-lg "}>

                    <form>
                        <div>
                            <InputLabel htmlFor="user" className={"text-white"} value="Pesquisar usuário por:" />
                            <div className={"w-full grid grid-cols-3 gap-2"}>
                                <RadioButton name="searchUser" onClick={() => {setData("type", "name")
                                }}> Nome </RadioButton>
                                <RadioButton name="searchUser" onClick={() => {setData("type", "email")
                                }}> E-mail </RadioButton>
                                <RadioButton name="searchUser" onClick={() => {setData("type", "profile")
                                }} disabled={((statusBar > 1) && (statusBar < 6))} className={((statusBar > 1) && (statusBar < 6)) ? "opacity-50" : ""}> Função </RadioButton>
                            </div>
                            {(data.type === "profile") ? <>
                                <RadioButton name="profiles" onClick={() => {
                                    setData("profiles", 2)}}> Vendedores </RadioButton>
                                <RadioButton name="profiles" onClick={() => {
                                    setData("profiles", 3)}}> Caixas </RadioButton>
                                <RadioButton name="profiles" onClick={() => {
                                    setData("profiles", 4)}}> Compradores </RadioButton>
                                <RadioButton name="profiles" onClick={() => {
                                    setData("profiles", 5)}}> Clientes </RadioButton>
                            </> : (data.type === "") ? <></> : <TextInput
                                id="value"
                                type="text"
                                name="value"
                                value={data.value}
                                className="mt-1 block w-full text-black"
                                isFocused={true}
                                onChange={onHandleChange} />
                            }
                        </div>

                        <div className="w-full flex justify-center mt-6">
                            <SecondaryButton type={'button'} onClick={submit} className="ml-4" disabled={data.type === ""}>
                                Pesquisar
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>

            <BarGroupViewUsers routes={actions()[1]} status={statusBar} title={actions()[2]}/>

            {users.data.length === 0
                ? <p className={"text-zinc-600 text-center mt-24 text-3xl font-bold"}>{`Não há usuários cadastrados`}</p>
                : <TableUsers props={tabela}></TableUsers>}

            <div className={'fixed bottom-0 left-0 right-0 mb-4'}>
                {users.last_page !== 1 ? <Pagination registries={users} /> : <></>}
            </div>


        </AuthenticatedLayout>
    );
}
