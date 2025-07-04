import React from 'react'
import loading from "../../assets/loading.gif";

const Loading = () => {
  return (
    <div className='w-full h-full fixed top-0 left-0 bg-[#0000005d] flex flex-col gap-1 justify-center items-center pb-10'>
        <img className='lg:scale-[0.75]' src={loading} alt="loading.gif" />
        <span className='text-[0.95rem]'>Wait a moment...</span>
    </div>
  )
}

export default Loading