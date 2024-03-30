import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RatingItem from "./RatingItem";
import Swal from "sweetalert2";

const BrandItems = ({ brandItem, brandCollections, setBrandCollections }) => {
    const { _id, brandName, name, photo, price, rating } = brandItem;

    const deleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const URL = `https://media-marvels-server.vercel.app/products/${brandName}/${id}`
                fetch(URL, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            console.log(data)
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");
                            const remaining = brandCollections.filter(sBrand => sBrand._id != id)
                            setBrandCollections(remaining)
                        }
                    })

            }
        });

    }

    return (

        <div>

            <div className="card  flex gap-3 border dark:border-none shadow py-5">
                <figure className="flex-1">
                    <img className="w-56" src={photo} alt={`image of ${name}`} />
                </figure>
                <div className="flex flex-col gap-2">
                    <div className="w-1/2 mx-auto my-3">
                        <p className="flex items-center gap-1">
                            <span className="card-title">Brand: </span> <span>{brandName}</span>
                        </p>
                        <h2 className="flex items-center gap-1">
                            <span className="card-title">Name:</span>
                            <span>{name}</span>
                        </h2>
                        <div className="flex items-center ">
                            <span className="card-title">Ratings: </span>
                            {

                            }
                            <div className="rating">
                                <RatingItem number={rating}></RatingItem>
                            </div>
                        </div>
                        <p className="flex items-center gap-1">
                            <span className="card-title">Price:</span>
                            <span> {price}$</span>
                        </p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/products/${brandName}/${_id}`}>
                            <button className="btn bg-green-500 text-white btn-sm hover:text-green-500 hover:bg-white">
                                Details
                            </button>
                        </Link>
                        <Link to={`/updateProduct/${brandName}/${_id}`}>
                            <button className="btn bg-green-500 text-white btn-sm hover:text-green-500 hover:bg-white">
                                update
                            </button>
                        </Link>

                        <button onClick={() => deleteItem(_id)} className="btn bg-green-500 text-white btn-sm hover:text-green-500 hover:bg-white">
                            delete
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

BrandItems.propTypes = {
    brandItem: PropTypes.object,
    brandCollections: PropTypes.array,
    setBrandCollections: PropTypes.func
};

export default BrandItems;