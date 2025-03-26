import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Navbar({cart}) {

    return(
        <div className="bg-black w-full py-4 text-white flex justify-around fixed top-0 z-10">
            <div className="text-2xl font-bold">
                <h1>Buy4U</h1>
            </div>
            <ul className="flex gap-12">
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/Products"}><li>Product</li></Link>
                <Link to={"/About"}><li>About</li></Link>
            </ul>
            <div className="flex">
                <div className="p-1"><FontAwesomeIcon icon={faUser} /> Login</div>
                <Link to={"/Cart"}><div className="relative p-1">
                    <FontAwesomeIcon className="ml-12" icon={faShoppingCart}/>
                    {cart>0 && 
                        <div className="h-4 w-4 bg-red-600 absolute top-0 right-0 rounded-lg text-center text-xs">
                            {cart}
                        </div>
                    }
                </div></Link>
            </div>
        </div>
    )
}

export default Navbar;