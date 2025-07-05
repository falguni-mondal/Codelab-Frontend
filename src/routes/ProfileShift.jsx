import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const ProfileShift = ({ children }) => {

    const user = useSelector((state) => state.auth.user);
    return user ? <Navigate to="/user/profile" /> : children;
}

export default ProfileShift