import axios from 'axios';
import React, { useRef, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Bounce, toast } from 'react-toastify';
import { baseUrl } from '../../utils/functions/keys';
import { useNavigate } from 'react-router-dom';


const SnippetForm = () => {
    const [reveal, setReveal] = useState(false);
    const [language, setLanguage] = useState(null);
    const nameRef = useRef(null);
    const descRef = useRef(null);
    const navigate = useNavigate();

    const langSetter = (value) => {
        setLanguage(value);
        setReveal(false);
    }

    const languages = [
        "C",
        "C++",
        "C#",
        "Java",
        "Python",
        "Html",
        "Css",
        "Javascript",
        "Typescript",
    ]

    const submitHandler = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;

        if(name === "" || !language){
            toast.error("Name or Language field is empty!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

            return;
        }

        const data = {
            name,
            description: descRef.current.value,
            language
        }

        const res = await axios.post(`${baseUrl}/api/snippet/create`, data, {withCredentials: true});
        navigate("/editor/res.data._id");
    }

    return (
        <div className='snippet-form-page w-full h-full pt-5'>
            <div className="snippet-form-container w-1/3 mx-auto h-full overflow-y-auto slim-scrollbar">

                <h1 className='snippet-form-heading text-[1.25rem] tracking-tight font-medium'>Create Snippet</h1>

                <form onSubmit={submitHandler} className='snippet-form w-full mt-5'>
                    <div className="inp-container mb-1">
                        <label className='text-[0.9rem] text-gray-500 font-medium' htmlFor="snippt-name-inp">Name</label>
                        <input ref={nameRef} type="text" className="snippt-name-inp text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700" id='snippt-name-inp' required/>
                    </div>
                    <div className="inp-container w-full mb-1">
                        <label className='text-[0.9rem] text-gray-500 font-medium' htmlFor="snippt-desc-inp">Description <span className='text-[0.7rem] italic'>(Optional)</span></label>
                        <input ref={descRef} type="text" className="snippt-desc-inp text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700" id='snippt-desc-inp' />
                    </div>
                    <div className="inp-container w-full mb-1 relative">
                        <label className='text-[0.9rem] text-gray-500 font-medium' htmlFor="snippt-desc-inp">Language</label>
                        <div onClick={() => setReveal(prev => !prev)} className="snippt-desc-inp text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700 flex justify-between items-center cursor-pointer text-gray-300">{language ? language : "Select Language"} <span><IoIosArrowDown /></span></div>
                        <div className={`language-opn-container ${reveal ? "" : "hidden"} w-full absolute top-[110%] left-0 bg-[#c4dcff11] backdrop-blur-xl rounded overflow-hidden`}>
                            <ul className='w-full h-[170px] overflow-auto slim-scrollbar'>
                                {
                                    languages.map(lang => (
                                        <li onClick={() => langSetter(lang)} className='w-full px-3 py-1 border-b border-[#c4dcff11] text-[0.9rem] cursor-pointer hover:bg-zinc-300 hover:text-black transition-all duration-200' key={`${lang}-key`}>{lang}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    

                    <button className='bg-zinc-300 text-black text-[0.9rem] font-medium w-full py-1 rounded mt-3 cursor-pointer' type='submit'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default SnippetForm