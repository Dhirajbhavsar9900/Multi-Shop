const Navbar = ()=>{
    return(
        <>
        <header>
            <div className="flex px-12 bg-slate-100 justify-between">
                <div className=" text-black">
                <ul className="flex ">
                    <li className="m-2 cursor-pointer hover:underline"><span>About</span></li>
                    <li className="m-2 cursor-pointer hover:underline"><span>Contact</span></li>
                    <li className="m-2 cursor-pointer hover:underline"><span>Help</span></li>
                    <li className="m-2 cursor-pointer hover:underline"><span>FAQs</span></li>
                </ul>
                </div>
                <div className=" mr-11 flex">
                    <ul className="flex">
                        <li className="m-2 bg-white flex justify-center items-center hover:bg-slate-200">
                            <button className="px-2 py-0.5" >My Account</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className=" mr-[5px] mt-1 " viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </li>
                    </ul>

                    <ul className="flex">
                        <li className="m-2 bg-white flex justify-center items-center hover:bg-slate-200">
                            <button className="px-2 py-0.5" >USD</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className=" mr-[5px] mt-1 " viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </li>
                    </ul>

                    <ul className="flex">
                        <li className="m-2 bg-white flex justify-center items-center hover:bg-slate-200">
                            <button className="px-2 py-0.5" >EN</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className=" mr-[5px] mt-1 " viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        {/* logo Navbar */}
        <nav>
            <div>
                
            </div>
        </nav>
        </>
    )
}

export default Navbar;