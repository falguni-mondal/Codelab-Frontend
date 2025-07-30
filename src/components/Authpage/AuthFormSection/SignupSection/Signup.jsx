import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { Bounce, toast, Zoom } from 'react-toastify';

import { passwordChecker, usernameChecker } from '../../../../utils/functions/validator';
import { passwordRegex, unameRegex } from '../../../../utils/functions/regex';
import { baseUrl } from '../../../../utils/functions/keys';
import { fetchUser } from '../../../../redux/features/authSlice';

import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Signup = ({ setLoading }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const [passErr, setPassErr] = useState(null);
    const [unameErr, setUnameErr] = useState(null);
    const [nameErr, setNameErr] = useState(null);
    const [showPronouns, setShowPronouns] = useState(false);
    const [pronouns, setPronouns] = useState("");

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

    const checkName = (e) => {
        if(e.target.value.length === 0){
            return setNameErr(null);
        }
        if(e.target.value.split(' ').join('').length < 6){
            setNameErr("Invalid Name!");
        }
        else{
            setNameErr("Valid Name!");
        }
    }

    const pronounsSetter = (value) => {
        setShowPronouns(false);
        setPronouns(value);
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(prev => !prev);

        let name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const username = usernameRef.current.value;

        if (!passwordRegex.test(password) || !unameRegex.test(username) || email.split(' ').join('') === "" || name.split(' ').join('').length < 6 || pronouns === "") {
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

        name = name.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");

        try {
            const res = await axios.post(`${baseUrl}/api/user/create`, { name, pronouns, email, password, username }, { withCredentials: true });

            setLoading(prev => !prev);
            emailRef.current.value = "";
            passwordRef.current.value = "";
            usernameRef.current.value = "";
            setPassErr(null);
            setUnameErr(null);

            dispatch(fetchUser());
            navigate("/user/verify");

            toast.success('SignUp Successfull!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        } catch (err) {
            setLoading(prev => !prev);
            toast.error(`${err.response?.data}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    return (
        <div className="signup-form-outer w-1/2 h-full overflow-y-scroll slim-scrollbar relative p-10 pt-0 flex flex-col items-center gap-12">
            <div className="signin-option w-full sticky top-0 right-0 pt-10 pb-3 flex justify-end sec-bg gap-2 text-[0.9rem] text-gray-500">
                Already have an account <Link to="/auth/signin" className='text-[#dedede] underline flex items-center gap-1'>Sign in <FaArrowRightLong className='text-[0.6rem]' /></Link>
            </div>
            <div className="signup-form-container w-[80%]">
                <h2 className="signup-heading text-[1.2rem] font-medium leading-none">Sign up to CodeLab</h2>
                <form onSubmit={submitHandler} className="signup-form w-full mt-8 flex flex-col gap-3">

                    <div className="input-container w-full flex flex-col">
                        <label htmlFor="signup-name-input" className="input-label">Full Name</label>
                        <input onChange={ checkName } ref={nameRef} className='outline-0 border border-gray-700 rounded-md py-1.5 px-2' id="signup-name-input" type="text" placeholder="Full Name" />
                        <p className={`input-message ${nameErr ? nameErr === "Valid Name!" ? "text-green-600" : "text-red-600" : "text-gray-600"} text-[0.8rem]`}>{nameErr ? nameErr : "Name must be atleast of 6 characters without spaces"}</p>
                    </div>
                    <div className="input-container w-full flex flex-col relative">
                        <label htmlFor="signup-name-input" className="input-label">Pronouns</label>
                        <div onClick={() => setShowPronouns(prev => !prev)} className='py-1.5 px-2 w-1/3 rounded-md border border-gray-700 flex gap-1 items-center justify-between third-bg cursor-pointer text-gray-400 text-[0.95rem] select-none'>{pronouns ? pronouns : "Select Pronouns"} <IoIosArrowDown/></div>

                        <ul className={`pronouns-option-container ${showPronouns ? "scale-100" : "scale-0"} absolute top-[102%] left-0 rounded-md backdrop-blur-md overflow-hidden transition-all duration-200 border border-gray-900`}>
                            <li onClick={() => pronounsSetter("he/him")} className='px-3 pr-10 py-1 hover:bg-zinc-400 hover:text-black transition-all duration-200 cursor-pointer'>he/him</li>
                            <li onClick={() => pronounsSetter("she/her")} className='px-3 pr-10 py-1 hover:bg-zinc-400 hover:text-black transition-all duration-200 cursor-pointer'>she/her</li>
                            <li onClick={() => pronounsSetter("others")} className='px-3 pr-10 py-1 hover:bg-zinc-400 hover:text-black transition-all duration-200 cursor-pointer'>others</li>
                        </ul>
                    </div>
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