import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard(props){
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/Products/${props.id}`);
    }

    return(
        <div
            onClick={handleClick}
            className="bg-gray-300 h-96 w-80 rounded-xl p-2 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="w-full h-3/5">
                <img className="h-full w-full object-fill rounded-xl" src={props.image} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl">{props.name}</h1>
                <p>{props.description}...</p>
                <p className="font-bold">Price:{props.price}$</p>
            </div>
        </div>
    )
}

export default ProductCard;