import axios from "axios";
import { useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast, Zoom } from "react-toastify";
import {passwordChecker} from "../../../../utils/functions/validator";
import { passwordRegex } from "../../../../utils/functions/regex";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../../redux/features/authSlice";
import { baseUrl } from "../../../../utils/functions/keys";


const Signin = ({ setLoading }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const idRef = useRef();
    const passwordRef = useRef();

    const [passErr, setPassErr] = useState(null);


    const inputs = [
        {
            name: "email / username",
            type: "text",
            ref: idRef
        },
        {
            name: "password",
            type: "password",
            msg: "Password should be at least 8 characters including at least an uppercase, a lowercase, a symbol, and a number.",
            ref: passwordRef
        }
    ]


    //FORM SUBMISSION
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(prev => !prev);

        const id = idRef.current.value;
        const password = passwordRef.current.value;

        if (!passwordRegex.test(password) || id.trim() === "") {
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

            const res = await axios.post(`${baseUrl}/api/user/login`, { id, password }, { withCredentials: true });

            dispatch(fetchUser());

            navigate("/user/profile");
            
            setLoading(prev => !prev);
            toast.success('SigIn Successfull!', {
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
            <div className="signin-option self-end text-[0.9rem] text-gray-500">
                <Link to="/auth/signup" className='text-[#dedede] underline flex items-center gap-1'><FaArrowLeftLong className='text-[0.6rem]' />Create account</Link>
            </div>
            <div className="signup-form-container w-[80%]">
                <h2 className="signup-heading text-[1.2rem] font-medium leading-none">Sign in to CodeLab</h2>
                <form onSubmit={submitHandler} className="signup-form mt-8 flex flex-col gap-3">
                    {
                        inputs.map((inp) => (
                            <div key={`signin-${inp.name}`} className="input-container flex flex-col">
                                <label htmlFor={`${inp.name}-input`} className="input-label capitalize">{inp.name}</label>
                                <input onChange={(e) => inp.name === "password" && passwordChecker(e.target.value, setPassErr)} ref={inp.ref} className='placeholder:capitalize outline-0 border border-gray-700 rounded-md py-1.5 px-2' id={`signin-${inp.name}-input`} type={`${inp.type}`} placeholder={`${inp.name}`} />
                                {
                                    inp.msg &&
                                    <p className={`input-message ${passErr ? passErr === "Valid Password!" ? "text-green-600" : "text-red-600" : "text-gray-600"} text-[0.8rem]`}>{passErr ? passErr : inp.msg}</p>
                                }
                            </div>
                        ))
                    }
                    <button className='w-full rounded-md bg-[#dedede] py-1.5 text-[black] font-medium mt-2'>Sign In</button>
                </form>
                <button className='google-sign-btn flex items-center justify-center gap-1 w-full py-1.5 mt-3 text-[black] font-semibold bg-[#dedede] rounded-md'>Sign in with <FcGoogle /></button>
            </div>
        </div>
    )
}

export default Signin