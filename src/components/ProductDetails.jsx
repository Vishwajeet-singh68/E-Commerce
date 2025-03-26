import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductDetails({addToCart,cartContent}) {

    const navigate = useNavigate();
    
    function handleClick(){
        navigate("/Cart")
    }

    function handleBuyNow(){
        navigate("/BuyNow")
    }

    const { id } = useParams(); 

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <p className="text-white mt-20">Loading product details...</p>;
    }

    if (!product) {
        return <p className="text-white mt-20">Product not found!</p>;
    }

    return (
        <div className="w-7/12 border-white border-2 m-auto mt-20 p-2 flex gap-2">
            <div className="h-96 w-1/2">
                <img 
                    className="w-full h-full" 
                        src={product.image} alt="" 
                />
            </div>
            <div className="text-white w-1/2 text-center">
                <div className="font-bold text-2xl">
                    {product.title}
                </div>
                <div className="mt-8 text-gray-500">
                    {product.description}
                </div>
                <div className="mt-8 text-gray-200 font-bold text-xl">
                    ${product.price}
                </div>
                <div className="mt-12">
                    <button onClick={() => cartContent.includes(product.id)?handleClick():addToCart(product)} 
                        className="bg-gray-900 text-white px-8 py-2 hover:scale-105 transition duration-300">
                            {cartContent.includes(product.id)?"Go to Cart":"Add to Cart"}
                    </button>
                    <button onClick={handleBuyNow}
                        className="bg-white text-black px-8 py-2 ml-2 hover:scale-105 transition duration-300">
                                Buy Now
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ProductDetails;
