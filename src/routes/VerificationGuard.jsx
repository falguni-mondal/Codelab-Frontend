import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const VerificationGuard = () => {

    const user = useSelector((state) => state.auth.user);

    return user ? user.isVerified ? <Navigate to="/user/profile" replace /> : <Outlet /> : <Navigate to="/auth/signin" replace />
}

export default VerificationGuard