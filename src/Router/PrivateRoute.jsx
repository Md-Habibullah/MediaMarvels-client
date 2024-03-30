import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <div className="text-center w-1/5 mt-20 mx-auto py-64">
                <span className="loading loading-spinner w-2/5"></span>
            </div>
        )
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;