import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/features/authSlice';

// ICONS
import { AiOutlineUser } from "react-icons/ai";
import { IoFolderOpenOutline } from "react-icons/io5";
import { AiOutlineSnippets } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuUserRoundCheck } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { PiSignOut } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';

const ProfileMenu = ({revealMenu, setRevealMenu}) => {

    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const profileOptions = [
        {
            title: "profile",
            link: `/user/${user?.id}/profile`,
            icon: AiOutlineUser,
        },
        {
            title: "notifications",
            link: `/user/${user?.id}/notifications`,
            icon: IoMdNotificationsOutline,
        },
        {
            title: "your projects",
            link: `/user/${user?.id}/projects`,
            icon: IoFolderOpenOutline,
        },
        {
            title: "your snippets",
            link: `/user/${user?.id}/snippets`,
            icon: AiOutlineSnippets,
        },
        {
            title: "saved",
            link: `/user/${user?.id}/saved`,
            icon: IoBookmarkOutline,
        },
        {
            title: "followers",
            link: `/user/${user?.id}/followers`,
            icon: HiOutlineUserGroup,
        },
        {
            title: "followings",
            link: `/user/${user?.id}/followings`,
            icon: LuUserRoundCheck,
        },
        {
            title: "Settings",
            link: `/user/${user?.id}/settings`,
            icon: LuSettings,
        },
    ]

    const logoutHandler = () => {
        dispatch(logoutUser());
        navigate("/");
    }

    const clickHandler = (e) => {
        if(e.target.id === "profile-menu-bg" || e.target.className.indexOf("profile-menu-option") !== -1){
            setRevealMenu(false);
        }
    }

    return (
        user &&
        <div onClick={clickHandler} className={`${revealMenu ? "" : "hidden"} w-full h-full fixed top-0 right-0 z-[10] bg-[#b9ccff11] pr-[10px] flex justify-end`} id="profile-menu-bg">
            <div className='h-fit max-h-full w-[300px] rounded-xl prime-bg border-gray-600 border p-4' id='profile-menu-container'>
                <div className="user-basic-dets flex items-center gap-3 pb-4 mb-3 border-b border-b-gray-600">
                    <div className="user-dp w-[3rem] h-[3rem] rounded-full shrink-0">
                        {
                            user.image ? <img className='w-full h-full object-cover rounded-full' src={user.image} alt={`${user.username}_dp`} />
                                :
                                <div className='w-full h-full rounded-full flex justify-center items-center' style={{ background: `${user.background}` }}>
                                    <p className='opacity-85 font-bold'>{user.username.charAt(0).toUpperCase()}</p>
                                </div>
                        }
                    </div>
                    <div className="user-dets">
                        <p className='text-[0.9rem] font-semibold'>{`${user.username}`}</p>
                        <p className='text-[0.9rem] text-zinc-400'>{`${user.email}`}</p>
                    </div>
                </div>
                <ul className="profile-menu-list text-gray-300 text-[0.9rem]">
                    {
                        profileOptions.map(({ title, link, icon: Icon }) => (
                            <li key={`${title}-list`} className='py-2'>
                                <Link className='profile-menu-option flex items-center gap-1.5 capitalize' to={link}>
                                    <Icon className={`text-[1.1rem]`} />
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                    <li className='py-2'>
                        <button onClick={logoutHandler} className='profile-menu-option cursor-pointer flex items-center gap-1'><PiSignOut className='text-[1.1rem]' />Sign out</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileMenu