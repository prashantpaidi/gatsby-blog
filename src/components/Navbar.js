import React, { useState } from 'react';
import {Link} from 'gatsby';

const Navbar = () => {
    const [click,setClick]=useState(false);

    const handleClick = ()=>setClick(!click);
    return(
        <nav className="">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">

                    <Link to="/" className="flex items-center">
                        <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        logo
                    </Link>

                    <div className="hidden md:flex flex-row space-x-6 py-4 px-3">
                        <div className="flex item-center space-x-3">
                            
                           <Link to="/" className="hover:text-black">About</Link> 
                           <Link to="/">contant</Link> 
                            
                        </div>
                    </div>
                    
                {/* moblie button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>


            {/* check click */}
            <div className={click ? "block":"hidden"}>
                <Link to="/" className="block">About</Link> 
                <Link to="/">contant</Link> 
            </div>
        </nav>
    );
}

export default Navbar;