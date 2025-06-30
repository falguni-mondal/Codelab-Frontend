import React from 'react'
import Searchbar from './Searchbar'
import LoginBtn from './LoginBtn'
import { BsFolderPlus } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { ImLab } from "react-icons/im";
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='w-full h-[10vh] flex justify-between items-center px-10 py-4 border-b-[1px] border-gray-700 prime-bg'>
            <div className="left-nav">
                <Link to="/" className="logo flex items-center text-[1.1rem] font-medium">CodeLab<ImLab /></Link>
            </div>
            <div className="right-nav flex items-center gap-5">
                <Searchbar />
                <button className='flex items-center gap-2 border border-zinc-600 rounded-md px-2 py-1 text-[1.2rem] font-medium'>
                    <BsFolderPlus />
                    <BiSolidDownArrow className='text-[0.6rem]' />
                </button>
                |
                <LoginBtn />
            </div>
        </div>
    )
}

export default Navbar