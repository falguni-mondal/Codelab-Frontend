import React from 'react'
import { IoBookmarkOutline } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";


const FeedItem = () => {
    return (
        <div className='home-feed-item w-full p-5 border-b border-gray-700'>
            <div className="feed-header flex items-center justify-between">
                <div className="feed-title flex items-center gap-2.5">
                    <img className='feed-user-image w-[1.2rem] h-[1.2rem] rounded-full object-cover' src="https://images.unsplash.com/photo-1691692677524-7ee6b93adffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h3 className="feed-project-name text-[0.9rem] font-medium">user-name/project-name</h3>
                </div>
                <div className="save-opn-container flex items-center rounded-md border border-gray-700 minor-bg overflow-hidden">
                    <button className="save-btn flex items-center gap-2 text-[0.8rem] font-medium px-3">
                        <IoBookmarkOutline className='text-[0.9rem]' />
                        Save
                    </button>
                    <div className="list-option text-[1.95rem] border-l border-gray-700 overflow-hidden">
                        <BiSolidDownArrow className='px-3' />
                    </div>
                </div>
            </div>

            <p className="feed-desc text-[0.9rem] mt-3 w-[80%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos praesentium totam exercitationem in pariatur accusantium cum excepturi provident, ratione odio laborum sunt reprehenderit consequuntur sapiente minus tenetur ut velit iusto.
            </p>

            <div className="feed-dets flex gap-3 mt-3">
                <div className="tech-highlight w-full flex gap-1 items-center text-[0.8rem] text-gray-500">
                    <span className='inline-block bg-amber-500 w-[0.6rem] h-[0.6rem] rounded-full'></span>
                    JavaScript
                </div>

                <div className="feed-date-time text-[0.8rem] text-gray-500 flex gap-1.5">
                    <span className="feed-date inline-block">12.05.2025</span>
                    <span className="feed-date inline-block">08:20pm</span>
                </div>
            </div>
        </div>
    )
}

export default FeedItem