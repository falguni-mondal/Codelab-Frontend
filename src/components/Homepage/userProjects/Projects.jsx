import React from 'react'
import { HiOutlineFolderAdd } from "react-icons/hi";
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList/ProjectList'
import { TbMoodEmpty } from "react-icons/tb";


const Projects = () => {
    return (
        <div className="projects px-10 sec-bg w-[25%] min-h-[90vh] overflow-y-auto pt-14 border-r border-gray-700 sticky top-[0px]">
            <div className="header w-full flex justify-between items-center">
                <h2 className='text-[0.95rem] font-medium'>Your Projects</h2>
                <Link className='flex gap-1 py-1 px-1.5 border border-zinc-400 bg-green-700 hover:bg-green-600 transition-all duration-300 text-[0.8rem] font-medium rounded-md'><HiOutlineFolderAdd className='text-[1.3rem]' /> New</Link>
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

export default Projects