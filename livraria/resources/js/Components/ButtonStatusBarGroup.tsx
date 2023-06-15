export default function ButtonStatusBarGroup({status, routes, title}) {
    return (
        <div className="flex items-center justify-center">
            <div className="inline-flex" role="group">
                <a href={route(routes[0])}>
                    <button
                        className={`${ status === 1 ? " border-y-2 border-y-green-300" : ""} flex items-center gap-2 rounded-l hover:border-y-green-300
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out`}
                        disabled={status === 1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500 hover:fill-green-700">
                            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
                        </svg>
                        {title[0]}
                    </button>
                </a>
                <a href={route(routes[1])}>
                    <button
                        className={`${ status === 2 ? "border-y-2 border-y-zinc-300" : ""} hover:border-y-zinc-300
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out flex items-center gap-2`}
                        disabled={status === 2}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.625 6.58325H4.375C3.4085 6.58325 2.625 7.40406 2.625 8.41659V17.5833C2.625 18.5958 3.4085 19.4166 4.375 19.4166H16.625C17.5915 19.4166 18.375 18.5958 18.375 17.5833V8.41659C18.375 7.40406 17.5915 6.58325 16.625 6.58325Z" fill="#A1A1AA" stroke="#71717A" stroke-width="1.6" stroke-linecap="round"/>
                            <path d="M3.5 8.41655L8.925 12.679C9.85836 13.4123 11.1416 13.4123 12.075 12.679L17.5 8.4165" stroke="#71717A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.2875 2.28746C14.4281 2.14686 14.6188 2.06787 14.8177 2.06787C15.0166 2.06787 15.2073 2.14686 15.348 2.28746L18 4.93946L20.652 2.28746C20.7934 2.15084 20.9829 2.07525 21.1795 2.07696C21.3762 2.07866 21.5643 2.15754 21.7033 2.2966C21.8424 2.43565 21.9213 2.62376 21.923 2.82041C21.9247 3.01706 21.8491 3.20651 21.7125 3.34796L19.0605 5.99996L21.7125 8.65196C21.8491 8.79341 21.9247 8.98286 21.923 9.17951C21.9213 9.37616 21.8424 9.56427 21.7033 9.70332C21.5643 9.84238 21.3762 9.92126 21.1795 9.92297C20.9829 9.92468 20.7934 9.84908 20.652 9.71246L18 7.06046L15.348 9.71246C15.2065 9.84908 15.0171 9.92468 14.8204 9.92297C14.6238 9.92126 14.4357 9.84238 14.2966 9.70332C14.1575 9.56427 14.0787 9.37616 14.077 9.17951C14.0752 8.98286 14.1508 8.79341 14.2875 8.65196L16.9395 5.99996L14.2875 3.34796C14.1469 3.20732 14.0679 3.01658 14.0679 2.81771C14.0679 2.61884 14.1469 2.42811 14.2875 2.28746Z" fill="#EF4444"/>
                        </svg>
                        {title[1]}
                    </button>
                </a>
                <a href={route(routes[2])}>
                    <button
                        className={`${ status === 3 ? "border-y-2 border-y-red-300" : ""} rounded-r hover:border-y-red-300 flex items-center gap-2
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out`}
                        disabled={status === 3}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-red-500 hover:fill-red-700">
                            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                        {title[2]}
                    </button>
                </a>
                <a href={route(routes[2])}>
                    <button
                        className={`${ status === 3 ? "border-y-2 border-y-red-300" : ""} rounded-r hover:border-y-red-300 flex items-center gap-2
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out`}
                        disabled={status === 3}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-red-500 hover:fill-red-700">
                            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                        {title[2]}
                    </button>
                </a>
                <a href={route(routes[2])}>
                    <button
                        className={`${ status === 3 ? "border-y-2 border-y-red-300" : ""} rounded-r hover:border-y-red-300 flex items-center gap-2
                            px-6 py-2 my-4 transition hover:bg-zinc-200 duration-150 ease-in-out`}
                        disabled={status === 3}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-red-500 hover:fill-red-700">
                            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                        {title[2]}
                    </button>
                </a>

            </div>
        </div>
    );
}
