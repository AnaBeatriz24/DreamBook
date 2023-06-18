import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Cart from '@/Logos/Cart'
import Profile from "@/Logos/Profile";
import Dropdown from "@/Components/Dropdown";

export default function WelcomeNavBar({ routes, header, children, genders }: PropsWithChildren<{ header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-teal-900">
            <nav className="bg-teal-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-white" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                {
                                    routes.map(
                                        (rout) => {
                                            return <NavLink className={"text-white hover:text-gray-300"} href={route(rout.route)} active={route().current(rout.route)}>
                                                {rout.name}
                                            </NavLink>
                                        }
                                    )
                                }
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <div className={"flex space-x-8"}>
                                    <Link href={route('cart')}>
                                        <Cart/>
                                    </Link>
                                    <Link href={route('login')}>
                                        <Profile/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-400 transition duration-150 ease-in-out"
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
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                user.name
                            </div>
                            <div className="font-medium text-sm text-gray-500">user.email</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('cart')}>
                                <Cart/>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route('login')}>
                                <Profile/>
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="bg-teal-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Dropdown >
                        <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-lg leading-4 font-medium rounded-md text-white bg-teal-600 hover:text-gray-300 focus:outline-none transition ease-in-out duration-150">
                            Explore por Gêneros
                            <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                            </svg>
                        </button>
                    </span>
                        </Dropdown.Trigger>
                        <Dropdown.Content align={'left'} width={'96'} contentClasses={'lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 py-1 rounded-lg bg-teal-600'}>
                            {genders.map((gender) => {
                                // TODO: Selecionar a rota que renderiza os livros por meio de uma consulta, de acordo com o genero_id
                                return <Dropdown.Link className={"lg:flex lg:flex-row bg-teal-600 hover:bg-teal-700 text-white font-bold"} href={route('home')}>{gender.name}</Dropdown.Link>
                            }) }
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
