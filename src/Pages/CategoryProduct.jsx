import { useLoaderData } from "react-router-dom";
import CategoryItems from "../Components/CategoryItems";
// import { useState } from "react";

const CategoryProducts = () => {
    const categoryCollections = useLoaderData()
    // const [categoryCollections, setCategoryCollections] = useState(loadedCategory)

    if (categoryCollections.length == 0) { return <h2 className="text-2xl">No Data Found</h2> }
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {
                    categoryCollections.map(categoryItem => <CategoryItems key={categoryItem._id} categoryItem={categoryItem}></CategoryItems>)
                }
            </div>
        </>
    );
};

export default CategoryProducts;