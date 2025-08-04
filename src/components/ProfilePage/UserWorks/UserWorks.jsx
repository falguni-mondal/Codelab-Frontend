import React from 'react'
import UserProjects from './UserProjects'
import UserSnippets from './UserSnippets'

const UserWorks = () => {
  return (
    <div className='flex gap-6 w-full h-full'>
        <UserProjects />
        <UserSnippets />
    </div>
  )
}

export default UserWorks