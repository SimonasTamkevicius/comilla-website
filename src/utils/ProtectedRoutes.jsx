import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoutes = () => {
    const { user } = useAuth();
    console.log(user);
    
    return user.loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes;