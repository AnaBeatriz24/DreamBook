import {Link, useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import {FormEventHandler, useState} from "react";
import {log} from "util";

const header = (item:string) => {
    return <div className="px-2 py-3 font-black text-black text-sm">
        {item}
    </div>
}

const dataText = (itens:object) => {
    return Object.values(itens).map((item, index) => {
        return index === 0 ?
            null :
            <div className="px-2 py-3 break-all font-black text-white text-sm rounded">
                {item}
            </div>
    })
}

export default function TableGenders(props){

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
    });

    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const confirmGenderEdit = () => {
        setConfirmingUserDeletion(true);
    };

    const editGender: FormEventHandler = (e) => {
        e.preventDefault();

        alert('AAAA')

        post('gender.edit', [e.target.value]);
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    let head = props.props.header;
    let body = props.props.data.data;

    const dataAction = (item:string, id:number) => {
        switch (item) {
            case 'Editar':
                return (
                    <>
                        <button onClick={confirmGenderEdit} className="inline-flex items-center px-4 py-2 bg-amber-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-800 focus:outline-none focus:ring-offset-2 transition ease-in-out duration-150 " >{item}</button>

                        <Modal show={confirmingUserDeletion} onClose={closeModal}>
                            <form onSubmit={editGender} className="p-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Tem certeza de que deseja editar gênero?
                                </h2>
                                <div className="mt-6">
                                    <InputLabel htmlFor="name" value="Editar gênero" className="sr-only" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="mt-1 block w-3/4"
                                        isFocused={true}
                                        placeholder={"Alguém me mata plmds"}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>

                                    <button value={id} className={'inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md text-xs text-white uppercase tracking-widest hover:bg-red-500  transition ease-in-out duration-150 font-medium deleteButton'} onClick={editGender}>Editar gênero</button>
                                </div>
                            </form>
                        </Modal>
                    </>
                )
        }
    }

    const buttons = (data) => {
        let button = []
        props.props.actions.map(action => {
            button.push(dataAction(action, data.id))
        })
        return button
    }

    return <>

        <div className="grid grid-flow-col grid-cols-4 gap-4 w-3/4 mx-auto">
            { head.map(item => {
                return header(item)
            })
            }
            <div className="px-6 py-3">
            </div>
        </div>

        {
            body.map(data => {
                return <div className="mx-auto bg-teal-900 rounded-lg w-[90vw] grid grid-cols-4 text-center items-center mb-2">
                    {dataText(data)}
                    <OptionsTable buttons={buttons(data)} data={data} />
                </div>
            })
        }
    </>
}
