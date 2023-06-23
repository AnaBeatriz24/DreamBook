import {useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";

export default function TableHistory(props) {
    const header = (item) => {
        return <div className="px-8 py-3 font-medium font-black text-white text-sm">
            {item.toString()}
        </div>
    }

    const dataText = (items) => {
        return Object.values(items).map((item, index: Number) => {
            return index === 0 ?
                null :
                <div className="px-2 py-3 break-words font-medium font-medium text-white text-sm rounded">
                    {item}
                </div>
        })
    }
    let head = props.props.header;
    let body = props.props.data.data;

    const {post} = useForm();

    const submit = (e) => {
        post(route("coupons.editStatus", [e.target.value]))
    }

    const dataAction = (item, id) => {
        switch (item) {
            case 'Comprar de novo':
                return (
                    <button onClick={submit} value={id} className="inline-flex items-center px-4 py-2 bg-amber-900 rounded-md font-semibold text-xs text-white tracking-widest hover:bg-amber-950 active:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 text-white text-sm rounded border border-amber-950" type={"submit"}>{item}</button>
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
        <div className="grid grid-flow-col grid-cols-6 justify-evenly text-center">
            {
                head.map(
                    item => {
                        return header(item)
                    })
            }
        </div>

        {
            body.map(data => {
                return <div className="mx-auto bg-teal-950 rounded-lg w-[90vw] grid grid-cols-6 text-white text-center items-center mb-2">
                    {dataText(data)}
                    <OptionsTable buttons={buttons(data)} data={data} />
                </div>
            })
        }
    </>
}
