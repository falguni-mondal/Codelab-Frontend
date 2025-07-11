import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../../redux/features/authSlice';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../../utils/functions/keys';
import { Bounce, toast, Zoom } from 'react-toastify';

const EmailVerifier = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useParams();
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");

    useEffect(() => {
        emailVerifier();
    }, [])

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
            setResponse("Something went wrong!");
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
        <div className='w-full h-full flex flex-col items-center'>
            <p>{loading ? "Wait for a moment!" : response}</p>
        </div>
    )
}

export default EmailVerifier