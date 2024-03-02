import React from 'react'
import ProjectComp from './ProjectComp'

function Projects() {
  return (
    <div className='flex flex-col justify-center items-center pb-20'>
        <h2 className='font-semibold font-mono text-4xl mb-20 text-gray-300'>Projects</h2>
        <div className='grid grid-cols-4 gap-10
        '>
        <ProjectComp/>
        <ProjectComp/>
        <ProjectComp/>
        <ProjectComp/>
        </div>
        
    </div>
  )
}

export default Projects