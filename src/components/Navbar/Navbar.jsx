import Searchbar from './Searchbar'
import LoginBtn from './LoginBtn'
import { BsFolderPlus } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { ImLab } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileBtn from './ProfileBtn';



const Navbar = () => {

    const user = useSelector((state)=> state.auth.user);

    return (
        <div className='w-full h-[10vh] flex justify-between items-center px-10 py-4 border-b-[1px] border-gray-700 prime-bg'>
            <div className="left-nav">
                <Link to="/" className="logo flex items-center text-[1.1rem] font-medium">CodeLab<ImLab className='text-[#00823F]' /></Link>
            </div>
            <div className="right-nav flex items-center gap-5">
                <Searchbar />
                <button className='flex items-center gap-2 border border-zinc-600 rounded-md px-2 py-1 text-[1.2rem] font-medium'>
                    <BsFolderPlus />
                    <BiSolidDownArrow className='text-[0.6rem]' />
                </button>
                |
                {
                    user ? <ProfileBtn name={user.username} image={user.image} bg={user.background}/>
                    :
                    <LoginBtn />
                }
            </div>
        </div>
    )
}

export default Navbar