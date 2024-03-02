import Image from 'next/image'

import ProfileImg from '../public/profile.jpg'
import AboutMe from './AboutMe'

function IntroSection() {
  return (
    <div className=' text-[#fff0e3]   tracking-tight  flex flex-col  items-center justify-center'>
      <main>
      <div className="flex items-center  space-x-20">
      <Image
        className="sm:w-40 border-2 border-white shadow-md hover:shadow-white hover:shadow-md shadow-white  duration-1000  rounded-full "
        src={ProfileImg} priority
        alt="Anuj-profile-img"
      />
      <div className="flex card flex-col items-start text-3xl space-y-1 out-border">
        <h3 className="text-2xl">Hey!</h3>
       
          <div className='flex items-end space-x-3'>
            <h3>I'm</h3>
          <h1 className="text-4xl gradient-text "> Anuj Chhikara</h1></div>
        
        <p className='text-2xl text-[#fad3b0]'>I am a <span className='gradient-text'>Full Stack Developer</span></p>
        
    </div></div>
  

      </main>
       
    </div>
  )
}

export default IntroSection