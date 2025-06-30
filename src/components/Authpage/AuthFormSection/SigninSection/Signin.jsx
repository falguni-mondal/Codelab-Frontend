import { useRef } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Signin = () => {

    const idRef = useRef();
    const passwordRef = useRef();

        const inputs = [
        {
            name : "email / username",
            type : "text",
            ref : idRef
        },
        {
            name : "password",
            type : "password",
            msg : "Password should be at least 15 characters OR at least 8 characters including a number and a uppercase letter.",
            ref : passwordRef
        }
    ]

    const submitHandler = async (e) => {
        e.preventDefault();
        const baseUrl = import.meta.env.VITE_TEST_API;

        const res = await axios.post(`${baseUrl}/api/user/signin`, {idRef, passwordRef});
        console.log(res);
        
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
                                <input ref={inp.ref} className='placeholder:capitalize outline-0 border border-gray-700 rounded-md py-1.5 px-2' id={`signin-${inp.name}-input`} type={`${inp.type}`} placeholder={`${inp.name}`} />
                                {
                                    inp.msg &&
                                    <p className='input-message text-gray-600 text-[0.8rem]'>{inp.msg}</p>
                                }
                            </div>
                        ))
                    }
                    <button className='w-full rounded-md bg-[#dedede] py-1.5 text-[black] font-medium mt-2'>Sign In</button>
                </form>
                <button className='google-sign-btn flex items-center justify-center gap-1 w-full py-1.5 mt-3 text-[black] font-semibold bg-[#dedede] rounded-md'>Sign in with <FcGoogle/></button>
            </div>
        </div>
    )
}

export default Signin