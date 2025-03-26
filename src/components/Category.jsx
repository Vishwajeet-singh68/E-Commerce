import React from "react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

function Category() {
    return(
        <div className="flex justify-center">
            <div className="mt-20">
                <Link to={"/Products"}>
                    <CategoryCard 
                        image='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg' name='Products'
                    />
                </Link>
            </div>
        </div>
    )
}
export default Category;