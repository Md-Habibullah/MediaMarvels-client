import { useLoaderData } from "react-router-dom";
import SingleCart from "../Components/SingleCart";
import { useState } from "react";


const MyCart = () => {
    const loadedCart = useLoaderData()
    const [cart, setCart] = useState(loadedCart)

    return (
        <>
            <div className="max-w-7xl mx-auto my-10">
                {cart.length ? (
                    <div>
                        <h2 className="text-4xl text-center mb-3">
                            Your Items: {cart.length}
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                            {cart &&
                                cart?.map((product) => (
                                    <SingleCart
                                        key={product?._id}
                                        product={product}
                                        setCart={setCart}
                                        cart={cart}
                                    ></SingleCart>
                                ))}
                        </div>
                    </div>
                ) : (
                    <h1 className="text-4xl text-center my-auto">Items not Added yet!</h1>
                )}
            </div>
        </>
    );
};

export default MyCart;