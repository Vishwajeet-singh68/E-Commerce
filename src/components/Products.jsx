import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

function Products() {
    const [Data, setData] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [search, setSearch] = useState("");
    const [nameSorta_z, setNameSorta_z] = useState(false);
    const [nameSortz_a, setNameSortz_a] = useState(false);
    const [pricehl, setPricehl] = useState(false);
    const [pricelh, setPricelh] = useState(false);

    useEffect(() => {
        const cachedData = sessionStorage.getItem("products");
        if (cachedData) {
            setData(JSON.parse(cachedData));
            setFetched(true);
        } else {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            setData(result);
            setFetched(true);
            sessionStorage.setItem("products", JSON.stringify(result));
        } catch (error) {
            console.error("Error while fetching data:", error);
        }
    };

    const filtered = useMemo(() => {
        let filteredProducts = Data.filter((prod) =>
            prod.title.toLowerCase().includes(search.toLowerCase())
        );

        if (nameSorta_z) {
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        }

        if (nameSortz_a) {
            filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        }

        if (pricelh) {
            filteredProducts.sort((a, b) => a.price - b.price);
        }

        if (pricehl) {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        return filteredProducts;
    }, [Data, search, nameSorta_z, nameSortz_a, pricelh, pricehl]);

    return (
        <div>
            <Sidebar
                search={search} setsearch={setSearch}
                nameSorta_z={nameSorta_z} setNameSorta_z={setNameSorta_z}
                nameSortz_a={nameSortz_a} setNameSortz_a={setNameSortz_a}
                pricehl={pricehl} setPricehl={setPricehl}
                pricelh={pricelh} setPricelh={setPricelh}
            />

            <div className="flex flex-wrap ml-96 gap-10 p-4 mt-16">
                {fetched ? (
                    filtered.length === 0 ? (
                        <p className="text-white">Items Not Found..</p>
                    ) : (
                        filtered.map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                name={item.title.slice(0, 50)}
                                description={item.description.slice(0, 50)}
                                price={item.price}
                            />
                        ))
                    )
                ) : (
                    <p className="text-white">Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Products;
