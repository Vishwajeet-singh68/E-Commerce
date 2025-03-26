import React from "react";

function CartItemCard(props){
    return(
        <div className="flex border-white border-2 p-4 mt-4 items-center relative">
            <div className="w-80 h-44">
                <img
                    className="h-full w-full" 
                    src={props.image} 
                    alt={props.name} 
                />
            </div>
            <div className="w-3/6 ml-4">
                <h1 className="text-white font-bold text-3xl">{props.name}</h1>
                <p className="text-gray-500 leading-10">{props.description}</p>
            </div>
            <div className="right-3 absolute text-center">
                <h1 className="text-white font-bold">{props.price}</h1>
                <button onClick={props.removeFromCart(props.key)} className="mt-6 px-8 p-2 bg-red-900 font-bold text-white">Remove</button>
            </div>
        </div>
    )
}
export default CartItemCard;
