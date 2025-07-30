import { useEffect, useRef, useState } from 'react';

import { userAvatar } from '../../../utils/functions/avatarGenerator';

import { IoCameraOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseUrl } from '../../../utils/functions/keys';

const UserDetsFrom = ({ user, setFormReveal, userFetcher, setLoading }) => {
    const uploadRef = useRef();
    const [image, setImage] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);
    const [showPronouns, setShowPronouns] = useState(false);
    const [pronouns, setPronouns] = useState("");
    const [bioCharCount, setBioCharCount] = useState(0);
    const { register, handleSubmit } = useForm();

    const linkInputs = [
        {
            name: "email",
            type: "email",
            defValue: user?.email,
        },
        {
            name: "website",
            type: "website",
            defValue: user?.website,
        },
        {
            name: "linkedin",
            type: "linkedin",
            defValue: user?.linkedin,
        },
        {
            name: "github",
            type: "github",
            defValue: user?.github,
        },
    ]

    const imageSetter = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPreviewURL(reader.result);
            })

            reader.readAsDataURL(file);
        }
    }

    const uploadTrigger = () => {
        uploadRef.current.click();
    }

    const pronounsSetter = (value) => {
        setShowPronouns(false);
        setPronouns(value);
    }

    const bioLimiter = (e) => {
        let bio = e.target.value;

        if (bio.length > 300) {
            bio = bio.slice(0, 300);
            e.target.value = bio;
            setBioCharCount(bio.length);
            return;
        }

        setBioCharCount(bio.length);
    }

    useEffect(() => {
        if (user) {
            setPronouns(user.pronouns);
            setImage(user.image);
        }
    }, [user]);

    const submitHandler = async (data) => {
        try {
            setLoading(true);

            const { name, bio, email, website, linkedin, github } = data;
            if (!image && pronouns === user.pronouns && name === user.name && bio === user.bio && email === user.email && website === user.website && linkedin === user.linkedin && github === user.github) {
                setFormReveal(false);
                return;
            }

            const formData = new FormData();
            if (image) formData.append("image", image);

            formData.append("name", name);
            formData.append("pronouns", pronouns);
            formData.append("bio", bio);
            formData.append("email", email);
            formData.append("website", website);
            formData.append("linkedin", linkedin);
            formData.append("github", github);

            const res = await axios.post(`${baseUrl}/api/user/profile/update`, formData, {withCredentials: true,});
            await userFetcher();
            setLoading(false);
            setFormReveal(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        user &&
        <div className='user-dets-form-section w-full h-full overflow-y-auto pr-5 slim-scrollbar' id='user-dets-form-section'>
            <div className="user-image-form w-full aspect-square rounded-full overflow-hidden border-2 border-gray-800 relative">
                <img className="w-full h-full object-cover" src={previewURL || image || userAvatar(user.username)} alt={`${user.username}_image`} />

                <div onClick={uploadTrigger} className='user-image-overlay bg-[#e4ebff18] absolute w-full h-full rounded-full top-0 left-0 z-10 flex flex-col justify-center items-center cursor-pointer'>
                    <IoCameraOutline className='text-[4rem]' />
                    Click to change
                </div>
                <input onChange={imageSetter} ref={uploadRef} type="file" accept="image/*" />
            </div>

            <form onSubmit={handleSubmit(submitHandler)} className="user-descrition-form w-full mt-5">
                <div className="user-name-inp-container">
                    <label className='text-[0.9rem] text-gray-500' htmlFor="user-name-inp">Name</label>
                    <input {...register("name")} type="text" className="user-name-inp text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700" defaultValue={user.name} id='user-name-inp' />
                </div>

                <div className="user-pronouns-inp-container w-full flex flex-col relative mt-1">
                    <label className="text-[0.9rem] text-gray-500">Pronouns</label>
                    <div onClick={() => setShowPronouns(prev => !prev)} className='py-1 px-3 w-full rounded border border-gray-700 flex gap-1 items-center justify-between cursor-pointer text-gray-200 text-[0.9rem] select-none'>{pronouns ? pronouns : "Select Pronouns"} <IoIosArrowDown /></div>

                    <ul className={`pronouns-option-container ${showPronouns ? "scale-100" : "scale-0"} absolute top-[102%] left-0 z-10 rounded-md backdrop-blur-md bg-[#0b182b44] overflow-hidden transition-all duration-200 border border-gray-900`}>
                        <li onClick={() => pronounsSetter("he/him")} className='px-3 pr-10 py-1 hover:bg-zinc-300 hover:text-black transition-all duration-200 cursor-pointer border-b border-gray-900'>he/him</li>
                        <li onClick={() => pronounsSetter("she/her")} className='px-3 pr-10 py-1 hover:bg-zinc-300 hover:text-black transition-all duration-200 cursor-pointer border-b border-gray-900'>she/her</li>
                        <li onClick={() => pronounsSetter("others")} className='px-3 pr-10 py-1 hover:bg-zinc-300 hover:text-black transition-all duration-200 cursor-pointer'>others</li>
                    </ul>
                </div>

                <div className="user-bio-inp-container mt-1 relative">
                    <label className='text-[0.9rem] text-gray-500' htmlFor="user-bio-inp">Bio</label>
                    <textarea {...register("bio")} onChange={bioLimiter} type="text" className="user-bio-inp text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700 resize-none placeholder:text-gray-500 slim-scrollbar" defaultValue={user.bio} rows={5} id='user-bio-inp' placeholder='Write about you...' />
                    <div className='absolute bottom-2 right-2 text-[0.9rem] text-gray-500'>{`${bioCharCount}/300`}</div>
                </div>

                {
                    linkInputs.map(input => (
                        <div key={`${input.name}-key`} className={`user-${input.name}-inp-container mt-2`}>
                            <label className='text-[0.9rem] text-gray-500 capitalize' htmlFor={`user-${input.name}-inp`}>{input.name}</label>
                            <input {...register(`${input.name}`)} type={input.type} className={`user-${input.name}-inp text-[0.9rem] rounded w-full py-1 px-3 outline-0 border border-gray-700`} defaultValue={input.defValue} id={`user-${input.name}-inp`} />
                        </div>
                    ))
                }

                <div className="user-dets-form-btn-container w-full flex gap-2" id='user-dets-form-btn-container'>
                    <button type='button' onClick={() => setFormReveal(false)} className="cancel-btn border border-gray-700 rounded px-5 py-1 text-[0.9rem] font-medium mt-3 cursor-pointer">Cancel</button>
                    <button type='submit' className="save-btn bg-green-600 rounded px-5 py-1 text-[0.9rem] font-medium mt-3 cursor-pointer">Save</button>
                </div>
            </form>
        </div>
    )
}

export default UserDetsFrom