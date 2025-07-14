import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/features/authSlice';

// ICONS
import { AiOutlineUser } from "react-icons/ai";
import { IoFolderOpenOutline } from "react-icons/io5";
import { AiOutlineSnippets } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuUserRoundCheck } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { PiSignOut } from "react-icons/pi";
import { Link } from 'react-router-dom';


const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const profileOptions = [
    {
      title: "profile",
      link: `/user/${user?.id}/profile`,
      icon: AiOutlineUser,
    },
    {
      title: "notifications",
      link: `/user/${user?.id}/notifications`,
      icon: IoIosNotificationsOutline,
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
  }

  return (
    user &&
    <div className='w-full flex justify-center'>
      <div className="w-1/2 flex flex-col border-x-3 border-[#151B23]">
        <div className="user-basic-dets flex items-center gap-3 border-b border-b-[#0D1117] px-10 py-5">
          <div className="user-dp w-[10rem] h-[10rem] rounded-full">
            {
              user.image ? <img className='w-full h-full object-cover rounded-full' src={user.image} alt={`${user.username}_dp`} />
                :
                <div className='w-full h-full rounded-full flex justify-center items-center' style={{ background: `${user.background}` }}>
                  <p className='text-[4rem] opacity-85 font-bold'>{user.username.charAt(0).toUpperCase()}</p>
                </div>
            }
          </div>
          <div className="user-dets">
            <p className='text-[1.2rem] font-semibold'>{`${user.username}`}</p>
            <p className='text-[1rem] text-zinc-400'>{`${user.email}`}</p>
          </div>
        </div>
        <ul className="profile-option-list text-gray-300 px-10 py-5">
          {
            profileOptions.map(({title, link, icon:Icon}) => (
              <li className='profile-option py-2'>
                <Link className='flex items-center gap-1 capitalize' to={link}>
                  <Icon className='text-[1.25rem]'/>
                  {title}
                </Link>
              </li>
            ))
          }
          <li className='profile-option py-2'>
            <button onClick={logoutHandler} className='cursor-pointer flex items-center gap-1'><PiSignOut className='text-[1.3rem]' />Sign out</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile