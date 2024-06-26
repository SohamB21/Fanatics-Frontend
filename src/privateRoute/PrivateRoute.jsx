import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider.jsx";
import Spinner from "../components/Spinner.jsx";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner />;
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to="/signup" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;
