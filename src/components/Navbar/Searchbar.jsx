import React from 'react'
import { IoIosSearch } from "react-icons/io";


const Searchbar = () => {
  return (
    <div className='relative w-[300px]'>
        <input className='px-10 py-1 rounded-md w-full text-[0.9rem] bg-[#010409] hover:bg-[#080b0f] transition-all duration-200 font-medium placeholder:text-zinc-400 placeholder:font-normal border-zinc-600 border outline-0' type="text" placeholder='Search / Jump to...' />
        <IoIosSearch className='absolute left-3 top-[50%] -translate-y-[50%] text-[1.35rem] text-zinc-500' />
    </div>
  )
}

export default Searchbar