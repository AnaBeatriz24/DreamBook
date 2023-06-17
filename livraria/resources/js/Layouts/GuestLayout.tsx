import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-teal-900">

            <div className="w-full content-center flex flex-col sm:max-w-md mt-6 px-6 py-4 bg-teal-950 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
