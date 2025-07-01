import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { Bounce, toast, Zoom } from 'react-toastify';

const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const [passErr, setPassErr] = useState(null);
    const [unameErr, setUnameErr] = useState(null);

    const baseUrl = import.meta.env.VITE_TEST_API;

    const inputs = [
        {
            name: "email",
            type: "email",
            ref: emailRef
        },
        {
            name: "password",
            type: "password",
            msg: "Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.",
            ref: passwordRef
        },
        {
            name: "username",
            type: "text",
            msg: "Username should be atleast 6 characters, may only contain alphanumeric characters or single hyphen, cannot begin or end with a hyphen, and can not begin with number.",
            ref: usernameRef
        }
    ]

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    const unameRegex = /^(?!\d)(?=[A-Za-z0-9-]{6,}$)(?!.*--)(?!.*[^A-Za-z0-9-])(?=(?:.*[A-Za-z]))^(?!.*-.*-)(?!^-)(?!.*-$)[A-Za-z0-9-]+$/;
    let timer = null;

    const passwordChecker = () => {

        const value = passwordRef.current.value

        if (value.length === 0) {
            setPassErr(null);
            return clearTimeout(timer);
        }

        clearTimeout(timer);

        timer = setTimeout(() => {

            setPassErr(passwordRegex.test(value) ? "Valid Password!" : "Invalid Password!");

        }, 1500)

    }

    const usernameChecker = () => {
        const value = usernameRef.current.value;

        if (value.length === 0) {
            setUnameErr(null);
            return clearTimeout(timer);
        }

        clearTimeout(timer);

        timer = setTimeout(async () => {
            if (!unameRegex.test(value)) {
                setUnameErr("Invalid Username!");
                return;
            }
            else {
                try {
                    const res = await axios.post(`${baseUrl}/api/user/check/username`, { username: value });
                    console.log(res);
                    setUnameErr(res.data.available ? "Available!" : "Unavailable!");
                } catch (err) {
                    toast.error("Network Error!", {
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
            }

        }, 1000);

    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!passwordRegex.test(passwordRef.current.value) || !unameRegex.test(usernameRef.current.value) || emailRef.current.value.trim() === "") {
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
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            username: usernameRef.current.value
        }

        try {
            const res = await axios.post(`${baseUrl}/api/user/create`, data);
            console.log(res.data);
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
                                <input onChange={(e) => inp.name === "password" ? passwordChecker() : inp.name === "username" ? usernameChecker() : undefined} ref={inp.ref} className='placeholder:capitalize outline-0 border border-gray-700 rounded-md py-1.5 px-2' id={`signup-${inp.name}-input`} type={`${inp.type}`} placeholder={`${inp.name}`} />
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