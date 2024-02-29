import Image from 'next/image'
import React from 'react'

function ProjectCard() {
  return (
    <div className='flex flex-col justify-center font-mono space-y-12  text-gray-300 items-center mt-20 mx-20'>
      <h2 className='text-4xl font-bold  underline'>Project Name</h2>
      <p className='w-2/3'>Project Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem quisquam iusto ullam nam dicta ipsam, quos modi ad culpa voluptatem repudiandae quam, voluptatum error natus laboriosam minima? Praesentium, id!</p>
<div className='flex space-x-20 text-gray-600 font-bold'>
<a className='bg-gray-400 px-6 py-2 hover:bg-gray-700 hover:text-gray-300 duration-700' href='github.com'>Github Repo</a>
<a className='bg-gray-400 px-6 py-2 hover:bg-gray-700 hover:text-gray-300 duration-700' href='somewebiste'>Live Preview</a>

</div>
<div className='flex justify-center space-x-4'>
  <img className='w-1/4 shadow-md rounded-lg shadow-gray-900' src="https://plus.unsplash.com/premium_photo-1664006644422-59f2c6a80183?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <img className='w-1/4 shadow-md rounded-lg shadow-gray-900' src="https://plus.unsplash.com/premium_photo-1664006644422-59f2c6a80183?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <img className='w-1/4 shadow-md rounded-lg shadow-gray-900' src="https://plus.unsplash.com/premium_photo-1664006644422-59f2c6a80183?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  
</div>

<div className='flex space-x-6 '>
  <div className='flex space-x-4 items-center'>
    <h3 className='bg-gray-700 hover:shadow-md hover:shadow-yellow-300 duration-500 px-5 py-3 font-semibold text-xl shadow-sm shadow-yellow-300'>Frontend </h3>
    <ul className='flex space-x-2'>
      <li className='bg-zinc-500 px-2 py-1 text-xl font-semibold rounded shadow-sm shadow-zinc-500'>React</li>
      <li className='bg-zinc-500 px-2 py-1 text-xl font-semibold rounded shadow-sm shadow-zinc-500'>React</li>
    
    </ul>
  </div>
  <div className='flex space-x-4 items-center'>
     <h3 className='bg-gray-700  hover:shadow-md hover:shadow-yellow-300 duration-500 px-5 py-3 font-semibold text-xl shadow-sm shadow-yellow-300'>Styled with</h3>
    <ul>
      <li className='bg-zinc-500 px-2 py-1 text-xl font-semibold rounded shadow-sm shadow-zinc-500'>Tailwind CSS</li>
    </ul>
  </div>
  <div className='flex space-x-4 items-center'>
     <h3 className='bg-gray-700 hover:shadow-md hover:shadow-yellow-300 duration-500 px-5 py-3 font-semibold text-xl shadow-sm shadow-yellow-300'>Backend</h3>
    <ul>
      <li className='bg-zinc-500 px-2 py-1 text-xl font-semibold rounded shadow-sm shadow-zinc-500'>Node</li>
    </ul>
  </div>
</div>
      
    </div>
  )
}

export default ProjectCard