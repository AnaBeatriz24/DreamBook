import ButtonHome from "@/Components/ButtonHome";
import {Link} from "@inertiajs/react";


const colunas = (profile) => {
    if (profile === 1){
        return "lg:grid lg:grid-cols-3 lg:place-items-center"
    } else if (profile === 2){
        return "lg:grid lg:grid-cols-2 lg:place-items-center"
    } else if (profile === 3){
        return "lg:grid lg:grid-cols-3 lg:place-items-center"
    } else if (profile === 4){
        return "lg:grid lg:grid-cols-2 lg:place-items-center"
    }
}

const buttons = (profile) => {
    if(profile === 1){
        return <>
            <Link href={route("company.create")}>
                <ButtonHome opt="addEmpresa" />
            </Link>
            <Link href={route("user.createAdm")}>
                <ButtonHome opt="addAdminEmpresa" />
            </Link>
            <Link href={route("manager.create")}>
                <ButtonHome opt="addGerente" />
            </Link>
            <Link href={route("company.index")} >
                <ButtonHome opt="empresas" />
            </Link>
            <Link href={route("manager.view")}>
                <ButtonHome opt="gerentes" />
            </Link>
        </>

    } else if(profile === 2){
        return <>
            <Link href={route("company.create")} >
                <ButtonHome opt="addEmpresa" />
            </Link>
            <Link href={route("user.createAdm")} >
                <ButtonHome opt="addAdminEmpresa" />
            </Link>
            <Link href={route("company.index")} >
                <ButtonHome opt="empresas" />
            </Link>
        </>

    } else if(profile === 3){
        return <>
            <Link href={route("dashboard")} >
                <ButtonHome opt="dashboards" />
            </Link>
            <Link href={route("dashboard.create")} >
                <ButtonHome opt="addDashboard" />
            </Link>
            <Link href={route("user.createUser")}>
                <ButtonHome opt="addUser" />
            </Link>
            <Link href={route("user.view")}>
                <ButtonHome opt="usuarios" />
            </Link>
            {/*<Link href={route("production.create")}>*/}
            {/*    <ButtonHome opt="addProdutividade" />*/}
            {/*</Link>*/}
            {/*<Link href={route("production.view")}>*/}
            {/*    <ButtonHome opt="viewProduction" />*/}
            {/*</Link>*/}
        </>

    } else if(profile === 4){
        return <>
            <Link href={route("dashboard")} >
                <ButtonHome opt="dashboards" />
            </Link>
            <Link href={route("dashboard.create")} >
                <ButtonHome opt="addDashboard" />
            </Link>
        </>
    }
}

export default function GridHome(props){

    return (
        <div className={`${colunas(props.props)} lg:gap-y-20  sm:grid sm:grid-cols-1 sm:gap-y-10 sm:items-center sm:mt-4`}>
            {buttons(props.props)}
        </div>
    )

}
