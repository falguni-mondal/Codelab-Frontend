import React from 'react'
import UpdateItem from './UpdateItem'
import { TbMoodEmpty } from "react-icons/tb";


const Updates = () => {
    return (
        <div className='w-[30%] h-[80vh] overflow-y-auto prime-bg mt-14 p-6 rounded-lg border border-gray-700'>
            <h2 className='home-updates-heading text-[0.9rem] font-medium mb-4'>Recent Updates</h2>
            {/* <div className="update-list flex flex-col gap-1.5">
                <UpdateItem />
                <UpdateItem />
                <UpdateItem />
                <UpdateItem />
                <UpdateItem />
                <UpdateItem />
                <UpdateItem />
                <UpdateItem />
                <UpdateItem />
            </div> */}
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

export default Updates