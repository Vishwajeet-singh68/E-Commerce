import React from "react";
import { useState } from "react";

function CategoryCard(props) {
    const [show, setshow]=useState(false);

    function changeshow(){
        setshow(!show);
    }

    return(
        <div onMouseEnter={changeshow} onMouseLeave={changeshow} className="relative h-80 w-96 m-auto mt-6 hover:brightness-50 transition duration-300 hover:scale-105">
            <img className="w-full h-full rounded-xl object-cover" src={props.image} alt={props.name} /> 
            {show && <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">{props.name}</div>}
        </div>
    )
}

export default CategoryCard;