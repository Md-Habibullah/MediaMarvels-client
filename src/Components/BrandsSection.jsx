import { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";


const BrandsSection = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('../brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto my-24">
            <h2 className="text- 2xl text-white font-bold md:text-4xl text-center mb-10">Featured Brands</h2>

            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 place-items-center gap-1 md:gap-4">
                {
                    brands?.map(brand => <SingleBrand key={brand.id} brand={brand}></SingleBrand>)
                }
            </div>


        </div>
    );
};

export default BrandsSection;