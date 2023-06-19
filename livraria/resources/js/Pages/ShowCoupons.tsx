import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import TableAvailableCupons from "@/Components/TableAvailableCupons";
import ButtonStatusBarGroup from "@/Components/ButtonStatusBarGroup";
import Pagination from "@/Components/Pagination";
import BreadchumbSystem from "@/Components/BreadchumbSystem";

export default function ShowCoupons({ auth }: PageProps, ) {

    let {coupons, statusBar} = usePage().props;


    let header=["Nome", "Valor do desconto", "Status", "Ações", ""];
    let routes = ["coupon.showActive", "coupon.showInactive"]
    let title = ["Ativos", "Desativados"]

    let buttonText = () => {
        if (statusBar === 0) {
            return ['Ativar']
        } else {
            return ['Desativar']
        }
    }

    let table = {
        header: header,
        data:coupons,
        actions: buttonText(),
    }

    const ativosInativos = (): string => {
        return statusBar === 1
            ? "ativos"
            : "desativados"
    }

    const rotas:object = [
        {
            'name': 'Ver Cupons',
            'route': 'coupon.showActive',
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cupons disponíveis</h2>}
        >
            <Head title="Cupons disponíveis" />

            <div className="mt-8 ml-20">
                <BreadchumbSystem rota={rotas}/>
            </div>

            <ButtonStatusBarGroup routes={routes} status={statusBar} title={title}/>

            {coupons.data.length === 0
                ? <p className={"text-zinc-600 text-center mt-24 text-3xl font-bold"}>{`Não há cupons ${ativosInativos()}`}</p>
                : <TableAvailableCupons props={table} statusBar={statusBar}></TableAvailableCupons>}

            <div className={'fixed bottom-0 left-0 right-0 mb-4'}>
                {coupons.last_page !== 1 ? <Pagination registries={coupons} /> : <></>}
            </div>
        </AuthenticatedLayout>
    );
}
