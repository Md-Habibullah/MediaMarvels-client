import PropTypes from "prop-types";
import Swal from "sweetalert2";

const CartCard = ({ product, setCart, cart }) => {
    const { name, photo, brandName, price, _id } = product;

    const handleDelete = (id) => {
        // console.log(id);
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
                fetch(`https://media-marvels-server.vercel.app/cart/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");

                            const remaining = cart?.filter((product) => product?._id !== id);
                            setCart(remaining);
                        }
                    });
            }
        });
    };
    return (
        <div className="card  flex gap-3 border dark:border-none shadow py-5">
            <figure className="flex-1">
                <img className="w-56" src={photo} alt={`image of ${name}`} />
            </figure>
            <div className="flex flex-col gap-2">
                <div className="w-1/2 mx-auto my-3">
                    <p className="flex items-center gap-1">
                        <span className="card-title">Brand: </span>{" "}
                        <span>{brandName.toUpperCase()}</span>
                    </p>
                    <h2 className="flex items-start gap-1">
                        <span className="card-title">Name:</span>
                        <span>{name}</span>
                    </h2>

                    <p className="flex items-center gap-1">
                        <span className="card-title">Price:</span>
                        <span> ${price}</span>
                    </p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn bg-orange-500 text-white btn-sm hover:text-orange-500 hover:bg-white">
                        Buy Now
                    </button>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-orange-500 text-white btn-sm hover:text-orange-500 hover:bg-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    product: PropTypes.object,
    setCart: PropTypes.func,
    cart: PropTypes.array,
};

export default CartCard;
