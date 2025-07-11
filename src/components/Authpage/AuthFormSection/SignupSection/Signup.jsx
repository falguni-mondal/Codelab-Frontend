import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { Bounce, toast, Zoom } from 'react-toastify';
import { passwordChecker, usernameChecker } from '../../../../utils/functions/validator';
import { passwordRegex, unameRegex } from '../../../../utils/functions/regex';
import { baseUrl } from '../../../../utils/functions/keys';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../../redux/features/authSlice';

const Signup = ({ setLoading }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const [passErr, setPassErr] = useState(null);
    const [unameErr, setUnameErr] = useState(null);

    const inputs = [
        {
            name: "email",
            type: "email",
            ref: emailRef
        },
        {
            name: "password",
            type: "password",
            msg: "Password should be at least 8 characters including at least an uppercase, a lowercase, a symbol, and a number.",
            ref: passwordRef
        },
        {
            name: "username",
            type: "text",
            msg: "Username should be atleast 6 characters, including alphanumeric characters or single hyphen, cannot begin or end with a hyphen, and can not begin with number.",
            ref: usernameRef
        }
    ]


    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(prev => !prev);

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const username = usernameRef.current.value;

        if (!passwordRegex.test(password) || !unameRegex.test(username) || emailRef.current.value.trim() === "") {
            setLoading(prev => !prev);
            toast.error("Please enter valid credentials!", {
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
            return;
        }

        try {
            const res = await axios.post(`${baseUrl}/api/user/create`, { email, password, username }, { withCredentials: true });
            
            setLoading(prev => !prev);
            emailRef.current.value = "";
            passwordRef.current.value = "";
            usernameRef.current.value = "";
            setPassErr(null);
            setUnameErr(null);
            
            dispatch(fetchUser());

            navigate("/user/profile")

            toast.success('Signup Successfull!', {
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
        } catch (err) {
            setLoading(prev => !prev);
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
        <div className="signup-form-outer w-1/2 h-full p-10 flex flex-col items-center gap-16">
            <div className="signin-option self-end flex gap-2 text-[0.9rem] text-gray-500">
                Already have an account <Link to="/auth/signin" className='text-[#dedede] underline flex items-center gap-1'>Sign in <FaArrowRightLong className='text-[0.6rem]' /></Link>
            </div>
            <div className="signup-form-container w-[80%]">
                <h2 className="signup-heading text-[1.2rem] font-medium leading-none">Sign up to CodeLab</h2>
                <form onSubmit={submitHandler} className="signup-form mt-8 flex flex-col gap-3">
                    {
                        inputs.map((inp) => (
                            <div key={`signup-${inp.name}`} className="input-container flex flex-col">
                                <label htmlFor={`${inp.name}-input`} className="input-label capitalize">{inp.name}</label>
                                <input onChange={(e) => inp.name === "password" ? passwordChecker(e.target.value, setPassErr) : inp.name === "username" ? usernameChecker(e.target.value, setUnameErr) : undefined} ref={inp.ref} className='placeholder:capitalize outline-0 border border-gray-700 rounded-md py-1.5 px-2' id={`signup-${inp.name}-input`} type={`${inp.type}`} placeholder={`${inp.name}`} />
                                {
                                    inp.name === "password" ?
                                        <p className={`input-message ${passErr ? passErr === "Valid Password!" ? "text-green-600" : "text-red-600" : "text-gray-600"} text-[0.8rem]`}>{passErr ? passErr : inp.msg}</p>
                                        : inp.name === "username" &&
                                        <p className={`input-message ${unameErr ? unameErr === "Available!" ? "text-green-600" : "text-red-600" : "text-gray-600"} text-[0.8rem]`}>{unameErr ? unameErr : inp.msg}</p>
                                }
                            </div>
                        ))
                    }
                    <button className='w-full rounded-md bg-[#dedede] py-1.5 text-[black] font-medium mt-2 cursor-pointer'>Continue</button>
                </form>
            </div>
        </div>
    )
}

export default Signup