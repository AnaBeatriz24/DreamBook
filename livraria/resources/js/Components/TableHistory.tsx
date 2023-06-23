import {useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";

export default function TableHistory(props) {
    const header = (item) => {
        return <div className="px-8 py-3 font-medium font-black text-white text-sm">
            {item}
        </div>
    }

    console.log(window.location.origin)

    const dataText = (items) => {
        return Object.values(items).map((item, index: Number) => {
            return index === 0
                ? null
                : index === 1
                    ? <div className="px-2 py-3 w-full flex justify-center">
                        <img src={`${window.location.origin}/storage/app/public/${item}`} alt={`${item}`}/>
                    </div>
                    : <div className="px-2 py-3 break-words font-medium font-medium text-white text-sm rounded">
                        {item}
                    </div>
        })
    }
    let head = props.props.header;
    let body = props.props.data.data;

    const {data, post} = useForm({
        idLivro: null
    })

    const submit = (e) => {
        e.preventDefault();
        data.idLivro = e.target.value;
        alert("Livro adicionado ao carrinho")
        post(route("cart.store"));
    }

    const dataAction = (item, id) => {
        switch (item) {
            case 'Comprar de novo':
                return (
                    <button onClick={submit} value={id} className="inline-flex items-center py-2 px-2 bg-amber-900 rounded-md font-medium text-xs text-white tracking-widest hover:bg-amber-950 active:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 border border-amber-950 break-words" type={"submit"}>{item}</button>
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
        <div className="grid grid-flow-col grid-cols-7 justify-evenly text-center">
            {
                head.map(
                    item => {
                        return header(item)
                    })
            }
        </div>

        {
            body.map(data => {
                return <div className="mx-auto bg-teal-950 rounded-lg w-[90vw] grid grid-cols-7 text-white text-center items-center mb-2">
                    {dataText(data)}
                    <OptionsTable buttons={buttons(data)} data={data} />
                </div>
            })
        }
    </>
}
