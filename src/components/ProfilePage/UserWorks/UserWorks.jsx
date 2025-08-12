import React from 'react'
import UserProjects from './UserProjects'
import UserSnippets from './UserSnippets'

const UserWorks = ({works}) => {
  return (
    <div className='flex gap-6 w-full h-full'>
        <UserProjects />
        <UserSnippets snippets={works.snippets} />
    </div>
  )
}

export default UserWorks