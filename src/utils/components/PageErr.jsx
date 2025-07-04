import React from 'react'
import errImg from "../../assets/pageErr.png"

const PageErr = () => {
    return (
        <div className='w-full flex justify-center items-center prime-bg'>
            <img src={errImg} className='w-[70%] md:w-1/2 lg:w-1/3 object-cover' alt="" />
        </div>
    )
}

export default PageErr