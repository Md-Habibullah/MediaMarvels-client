import RatingItem from "./RatingItem";

//eslint-disable-next-line
const CategoryItems = ({ categoryItem }) => {
    //eslint-disable-next-line
    const { _id, brandName, name, photo, price, rating } = categoryItem;

    return (
        <>
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
                            <div className="rating">
                                <RatingItem number={rating}></RatingItem>
                            </div>
                        </div>
                        <p className="flex items-center gap-1">
                            <span className="card-title">Price:</span>
                            <span> {price}$</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryItems;