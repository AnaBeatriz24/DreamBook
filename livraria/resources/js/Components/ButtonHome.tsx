import {ReactElement} from "react";




export default function ButtonHome(opt:{opt:string}){

    const listImages: {[key:string]: ReactElement} = {
        "addUser": <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                 className="w-72 h-20 m-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"/>
            </svg>
        </>,
        "viewUser": <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                 className="w-72 h-20 m-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
            </svg>
        </>,
        "addBook": <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 h-20 m-4">
                <path d="M10 7.29201C8.35161 5.81337 6.2144 4.99695 4 5.00001C2.948 5.00001 1.938 5.18001 1 5.51201V19.762C1.96362 19.422 2.97816 19.2489 4 19.25C6.305 19.25 8.408 20.117 10 21.542M10 7.29201C11.6483 5.81328 13.7856 4.99686 16 5.00001C17.052 5.00001 18.062 5.18001 19 5.51201V19.762C18.0364 19.422 17.0218 19.2489 16 19.25C13.7856 19.247 11.6484 20.0634 10 21.542M10 7.29201V21.542" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 3C23 3.0442 22.9824 3.0866 22.9512 3.11785C22.9199 3.14911 22.8775 3.16667 22.8333 3.16667H21.1667V4.83333C21.1667 4.87754 21.1491 4.91993 21.1179 4.95118C21.0866 4.98244 21.0442 5 21 5C20.9558 5 20.9134 4.98244 20.8821 4.95118C20.8509 4.91993 20.8333 4.87754 20.8333 4.83333V3.16667H19.1667C19.1225 3.16667 19.0801 3.14911 19.0488 3.11785C19.0176 3.0866 19 3.0442 19 3C19 2.9558 19.0176 2.91341 19.0488 2.88215C19.0801 2.85089 19.1225 2.83333 19.1667 2.83333H20.8333V1.16667C20.8333 1.12246 20.8509 1.08007 20.8821 1.04882C20.9134 1.01756 20.9558 1 21 1C21.0442 1 21.0866 1.01756 21.1179 1.04882C21.1491 1.08007 21.1667 1.12246 21.1667 1.16667V2.83333H22.8333C22.8775 2.83333 22.9199 2.85089 22.9512 2.88215C22.9824 2.91341 23 2.9558 23 3Z" stroke="white"/>
            </svg>

        </>,
        "searchBook": <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-72 h-20 m-4 " >
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
            </svg>
        </>,

        "addCoupon": <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                 className="w-72 h-20 m-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

        </>,
        "viewCoupon": <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                 className="w-72 h-20 m-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
            </svg>

        </>,
        "myHistory": <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                 className="w-72 h-20 m-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"/>
            </svg>
        </>,
        "openSales": <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                 className="w-72 h-20 m-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
        </>,
        "viewBooks": <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-72 h-20 m-4 " >
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
            </svg>
        </>,
        "viewGenders": <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                 className="w-72 h-20 m-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"/>
            </svg>
        </>
    }

    const listText: { [key: string]: string } = {
        "addUser": "Adicionar Usuários",
        "viewUser": "Visualizar Usuários",
        "addBook": "Adicionar Compra de Livros",
        "searchBook": "Pesquisar Livros",
        "addCoupon": "Adicionar Cupons",
        "viewCoupon": "Cupons Disponíveis",
        "myHistory": "Meu Histórico",
        "openSales": "Pedidos Abertos",
        "viewBooks":"Livros Cadastrados",
        "viewGenders":"Genêros Textuais",
    }

    return(
        <div className=" m-4 w-72 h-40 bg-amber-900 rounded-[25px] text-zinc-50  hover:text-zinc-400 sm:place-items-center  mx-auto">
            <div className=" flex items-stretch ">
                {listImages[opt.opt]}
            </div>
            <span className={"text-center font-bold text-md"}>
                <h1>{listText[opt.opt]}</h1>
            </span>
        </div>
    )
}
