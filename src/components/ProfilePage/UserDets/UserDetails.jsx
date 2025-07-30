import { userAvatar } from "../../../utils/functions/avatarGenerator";

import { IoMailOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const UserDetails = ({ user, setFormReveal }) => {

    return (
        user &&
        <div className="user-dets-container w-full h-full pr-5 overflow-y-auto slim-scrollbar" id="user-dets-container">
            <div className="user-image w-full aspect-square rounded-full overflow-hidden border-2 border-gray-800">
                <img className="w-full h-full object-cover" src={user.image || userAvatar(user.username)} alt={`${user.username}_image`} />
            </div>
            <div className="user-descrition w-full mt-5">
                <div className="user-basic-description mb-3">
                    <h1 className="user-name text-[1.5rem] font-bold leading-none">{user.name}</h1>
                    <div className="user-username-pronouns text-[1.25rem] flex gap-2 font-thin text-gray-400 leading-7">
                        <p className="user-username">{user.username}</p>
                        <p>{user.pronouns}</p>
                    </div>
                </div>
                {
                    user.bio &&
                    <div className="user-bio leading-tight mb-3">{user.bio}</div>
                }

                <div className="user-followers-followings text-[0.9rem] text-gray-400 font-medium mb-3"><span className="text-white">{user.followers.length}</span> followers • <span className="text-white">{user.followings.length}</span> following</div>

                <ul className="user-links text-[0.9rem] text-white">
                    <li className="user-mail flex items-center gap-1.5 font-medium mb-1">
                        <IoMailOutline className="text-gray-400 text-[1.2rem]" />
                        <p>{user.email}</p>
                    </li>
                    {user.website && <li className="user-website flex items-center gap-1.5 font-medium mb-1">
                        <IoIosLink className="text-gray-400 text-[1.2rem]" />
                        <a href={user.website} target="_blank">{user.website}</a>
                    </li>}
                    {user.linkedin && <li className="user-linkedin flex items-center gap-1.5 font-medium mb-1">
                        <IoLogoLinkedin className="text-gray-400 text-[1.2rem]" />
                        <a href={user.linkedin} target="_blank">{user.linkedin}</a>
                    </li>}
                    {user.github && <li className="user-github flex items-center gap-1.5 font-medium">
                        <IoLogoGithub className="text-gray-400 text-[1.2rem]" />
                        <a href={user.github} target="_blank">{user.github}</a>
                    </li>}
                </ul>
                <button onClick={() => setFormReveal(true)} className="edit-btn third-bg border border-gray-700 rounded w-full py-1 text-[0.9rem] font-medium mt-3 cursor-pointer">Edit profile</button>

            </div>
        </div>
    )
}

export default UserDetails;