import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Bounce, toast, Zoom } from 'react-toastify';
import { fetchUser } from '../../redux/features/authSlice';
import { baseUrl } from '../../utils/functions/keys';

const EmailVerifier = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useParams();
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");
    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        if(!user){
            return navigate("/auth/signup");
        }
        if(user && user.isVerified){
            return navigate("/user/profile");
        }
        emailVerifier();
    }, [user])

    const emailVerifier = async () => {
        try {
            setLoading(true);
            setResponse("");
            const res = await axios.post(`${baseUrl}/api/user/verify/match`, { token }, { withCredentials: true });
            setLoading(false);
            setResponse(res.data);
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
            navigate("/user/profile")
        } catch (err) {
            setLoading(false);
            setResponse(`${err.response.data}`);
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
        <div className='w-full pt-[35vh] flex flex-col items-center'>
            <p className='text-[2rem] text-zinc-400'>{loading ? "Wait for a moment!" : response}</p>
        </div>
    )
}

export default EmailVerifier