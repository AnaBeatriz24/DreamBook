export default function ButtonStatusBarGroup({status, routes, title}) {
    return (
        <div className="flex items-center justify-center">
            <div className="inline-flex" role="group">
                <a href={route(routes[0])}>
                    <button
                        className={`${ status === 1 ? " border-y-2 border-y-teal-900" : ""} flex items-center gap-2 rounded-l hover:border-y-teal-900
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out`}
                        disabled={status === 1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 fill-teal-800 hover:fill-teal-900">
                            <path fillRule="evenodd"
                                  d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                  clipRule="evenodd"/>
                            <path
                                d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"/>
                        </svg>
                        {title[0]}
                    </button>
                </a>
                <a href={route(routes[1])}>
                    <button
                        className={`${ status === 2 ? "border-y-2 border-y-teal-900" : ""} hover:border-y-teal-900 flex items-center gap-2
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out`}
                        disabled={status === 2}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.873 6.7184C17.9295 5.74715 15.3495 5.2334 12.4124 5.2334C9.47517 5.2334 6.89517 5.74715 4.95173 6.7184C3.00829 7.68965 1.91235 9.05652 1.91235 10.4834V14.9834C1.91235 16.4103 3.02048 17.7818 4.95173 18.7484C6.88298 19.715 9.47517 20.2334 12.4124 20.2334C15.3495 20.2334 17.9295 19.7196 19.873 18.7484C21.8164 17.7771 22.9124 16.4103 22.9124 14.9834V10.4834C22.9124 9.05652 21.8042 7.68496 19.873 6.7184ZM11.6624 15.7184V18.7184C9.8811 18.6603 8.3811 18.3978 7.16235 18.0162V15.0818C8.63154 15.4733 10.1423 15.6876 11.6624 15.7203V15.7184ZM13.1624 15.7184C14.6824 15.6857 16.1932 15.4714 17.6624 15.08V18.0153C16.4436 18.3968 14.9436 18.6593 13.1624 18.7175V15.7184ZM3.41235 14.9834V13.2518C3.88434 13.6436 4.40107 13.9781 4.95173 14.2484C5.17954 14.3618 5.42048 14.4687 5.66235 14.57V17.4209C4.17829 16.6859 3.41235 15.7606 3.41235 14.9834ZM19.1624 17.4209V14.57C19.407 14.4687 19.6452 14.3618 19.873 14.2484C20.4236 13.9781 20.9404 13.6436 21.4124 13.2518V14.9834C21.4124 15.7606 20.6464 16.6859 19.1624 17.4209Z" fill="#115E59"/>
                        </svg>
                        {title[1]}
                    </button>
                </a>
                <a href={route(routes[2])}>
                    <button
                        className={`${ status === 3 ? "border-y-2 border-y-teal-900" : ""} hover:border-y-teal-900 flex items-center gap-2
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out`}
                        disabled={status === 3}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 fill-teal-800 hover:fill-teal-900">
                            <path
                                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"/>
                            <path fillRule="evenodd"
                                  d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                                  clipRule="evenodd"/>
                        </svg>
                        {title[2]}
                    </button>
                </a>
                <a href={route(routes[3])}>
                    <button
                        className={`${ status === 4 ? "border-y-2 border-y-teal-900" : ""} hover:border-y-teal-900 flex items-center gap-2
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out`}
                        disabled={status === 4}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 fill-teal-800 hover:fill-teal-900">
                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"/>
                            <path fillRule="evenodd"
                                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                  clipRule="evenodd"/>
                            <path
                                d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"/>
                        </svg>

                        {title[3]}
                    </button>
                </a>
                <a href={route(routes[4])}>
                    <button
                        className={`${ status === 5 ? "border-y-2 border-y-teal-900" : ""} rounded-r hover:border-y-teal-900 flex items-center gap-2
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out`}
                        disabled={status === 5}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 fill-teal-800 hover:fill-teal-900">
                            <path fillRule="evenodd"
                                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                  clipRule="evenodd"/>
                        </svg>
                        {title[4]}
                    </button>
                </a>

            </div>
        </div>
    );
}
