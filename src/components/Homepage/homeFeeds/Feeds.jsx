import React from 'react'
import { IoFilter } from "react-icons/io5";
import FeedList from './feedList/FeedList';


const Feeds = () => {
    return (
        <section className='home-feed-section w-[70%] prime-bg p-6'>
            <div className="home-feed-header flex justify-between items-center">
                <h2 className="home-feed-heading text-[1.6rem] font-medium">
                    Feed
                </h2>
                <div className="filter-btn-container flex items-center gap-2 px-3 py-1 rounded-md minor-bg border border-gray-700">
                    <IoFilter />
                    <button className='filter-btn text-[0.9rem] font-medium'>
                        Filter
                    </button>
                </div>
            </div>

            <div className="feed-list-container w-full rounded-lg border border-gray-700 mt-3 overflow-hidden">
                <FeedList/>
            </div>
        </section>
    )
}

export default Feeds