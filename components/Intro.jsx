import Image from 'next/image'

import ProfileImg from '../public/profile.jpg'

function IntroSection() {
  return (
    <div className=' text-[#fff0e3]   tracking-tight  flex flex-col  items-center justify-center'>
      <main>
      <div className="flex items-center  space-x-20">
      <Image
        className="sm:w-40 border-2 border-white shadow-md hover:shadow-white hover:shadow-md shadow-white  duration-1000  rounded-full "
        src={ProfileImg}
        alt="Anuj-profile-img"
      />
      <div className="flex card flex-col items-start text-3xl space-y-1 out-border">
        <h3 className="">👋 Hi There!</h3>
       
          <div className='flex space-x-3'>
            <h3>I'm</h3>
          <h1 className="text-4xl gradient-text "> Anuj Chhikara</h1></div>
        
        <p className='text-2xl text-[#FFE3CA]'>I am a <span className='gradient-text'>Full Stack Developer</span></p>
        
    </div></div>

      </main>
       
    </div>
  )
}

export default IntroSection