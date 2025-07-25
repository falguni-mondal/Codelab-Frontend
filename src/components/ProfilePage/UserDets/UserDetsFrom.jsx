import { useEffect, useRef, useState } from 'react';

import { userAvatar } from '../../../utils/functions/avatarGenerator';

import { IoCameraOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const UserDetsFrom = ({ user, setFormReveal }) => {
    const imgRef = useRef();
    const [image, setImage] = useState(null);
    const [showPronouns, setShowPronouns] = useState(false);
    const [pronouns, setPronouns] = useState("");
    const [bioCharCount, setBioCharCount] = useState(0);

    const linkInputs = [
        {
            name: "email",
            type: "email",
            defValue: user?.email,

        }
    ]

    const uploadTrigger = () => {
        imgRef.current.click();
    }

    const pronounsSetter = (value) => {
        setShowPronouns(false);
        setPronouns(value);
    }

    const formCloser = () => {
        setFormReveal(false);
    }

    useEffect(() => {
        if (user) {
            setPronouns(user.pronouns);
        }
    }, [user])

    return (
        user &&
        <div className='user-dets-form-section w-full h-full overflow-y-auto pr-5 slim-scrollbar' id='user-dets-form-section'>
            <div className="user-image-form w-full aspect-square rounded-full overflow-hidden border-2 border-gray-800 relative">
                {
                    user.image ?
                        <img className="w-full h-full object-cover" src={user.image} alt={`${user.username}_image`} /> :
                        <img className="w-full h-full object-cover" src={(userAvatar(user.username))} />
                }
                <div onClick={uploadTrigger} className='user-image-overlay bg-[#e4ebff4f] absolute w-full h-full rounded-full top-0 left-0 z-10 flex flex-col justify-center items-center cursor-pointer'>
                    <IoCameraOutline className='text-[4rem]' />
                    Click to change
                </div>
                <input ref={imgRef} type="file" accept="image/*" />
            </div>
            <form className="user-descrition-form w-full mt-5">
                <div className="user-name-inp-container">
                    <label className='text-[0.9rem] text-gray-500' htmlFor="user-name-inp">Name</label>
                    <input type="text" className="user-name-inp third-bg text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700" defaultValue={user.name} id='user-name-inp' />
                </div>

                <div className="user-pronouns-inp-container w-full flex flex-col relative mt-1">
                    <label className="text-[0.9rem] text-gray-500">Pronouns</label>
                    <div onClick={() => setShowPronouns(prev => !prev)} className='py-1 px-3 w-full rounded border border-gray-700 flex gap-1 items-center justify-between third-bg cursor-pointer text-gray-200 text-[0.9rem] select-none'>{pronouns ? pronouns : "Select Pronouns"} <IoIosArrowDown /></div>

                    <ul className={`pronouns-option-container ${showPronouns ? "scale-100" : "scale-0"} absolute top-[102%] left-0 rounded-md backdrop-blur-md bg-[#00051348] overflow-hidden transition-all duration-200 border border-gray-900`}>
                        <li onClick={() => pronounsSetter("he/him")} className='px-3 pr-10 py-1 hover:bg-zinc-300 hover:text-black transition-all duration-200 cursor-pointer'>he/him</li>
                        <li onClick={() => pronounsSetter("she/her")} className='px-3 pr-10 py-1 hover:bg-zinc-300 hover:text-black transition-all duration-200 cursor-pointer'>she/her</li>
                        <li onClick={() => pronounsSetter("others")} className='px-3 pr-10 py-1 hover:bg-zinc-300 hover:text-black transition-all duration-200 cursor-pointer'>others</li>
                    </ul>
                </div>

                <div className="user-bio-inp-container mt-1 relative">
                    <label className='text-[0.9rem] text-gray-500' htmlFor="user-bio-inp">Bio</label>
                    <textarea type="text" className="user-bio-inp third-bg text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700 resize-none placeholder:text-gray-500" defaultValue={user.bio} rows={5} id='user-bio-inp' placeholder='Write about you...' />
                    <div className='absolute bottom-2 right-2'>{`${bioCharCount}/150`}</div>
                </div>
                {
                    linkInputs.map(input => (
                        <div className="user-email-inp-container mt-2">
                            <label className='text-[0.9rem] text-gray-500' htmlFor="user-email-inp">Email</label>
                            <input type="text" className="user-email-inp third-bg text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700" defaultValue={user.email} id='user-email-inp' />
                        </div>
                    ))
                }
                
                {/* <div className="user-email-inp-container mt-2">
                    <label className='text-[0.9rem] text-gray-500' htmlFor="user-email-inp">Email</label>
                    <input type="text" className="user-email-inp third-bg text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700" defaultValue={user.email} id='user-email-inp' />
                </div>
                <div className="user-website-inp-container mt-1">
                    <label className='text-[0.9rem] text-gray-500' htmlFor="user-website-inp">Website</label>
                    <input type="text" className="user-website-inp third-bg text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700" defaultValue={user.website} id='user-website-inp' />
                </div>
                <div className="user-linkedin-inp-container mt-1">
                    <label className='text-[0.9rem] text-gray-500' htmlFor="user-linkedin-inp">Linkedin</label>
                    <input type="text" className="user-linkedin-inp third-bg text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700" defaultValue={user.linkedin} id='user-linkedin-inp' />
                </div>
                <div className="user-github-inp-container mt-1">
                    <label className='text-[0.9rem] text-gray-500' htmlFor="user-github-inp">GitHub</label>
                    <input type="text" className="user-github-inp third-bg text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700" defaultValue={user.github} id='user-github-inp' />
                </div> */}

                <div className="user-dets-form-btn-container w-full flex gap-2" id='user-dets-form-btn-container'>
                    <button type='button' onClick={formCloser} className="cancel-btn third-bg border border-gray-700 rounded px-5 py-1 text-[0.9rem] font-medium mt-3 cursor-pointer">Cancel</button>
                    <button type='submit' className="save-btn bg-green-600 rounded px-5 py-1 text-[0.9rem] font-medium mt-3 cursor-pointer">Save</button>
                </div>
            </form>
        </div>
    )
}

export default UserDetsFrom