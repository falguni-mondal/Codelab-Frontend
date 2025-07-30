import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from '../../utils/components/Loading';

const AuthGuard = () => {
    const navigate = useNavigate();
    const { user, status } = useSelector((state) => state.auth);

    useEffect(() => {
        if (status === "failed" || (!user && status === "success")) {
            return navigate("/auth/signin");
        }
        if (user && !user.isVerified) {
            return navigate("/user/verify");
        }
    }, [navigate, user, status])

    if (status === "loading" || status === "idle") {
        return <Loading />
    }

    return <Outlet />;
}

export default AuthGuard