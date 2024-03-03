import React from 'react'

function EndSection() {
  return (
    <div className='text-center pb-20 pt-20'>
        <h3 className='font-bold text-4xl bg-clip-text mb-4 text-transparent bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'>Let's Work Together!</h3>
        
<p className='text-gray-300 tracking-tighter text-lg  font-mono mb-4'>
Curious minds unite! Click the button below to reach out, and let's dive into learning together.</p>
<a  href="mailTo:anujchhikara777@gmail.com"> <button className='text-xl text-gray-800 font-semibold hover:scale-105 hover:-translate-y-1 duration-700 rounded-lg px-4 py-1 shadow-sm bg-white shadow-orange-300'>
Email </button></a>
    </div>
  )
}

export default EndSection