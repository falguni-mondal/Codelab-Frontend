import React from 'react'
import { Link } from 'react-router-dom'

const UserSnippets = ({snippets}) => {
  return (
    <div className='w-1/2 h-full flex flex-col gap-3'>
        <h1 className='user-projects-heading text-[1.25rem] font-medium'>Snippets</h1>
        <div className='w-full rounded-xl sec-bg flex-auto p-3 flex gap-3 flex-wrap'>
            {
              snippets.map(item => (
                <Link className='snippet min-w-[140px] max-w-1/2 w-1/2 h-fit p-4 bg-[#171f2c] rounded-lg text-[0.9rem]' to={`/editor/${item._id}`}>
                  <h2 className='snippet-title font-medium'>{item.name}</h2>
                  <p className='text-gray-500'>Language: {item.language}</p>
                  <p></p>
                </Link>
              ))
            }
        </div>
    </div>
  )
}

export default UserSnippets