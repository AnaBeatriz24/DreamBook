import { Link } from '@inertiajs/react';

const icon =
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white ">
        <path  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" />
    </svg>


export default function BreadchumbSystem(props) {
    let ListSize = props.rota.length

    return (
        <>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3 ">
                    <li className="inline-flex items-center">
                        <Link href={route("book.search")} className='text-white text-lg hover:text-white inline-flex items-center transition duration-300 ease-out font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fafafa"
                                 className="w-4 h-4 m-2 fill-white hover:fill-amber-800 transition duration-300 ease-out">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                            </svg>
                            Home
                        </Link>
                    </li>
                    {props.rota.map((item, index) => {

                        if (ListSize == (index+1)) {
                            return <li aria-current="page">
                                <div className="flex items-center">
                                    {icon}
                                    <span className="text-white ml-1 md:ml-2 text-lg font-bold">{item.name}</span>
                                </div>
                            </li>

                        } else {
                            return <li>
                                <div className="flex items-center">
                                    {icon}
                                    <Link href={route(item.route)} className="text-white hover:text-white ml-1 md:ml-2 text-lg transition duration-300 ease-out font-bold">
                                        {item.name}
                                    </Link>
                                </div>
                            </li>
                        }
                    })}
                </ol>
            </nav>
        </>
    );
}
