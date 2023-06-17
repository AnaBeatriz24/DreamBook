import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <div className="w-full justify-center sm:max-w-md mt-6 px-6 py-4 bg-teal-950 shadow-md overflow-hidden sm:rounded-lg">
                <div className="align-self-center justify-self-center">
                    <Link href="/">
                        <img src="/LogoSistema.png" className={"w-32 lg:w-64 self-center"} alt=""/>
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
