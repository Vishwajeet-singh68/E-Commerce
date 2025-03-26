import React, { useState } from "react";
import CartItemCard from "./CartItemCard";

function Cart({cartItems, removeFromCart}){
    const total=cartItems.reduce((sum,curr)=>sum+curr.price,0);
    return(
        <div className="flex flex-col items-center mt-16">
            <div className="border-white border-2 w-4/5 text-center p-4">
                <h1 className="text-3xl text-white font-bold m-auto">Cart</h1>
            </div>
            <div className="border-white border-2 w-4/5 mt-4 flex flex-col p-4 pt-0 text-center">
                {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-2xl font-bold mt-4">Add items to your cart</p>
                    ) : (
                    cartItems.map((item, index) => (
                        <CartItemCard
                            key={index}
                            image={item.image}
                            name={item.title}
                            description={item.description}
                            price={`$${item.price}`}
                            removeFromCart={removeFromCart}
                        />
                    ))
                )}
            </div>
            <div className="border-white border-2 w-4/5 text-center p-4 my-2">
                <h1 className="text-3xl text-white font-bold m-auto">Total: {total}</h1>
            </div>
        </div>
    )
}

export default Cart;