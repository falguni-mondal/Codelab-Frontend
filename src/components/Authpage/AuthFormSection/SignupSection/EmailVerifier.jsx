import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../../redux/features/authSlice';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../../utils/functions/keys';
import { Bounce, toast, Zoom } from 'react-toastify';

const EmailVerifier = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useParams();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) {
            return navigate("/auth/signup");
        }
        if (user && user.isVerified) {
            return navigate("user/profile");
        }
        emailVerifier();
    }, [user])

    const emailVerifier = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/user/verify/match`, { token }, { withCredentials: true });
            toast.success(`${res.data}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
            dispatch(fetchUser());
        } catch (err) {
            toast.error(`${err.response.data}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    return (
        <div>EmailVerifier</div>
    )
}

export default EmailVerifier