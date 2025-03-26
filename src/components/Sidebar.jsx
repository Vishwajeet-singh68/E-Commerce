import React from "react";

function Sidebar(props){
    return(
        <div className="h-screen fixed w-fit p-4 bg-black">
            <input 
                className="outline-none border-2 border-gray-400 rounded p-2 w-80" 
                type="text" 
                placeholder="Search Product.."
                value={props.search}
                onChange={(e)=>props.setsearch(e.target.value)}
            />
            <div>
                <h1 className="text-xl font-bold mt-16 text-white">Filter</h1>
                <div className="flex flex-col mt-3">
                    <button 
                        className="p-1 bg-gray-100 text-s font-bold text-gray-500 hover:scale-105 transition duration-300"
                        onClick={() => props.setNameSorta_z(!props.nameSorta_z)}>
                            {props.nameSorta_z==true?"✔️":""}Sort by Name: A-Z
                    </button>
                    <button 
                        className="p-1 bg-gray-100 mt-1 text-s font-bold text-gray-500 hover:scale-105 transition duration-300"
                        onClick={() => props.setNameSortz_a(!props.nameSortz_a)}>
                            {props.nameSortz_a==true?"✔️":""}Sort by Name: Z-A
                    </button>
                    <button 
                        className="p-1 bg-gray-100 mt-1 text-s font-bold text-gray-500 hover:scale-105 transition duration-300"
                        onClick={() => props.setPricelh(!props.pricelh)}>
                            {props.pricelh==true?"✔️":""}Sort by Price: Low to High
                    </button>
                    <button 
                        className="p-1 bg-gray-100 mt-1 text-s font-bold text-gray-500 hover:scale-105 transition duration-300"
                        onClick={() => props.setPricehl(!props.pricehl)}>
                            {props.pricehl==true?"✔️":""}Sort by Price: High to Low
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;