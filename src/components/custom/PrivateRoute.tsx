import { Navigate } from "react-router";
import { useAuth } from "@/context/AuthContext";
import { JSX } from "react";

interface Props {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
    const { isAuthenticated, userAdmin } = useAuth();

    return isAuthenticated && userAdmin === "true" ? children : <Navigate to="/" />;
};

export default PrivateRoute;