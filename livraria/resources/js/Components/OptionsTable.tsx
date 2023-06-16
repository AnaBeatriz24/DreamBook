import {useState} from "react";

export default function OptionsTable(props) {

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <div
                className="px-2 py-3 break-all font-medium font-black text-black text-sm rounded">
                <div className=" container flex items-center justify-between items-align-center mx-auto">

                    <div className="items-center justify-between w-full xl:flex hidden">
                        <ul className="flex flex-col w-full rounded-lg sm:flex-row sm:space-x-8 sm:mt-0 md:text-sm sm:font-medium">
                            {
                                <div className={`px-6 py-3 gap-2 justify-self-evenly flex`}>
                                    {props.buttons}
                                </div>
                            }
                        </ul>
                    </div>

                    <div className="flex w-full justify-center xl:hidden">

                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="items-center justify-center p-2 rounded-md text-gray-400
                                hover:text-gray-500 hover:bg-transparent focus:outline-none focus:bg-transparent
                                focus:text-gray-500 transition duration-150 ease-in-out"
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
            <div className={(showingNavigationDropdown ? 'relative' : 'hidden') + ' xl:hidden right-2 mt-2'}>
                <div className="">
                    {
                        <div className={"px-6 py-3 w-[90vw] gap-2 justify-end flex flex-wrap"}>
                            {props.buttons}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
