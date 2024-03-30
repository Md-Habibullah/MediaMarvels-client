import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleBrand = ({ brand }) => {
    return (
        <div>
            <Link to={`/brand/${brand.path}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-2 pt-8">
                        <img
                            src={brand?.logo}
                            alt={`logo of ${brand?.name}`}
                            className="rounded-xl md:h-[128px] md:w-[228px]"
                        />
                    </figure>
                    <div className="card-body items-center text-center py-4">
                        <h2 className="card-title">{brand?.name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

SingleBrand.propTypes = {
    brand: PropTypes.object,
};

export default SingleBrand;