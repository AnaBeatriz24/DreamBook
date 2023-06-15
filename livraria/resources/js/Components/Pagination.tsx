import React from 'react';

export default function Pagination({registries, top= true, bottom= false}) {
    const numbers = (links, current, last) => {
        switch (links.length) {
            case 3:
                return links[current];
            case 4:
                return links.slice(1, 3);
            default:
                return (current === 1) ?
                    links.slice(current, 4) :
                    (current === last) ?
                        links.slice(current-2, current+1) :
                        links.slice(current-1, current+2);
        }
    }

    const pags = (links, current, last) => {
        if(current === 1){
            const num = numbers(links, current)
            return num.map(({url, label, active}) => (
                <>
                    {active
                        ? <a href={url} aria-current="page" className="z-10 bg-zinc-50 border-amber-400
                        text-zinc-700 relative inline-flex items-center px-4 py-2 border text-sm
                        font-medium"> {label} </a>
                        : <a href={url} className="bg-white border-gray-500 text-zinc-500 hover:bg-zinc-200 transition ease-in-out duration-150
                        relative inline-flex items-center px-4 py-2 border text-sm font-medium"> {label} </a>
                    }
                </>
            ))
        } else if(current === last){
            const num = numbers(links, current, last)
            return num.map(({url, label, active}) => (
                <>
                    {active
                        ? <a href={url} aria-current="page" className="z-10 bg-zinc-50 border-amber-400
                        text-zinc-600 relative inline-flex items-center px-4 py-2 border text-sm
                        font-medium"> {label} </a>
                        : <a href={url} className="bg-white border-gray-500 text-zinc-700 hover:bg-zinc-200 transition ease-in-out duration-150
                        relative inline-flex items-center px-4 py-2 border text-sm font-medium"> {label} </a>
                    }
                </>
            ))
        } else {
            const num = numbers(links, current)
            return num.map(({url, label, active}) => (
                <>
                    {active
                        ? <a href={url} aria-current="page" className="z-10 bg-zinc-50 border-amber-400
                        text-zinc-600 relative inline-flex items-center px-4 py-2 border text-sm
                        font-medium"> {label} </a>
                        : <a href={url} className="bg-white border-gray-500 text-zinc-700 hover:bg-zinc-200 transition ease-in-out duration-150
                        relative inline-flex items-center px-4 py-2 border text-sm font-medium"> {label} </a>
                    }
                </>
            ))
        }
    }

    return (
        <div className={`bg-white px-4 py-3 flex items-center justify-between ${top ? "border-t" : ""} ${bottom ? "border-b" : ""} border-gray-200 sm:px-6`}>
            <div className="flex-1 flex justify-between sm:hidden">
                <a href={registries.prev_page_url}
                   className="relative inline-flex items-center px-4 py-2 border border-gray-500 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Anterior </a>
                <a href={registries.next_page_url}
                   className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-500 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Próximo </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:flex-col">
                <div>
                    <p className="text-md text-zinc-700 mb-4">
                        Página <span className="font-medium">{registries.current_page}</span> de <span className="font-medium">{registries.last_page}</span>
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a href={registries.first_page_url}
                           className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-500 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition ease-in-out duration-150">
                            <span className="sr-only">Anterior</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        </a>
                        <a href={registries.prev_page_url}
                           className="relative inline-flex items-center px-2 py-2 border border-gray-500 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition ease-in-out duration-150">
                            <span className="sr-only">Anterior</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </a>
                        {pags(registries.links, registries.current_page, registries.last_page)}

                        <a href={registries.next_page_url}
                           className="relative inline-flex items-center px-2 py-2 border border-gray-500 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition ease-in-out duration-150">
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </a>
                        <a href={registries.last_page_url}
                           className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-500 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition ease-in-out duration-150">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
