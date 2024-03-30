import { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const CategorySection = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('../categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [categories])
    return (
        <>
            <div className="max-w-7xl mx-auto my-24">
                <h2 className="text- 2xl text-white font-bold md:text-4xl text-center mb-10">Categories</h2>

                <div className="grid grid-cols-2  md:grid-cols-3 place-items-center gap-1 md:gap-4">
                    {
                        categories?.map(category => <SingleCategory key={category.id} category={category}></SingleCategory>)
                    }
                </div>


            </div>
        </>
    );
};

export default CategorySection;