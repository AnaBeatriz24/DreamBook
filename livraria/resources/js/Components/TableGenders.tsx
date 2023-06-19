import ComponentDelete from "@/Components/ComponentDelete";
import {Link, useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";

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
    let head = props.props.header;
    let body = props.props.data.data;

    const dataAction = (item:string, id:number) => {
        console.log(id)
        switch (item) {
            case 'Editar':
                return (
                    <Link href={route('sales.history', [id])} className="inline-flex items-center px-4 py-2 bg-amber-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-800 focus:outline-none focus:ring-offset-2 transition ease-in-out duration-150 " type={"submit"}>{item}</Link>
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
