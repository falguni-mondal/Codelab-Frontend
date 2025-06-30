import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectList = () => {
  return (
    <div className='project-list mt-5 flex flex-col gap-2'>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  )
}

export default ProjectList