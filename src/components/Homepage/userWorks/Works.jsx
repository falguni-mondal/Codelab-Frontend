import { HiOutlineFolderAdd } from "react-icons/hi";
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList/ProjectList'
import { TbMoodEmpty } from "react-icons/tb";
import { useEffect, useState } from "react";


const Works = () => {

    const [optionReveal, setOptionReveal] = useState(false);

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if(e.target.id !== "work-create-btn" && e.target.id !== "create-new-icon"){
                setOptionReveal(false);
            }
        })
    }, [])

    return (
        <div className="projects px-10 sec-bg w-[25%] min-h-[90vh] overflow-y-auto pt-14 border-r border-gray-700 sticky top-[0px]">
            <div className="header w-full flex justify-between items-center relative">
                <h2 className='text-[0.95rem] font-medium'>Your Works</h2>
                <button onClick={() => setOptionReveal(prev => !prev)} className='flex gap-1 py-1 px-1.5 border border-zinc-400 bg-green-700 hover:bg-green-600 transition-all duration-300 text-[0.8rem] font-medium rounded-md' id="work-create-btn"><HiOutlineFolderAdd className='text-[1.3rem]' id="create-new-icon"/> New</button>
                <div className={`work-btn-options ${optionReveal ? "scale-100" : "scale-0"} absolute top-[110%] right-0 transition-all duration-200 rounded-md backdrop-blur-xs bg-[#bddcff18] border-2 border-gray-800 flex flex-col overflow-hidden text-[0.9rem] font-medium`}>
                    <Link to="/user/project/create" className="p-2 border-b border-b-gray-700 hover:text-black hover:bg-zinc-300 transition-all duration-200">New Project</Link>
                    <Link to="/user/snippet/create" className="p-2 hover:text-black hover:bg-zinc-300 transition-all duration-200">New Snippet</Link>
                </div>
            </div>
            <div className="project-search-bar w-full">
                <input className='third-bg rounded-md px-5 py-[5px] text-[0.9rem] w-full mt-2 outline-0 border border-gray-700' placeholder='Find a project...' type="text" />
            </div>
            {/* <ProjectList /> */}
            <div className="empty-msg w-full text-gray-600 flex flex-col items-center gap-1 pt-14">
                <div className="empty-icon text-[5rem]">
                    <TbMoodEmpty />
                </div>
                <p className="empty-msg">
                    No such Content.
                </p>
            </div>
        </div>
    )
}

export default Works