import React from 'react'
import ProjectComp from './ProjectComp'

function Projects() {
  return (
    <div className='flex flex-col justify-center md:pt-20 sm:pt-12 items-center '>
      <section className='mb-12'>
        <h2 className=' heading text-4xl'>Projects</h2>
        <hr className="h-0.5  border border-orange-200"></hr></section>
        <div className='grid md:grid-cols-4  sm:grid-cols-1 gap-10
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