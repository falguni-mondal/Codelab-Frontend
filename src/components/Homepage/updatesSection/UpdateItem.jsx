import React from 'react'
import { Link } from 'react-router-dom'

const UpdateItem = () => {
    return (
        <div className='update-item-container'>
            <p className="update-time-date text-[0.8rem] font-medium">
                <span className='inline-block text-[1.3rem] mr-1 leading-none'>•</span>
                <span className="update-date inline-block text-gray-600 mr-1">14.05.2025</span>
                <span className="update-time inline-block text-gray-600">09:42am</span>
            </p>
            <Link>
                <p className="update-msg text-[0.9rem] leading-tight pl-3">
                    Changes in project-name by Aditya Sharma and 2 others.
                </p>
            </Link>
        </div>
    )
}

export default UpdateItem