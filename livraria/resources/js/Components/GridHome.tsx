import ButtonHome from "@/Components/ButtonHome";
import {Link} from "@inertiajs/react";

const colunas = (profile:number) => {
    if (profile === 1){
        return "lg:grid lg:grid-cols-3 lg:place-items-center"
    } else if (profile === 2){
        return "lg:grid lg:grid-cols-2 lg:place-items-center"
    } else if (profile === 3){
        return "lg:grid lg:grid-cols-3 lg:place-items-center"
    } else if (profile === 4){
        return "lg:grid lg:grid-cols-2 lg:place-items-center"
    } else if (profile === 5){
        return "lg:grid lg:grid-cols-2 lg:place-items-center"
    }
}

const buttons = (profile:number) => {
    if(profile === 1){
        return <>
            <Link href={route("user.create")}>
                <ButtonHome opt="addUser" />
            </Link>
            <Link href={route("book.create")}>
                <ButtonHome opt="addBook" />
            </Link>
            <Link href={route("coupon.create")}>
                <ButtonHome opt="addCoupon" />
            </Link>
            <Link href={route("user.show")} >
                <ButtonHome opt="viewUser" />
            </Link>
            <Link href={route("book.search")}>
                <ButtonHome opt="searchBook" />
            </Link>
            <Link href={route("coupon.show")}>
                <ButtonHome opt="viewCoupon" />
            </Link>
        </>

    } else if(profile === 2){
        return <>
            <Link href={route("user.create")}>
                <ButtonHome opt="addUser" />
            </Link>
            <Link href={route("user.show")} >
                <ButtonHome opt="viewUser" />
            </Link>
            <Link href={route("book.search")}>
                <ButtonHome opt="searchBook" />
            </Link>
            <Link href={route("sales.history")}>
                <ButtonHome opt="myHistory" />
            </Link>
        </>

    } else if(profile === 3){
        return <>
            <Link href={route("user.create")}>
                <ButtonHome opt="addUser" />
            </Link>
            <Link href={route("user.show")} >
                <ButtonHome opt="viewUser" />
            </Link>
            <Link href={route("book.search")}>
                <ButtonHome opt="searchBook" />
            </Link>
            <Link href={route("sales.history")}>
                <ButtonHome opt="myHistory" />
            </Link>
            <Link href={route("sales.open")}>
                <ButtonHome opt="openSales" />
            </Link>
            <Link href={route("sales.start")}>
                <ButtonHome opt="startSale" />
            </Link>
        </>

    } else if(profile === 4){
        return <>
            <Link href={route("book.create")}>
                <ButtonHome opt="addBook" />
            </Link>
            <Link href={route("book.search")}>
                <ButtonHome opt="searchBook" />
            </Link>
        </>
    } else if(profile === 5){
        return <>
            <Link href={route("book.search")}>
                <ButtonHome opt="searchBook" />
            </Link>
            <Link href={route("sales.history")}>
                <ButtonHome opt="myHistory" />
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
