import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-amber-600 text-white  focus:border-indigo-700 '
                    : 'border-transparent text-white  hover:text-amber-600 hover:text-amber-600 focus:text-amber-600 focus:text-amber-600 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
