import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const GuestGuard = () => {

    const user = useSelector((state) => state.auth.user);

    return user ? <Navigate to="/user/profile" replace /> : <Outlet/>;
}

export default GuestGuard