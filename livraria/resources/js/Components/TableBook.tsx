import ComponentDelete from "@/Components/ComponentDelete";
import {Link, useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";

const header = (item:string) => {
    return <div className="px-2 py-3 font-medium font-black text-white text-sm">
        {item}
    </div>
}

const dataText = (itens:object) => {
    return Object.values(itens).map((item, index) => {
        return index === 0 ?
            null :
            <div className="px-2 py-3 break-all font-medium font-black text-white text-sm rounded">
                {item}
            </div>
    })
}

export default function TableBook(props){
    let head = props.props.header;
    let body = props.props.data.data;


    const dataAction = (item:string, id:number) => {
        switch (item) {
            case 'Editar':
                return (
                    <Link href={route('books.edit', [id])} className="m-2 inline-flex items-center px-4 py-2 bg-amber-900 rounded-md font-semibold text-xs text-white tracking-widest hover:bg-amber-950 active:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 text-white text-sm rounded border border-amber-950 transition" >{item}</Link>
                )
            case 'Desativar':
                return (
                    <button onClick={submit} value={id} className="m-2 inline-flex items-center px-4 py-2 bg-amber-900 rounded-md font-semibold text-xs text-white tracking-widest hover:bg-amber-950 active:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 text-white text-sm rounded border border-amber-950 transition" type={"submit"}>{item}</button>
                )
            case 'Ativar':
                return (
                    <button onClick={submit} value={id} className="m-2 inline-flex items-center px-4 py-2 bg-amber-900 rounded-md font-semibold text-xs text-white tracking-widest hover:bg-amber-950 active:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 text-white text-sm rounded border border-amber-950 transition" type={"submit"}>{item}</button>
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

    const {post} = useForm();
    const submit = (e) => {
        post(route("book.editStatus", [e.target.value]))
    }

    console.log(body)
    return <>

        <div className="grid grid-flow-col grid-cols-4 gap-4 lg:w-3/4 md:w-3/4 lg:ml-40 ml-20 p-mx-auto">
            { head.map(item => {
                return header(item)
            })
            }
            <div className="px-6 py-3">
            </div>
        </div>

        {
            body.map(data => {
                return <div className="mx-auto bg-teal-950 rounded-lg w-[90vw] grid grid-cols-5 text-center items-center mb-2">
                    {dataText(data)}
                    <OptionsTable buttons={buttons(data)} data={data} />
                </div>
            })
        }
    </>
}
