import errImg from "../../assets/pageErr.png"

const PageErr = () => {
    return (
        <div className='h-full w-full flex flex-col justify-center items-center pb-[15vh] prime-bg'>
            <img src={errImg} className='w-[70%] md:w-1/2 lg:w-1/3 object-cover' alt="" />
            <div className="text-[#407BFF] text-[1.5rem] leading-0">Page not found</div>
        </div>
    )
}

export default PageErr