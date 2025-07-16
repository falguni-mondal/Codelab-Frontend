import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import { logoutUser } from '../../redux/features/authSlice';
import Logo from '../../utils/components/Logo';
import { baseUrl } from '../../utils/functions/keys';

const EmailVerify = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    const reSignupHandler = async () => {
        await axios.get(`${baseUrl}/api/user/account/deactivate`, { withCredentials: true });
        dispatch(logoutUser());
    }

    useEffect(() => {
        if (!user) {
            return navigate("/auth/signup");
        }
        if (user && user.isVerified) {
            return navigate("/user/profile");
        }
        verificationLinkSender();
    }, [user])

    const verificationLinkSender = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/user/verify/send`, { withCredentials: true });
            console.log(res.data)
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
        user &&
        <div id='email-verification-page' className='w-full text-center flex flex-col items-center pt-[18vh] text-gray-400 text-[1.2rem]'>
            <div className="logo-container px-4 py-1.5 rounded-full bg-slate-800">
                <Logo />
            </div>
            <h1 className='text-[3rem] font-semibold mb-2'>Thanks for Registration!</h1>
            <p className='w-1/2'>Almost done, <span className='text-gray-100 font-medium'>@{user.username}</span>. To complete your CodeLab sign up, please check your email address <span className='text-blue-600'>{user.email}</span> for verification mail.</p>
            <div className="btn-container mt-3 text-gray-200">
                In case of false credentials
                <button onClick={reSignupHandler} className='w-[6rem] py-1.5 rounded minor-bg ml-2 text-sm cursor-pointer'>Go Back</button>
            </div>
            <button onClick={verificationLinkSender} className='px-4 py-1.5 rounded bg-blue-800 hover:bg-blue-900 transition-all duration-300 mt-5 text-sm cursor-pointer'>Re-send verification link</button>
        </div>
    )
}

export default EmailVerify