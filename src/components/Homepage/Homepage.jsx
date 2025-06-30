import React from 'react'
import Projects from './userProjects/Projects';
import Feeds from './homeFeeds/Feeds';
import Updates from './updatesSection/Updates';


const Homepage = () => {
  return (
    <div className='w-full flex'>
      <Projects />
      <div className="content w-[75%] h-[90vh] overflow-y-auto flex pr-10 prime-bg">
        <Feeds />
        <Updates />
      </div>
    </div>
  )
}

export default Homepage