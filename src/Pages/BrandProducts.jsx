import { useLoaderData } from "react-router-dom";
import BrandItems from "../Components/BrandItems";
import { useState } from "react";
import Slider from "../Components/Slider";

const BrandProducts = () => {
    const loadedBrandCollections = useLoaderData()
    const [brandCollections, setBrandCollections] = useState(loadedBrandCollections)

    // if (brandCollections.length == 0) { return <h2 className="text-2xl">No Data Found</h2> }
    return (
        <div>
            <Slider></Slider>
            {
                brandCollections.length == 0 ?
                    <h2 className="text-center mb-[50px] text-2xl">No Data Found 😢</h2> :
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                        {
                            brandCollections.map(brandItem => <BrandItems key={brandItem._id} brandItem={brandItem} brandCollections={brandCollections} setBrandCollections={setBrandCollections}></BrandItems>)
                        }
                    </div>
            }

        </div>
    );
};

export default BrandProducts;