import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(location);
    if(user){
        return children
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;