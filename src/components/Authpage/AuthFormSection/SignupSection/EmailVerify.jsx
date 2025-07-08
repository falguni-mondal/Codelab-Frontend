import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../../../utils/components/Logo';
import axios from 'axios';
import { baseUrl } from '../../../../utils/functions/keys';
import { logoutUser } from '../../../../redux/features/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EmailVerify = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    const reSignupHandler = async () => {
        await axios.get(`${baseUrl}/api/user/account/deactivate`, { withCredentials: true });
        dispatch(logoutUser());
    }

    useEffect(() => {
        if(!user){
            return navigate("/auth/signup");
        }
        if (user && user.isVerified) {
            return navigate("/user/profile");
        }
    }, [user])

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
        </div>
    )
}

export default EmailVerify