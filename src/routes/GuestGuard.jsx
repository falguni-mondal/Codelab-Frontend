import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { fetchUser } from "../redux/features/authSlice";
import Loading from "../utils/components/Loading";

const GuestGuard = () => {
    const dispatch = useDispatch();
    const {user, status} = useSelector((state) => state.auth);

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchUser());
        }
    }, [dispatch, status])

    if(status === "loading" || status === "idle"){
        return <Loading />
    }
    if(user){
        if(user.isVerified){
            return <Navigate to="/user/profile" replace />;
        }
        return <Navigate to="/user/verify" />;
    }

    return <Outlet />
}

export default GuestGuard