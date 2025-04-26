import React from 'react'
import AddNewProject from './AddNewProject'
import Project from './Project'

function Projects() {
  return (
    <div className='projects'>
        <Project/>
        <AddNewProject/>
    </div>
  )
}

export default Projects