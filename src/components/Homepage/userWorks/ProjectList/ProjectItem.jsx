import React from 'react'

const ProjectItem = () => {
    return (
        <div className='project-item flex gap-3 items-center text-[0.9rem]'>
            <img className='display-img w-[1.2rem] h-[1.2rem] rounded-full object-cover' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="" />
            <h3 className="project-name hover:underline font-medium">project-name</h3>
            <p className="last-updated text-gray-500 text-[0.8rem]">11.05.2025 11:49pm</p>
        </div>
    )
}

export default ProjectItem