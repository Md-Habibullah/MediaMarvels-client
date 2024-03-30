
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedProduct = () => {
    const { id, brand } = useParams();
    const { name, brandName, category, price, rating, short_description, photo } =
        useLoaderData();

    const [inputValue, setInputValue] = useState(rating);
    // console.log(id, brand);
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        //name
        const name = form.name.value;

        //brand
        const userInputBrand = form.brandName.value
        const brandName = userInputBrand.toLowerCase();

        //type, price
        const uType = form.type.value
        const category = uType.toLowerCase();

        const price = form.price.value;

        //ratting
        const userRating = form.rating.value;
        const rating = parseInt(userRating);

        // description, photo
        const short_description = form.short_description.value;
        const photo = form.photo.value;

        const newProduct = {
            name,
            brandName,
            category,
            price,
            rating,
            short_description,
            photo,
        };
        // console.log(newProduct);

        // Send data to server
        const URL = `https://media-marvels-server.vercel.app/products/${brand}/${id}`
        fetch(
            URL,
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newProduct),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product Update successfully!",
                        icon: "success",
                        confirmButtonText: "Cool?",
                    });
                }
                console.log(data);
            });
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        // Check if the entered value is greater than 10
        if (parseInt(value) > 5 || parseInt(value) < 1) {
            alert('You can only rate 1 to 5');
            setInputValue('')
        }
    };
    return (
        <div className="min-h-[70vh] max-w-7xl mx-auto my-16">
            <div className="bg-stone-50 rounded py-20 px-1 md:px-10 lg:px-32">
                <h2 className=" text-5xl font-bold text-center mb-10 text-black">Update</h2>
                <div>
                    <form onSubmit={handleUpdateProduct} className="">
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex-1 space-y-5">
                                <div className="">
                                    <label className="label ">
                                        <span className="label-text text-xl font-semibold">
                                            Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter product name"
                                        name="name"
                                        className="w-full  p-3 rounded-md"
                                        defaultValue={name}
                                        required
                                    />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">
                                            Brand name
                                        </span>
                                    </label>

                                    <select
                                        defaultValue={brandName}
                                        name="brandName"
                                        className="bg-[#3B3B3B] select select-bordered w-full p-3 border-none "
                                    >
                                        <option>{brandName}</option>

                                    </select>
                                </div>

                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">
                                            Personal Rating
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Enter product rating"
                                        name="rating"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        className="bg-[#3B3B3B] w-full p-1 md:p-3 rounded-md"
                                        required
                                    />
                                </div>

                            </div>
                            <div className="flex-1  space-y-5">
                                <div className="">
                                    <label className="label ">
                                        <span className="label-text text-xl font-semibold">
                                            Price
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter product price"
                                        name="price"
                                        defaultValue={price}
                                        className="w-full  p-1 md:p-3 rounded-md"
                                        required
                                    />
                                </div>

                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">
                                            Category type
                                        </span>
                                    </label>
                                    <select
                                        name="type"
                                        defaultValue={category}
                                        className="bg-[#3B3B3B] select select-bordered w-full p-3 border-none "
                                    >
                                        <option>Movie</option>
                                        <option>Series</option>
                                        <option>Merchandise</option>
                                        <option>Toys</option>
                                        <option>Album</option>
                                        <option>Accessories</option>
                                    </select>
                                </div>


                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">
                                            Short description
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter short description"
                                        name="short_description"
                                        defaultValue={short_description}
                                        className="w-full  p-1 md:p-3 rounded-md"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="mb-10">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter product photo URL"
                                    name="photo"
                                    defaultValue={photo}
                                    className="w-full  p-3 rounded-md"
                                />
                            </div>
                            <input
                                type="submit"
                                value="Update"
                                className="w-full border-2  bg-gray-700 text-white py-2  text-2xl font-fontRancho rounded-md cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedProduct;
