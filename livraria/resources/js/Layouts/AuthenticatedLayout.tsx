import {useState, PropsWithChildren, ReactNode} from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import Cart from "@/Logos/Cart";
import Profile from "@/Logos/Profile";

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    // @ts-ignore
    let namesRoutes = () :string[][] => {
        // @ts-ignore
        switch(user.profiles_id) {
            case 1:
                return [["Home", "home"], ["Adicionar Usuário", "user.create"], ["Visualizar Usuários", "user.showAll"], ["Adicionar Compra", "book.create"], ["Pesquisar Livros", "book.search"],
                    ["Adicionar Cupons", "coupon.create"],
                    ["Cupons Disponíveis", "coupon.showActive"],];
            case 2:
                return [["Home", "home"], ["Adicionar Usuário", "user.create"], ["Visualizar Usuários", "user.showAll"], ["Pesquisar Livros", "book.search"], ["Meu Histórico", "sales.history"]];
            case 3:
                return [["Home", "home"], ["Adicionar Usuário", "user.create"], ["Visualizar Usuários", "user.showAll"], ["Pesquisar Livros", "book.search"], ["Meu Histórico", "sales.history"], ["Pedidos Abertos", "sales.open"]];
            case 4:
                return [["Home", "home"], ["Adicionar Compra", "book.create"], ["Pesquisar Livros", "book.search"],];
            case 5:
                return [["Home", "home"], ["Pesquisar Livros", "book.search"], ["Meu Histórico", "sales.history"], ["Entre em Contato", "contact.show"], ["Sobre nós", "team.index"]];
        }};

    return (
        <div className="min-h-screen bg-teal-900">
            <nav className="bg-teal-950 border-b border-teal-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 ">
                        <div className="flex">
                            <div className="shrink-0 flex items-center ">
                                <Link href="/">
                                    <img src="/LogoSistema.png" className={"w-16 lg:w-16 flex flex-col"} alt=""/>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex ">
                                {
                                    namesRoutes().map((value) => {
                                        return <NavLink href={route(value[1])} active={route().current(value[1])}>
                                            {value[0]}
                                        </NavLink>
                                    })
                                }
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative sm:items-center">
                                <div className={"flex space-x-8 sm:items-center"}>
                                    <Link href={route('cart')}>
                                        <Cart/>
                                    </Link>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center focus:text-amber-600 hover:text-amber-600 px-3 py-2 border  text-sm leading-4 font-medium rounded-md text-white hover:text-white focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                                </div>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('home')} active={route().current('home')}>
                            Home
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base ">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-teal-950 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-white">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
