import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCategory = ({ category }) => {
    return (
        <div>
            <Link to={`/category/${category.path}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-2 pt-8">
                        <img
                            src={category?.logo}
                            alt={`logo of ${category?.name}`}
                            className="rounded-xl md:h-[160px] md:w-[260px]"
                        />
                    </figure>
                    <div className="card-body items-center text-center py-4">
                        <h2 className="card-title">{category?.name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

SingleCategory.propTypes = {
    category: PropTypes.object,
};

export default SingleCategory;