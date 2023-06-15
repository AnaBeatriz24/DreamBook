import ComponentDelete from "@/Components/ComponentDelete";
import {Link, useForm} from "@inertiajs/react";
import OptionsTable from "@/Components/OptionsTable";

const header = (item) => {
    return <div className="px-2 py-3 font-medium font-black text-black text-sm">
        {item}
    </div>
}

const dataText = (itens) => {
    return Object.values(itens).map((item, index) => {
        return index === 0 ?
            null :
            <div className="px-2 py-3 break-all font-medium font-black text-white text-sm rounded">
                {item}
            </div>
    })
}

export default function TableUsers(props){
    let head = props.props.header;
    let body = props.props.data.data;

    const {post} = useForm();

    const submit = (e) => {
        post(route("user.editActives", [e.target.value]))
    }

    const dataAction = (item, id) => {
        switch (item) {
            case 'Histórico':
                return (
                    <Link href={route('user.show', [id])} className="inline-flex items-center px-4 py-2 bg-amber-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-800 active:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition ease-in-out duration-150 border-zinc-600" type={"submit"}>{item}</Link>
                )
            case 'Excluir':
                const deleteComponentData = {
                    routePost: "user.destroy",
                    item: "usuário",
                    id: id
                }
                return (
                    <ComponentDelete routePost={deleteComponentData.routePost} item={deleteComponentData.item} id={deleteComponentData.id}/>
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
