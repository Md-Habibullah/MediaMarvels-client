import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import RatingItem from "../Components/RatingItem";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const ProductDetails = () => {
    const product = useLoaderData()
    const { user } = useContext(AuthContext)

    const { name, brandName, type, price, rating, short_description, photo } =
        product;

    const handleAddToCart = () => {
        const email = user.email;
        const newProduct = {
            email,
            name,
            brandName,
            type,
            price,
            rating,
            short_description,
            photo,
        };

        // Send data to server
        fetch("https://media-marvels-server.vercel.app/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Added to Cart successfully!",
                        icon: "success",
                        confirmButtonText: "Added Successful!",
                    });
                }
                // console.log(data);
            });
    };

    return (
        <>
            <div className="my-40">
                <h1 className="text-5xl text-center my-5">
                    {product?.name?.toUpperCase()}
                </h1>
                <div className="flex flex-col lg:flex-row gap-5 p-2">
                    <div className="flex-1 flex justify-end">
                        <img
                            className="rounded-sm"
                            src={product?.photo}
                            alt={`image of ${product?.name}`}
                        />
                    </div>
                    <div className="flex-1 my-auto items-center">
                        <div className="mb-3">
                            <p className="flex items-center gap-1">
                                <span className="card-title">Brand: </span>{" "}
                                <span>{product?.brandName?.toUpperCase()}</span>
                            </p>
                            <h2 className="flex items-center gap-1">
                                <span className="card-title">Name:</span>
                                <span>{product?.name?.toUpperCase()}</span>
                            </h2>
                            <div className="flex gap-1 items-center ">
                                <span className="card-title">Ratings: </span>
                                <div className="rating">
                                    <RatingItem number={rating}></RatingItem>
                                </div>
                            </div>
                            <p className="flex items-center gap-1">
                                <span className="card-title">Price:</span>
                                <span> {product?.price}$</span>
                            </p>
                            <p className="flex items-center gap-1">
                                <span className="card-title">Type:</span>
                                <span> {product?.type}</span>
                            </p>
                        </div>
                        <p className="flex flex-col gap-1">
                            <span className="card-title underline whitespace-nowrap">
                                Short Description:
                            </span>
                            <span className="lg:ml-4"> {product?.short_description}</span>
                        </p>
                        <div className="flex mt-8">
                            <button
                                onClick={handleAddToCart}
                                className="btn  bg-orange-500  text-white hover:text-orange-500 hover:bg-white"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;