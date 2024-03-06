import Image from 'next/image'
import ProfileImg from '../public/profile.jpg'


function IntroSection() {
  return (
    <div className=' text-[#fff0e3]   tracking-tight  flex flex-col  items-center justify-center'>
      <main>
      <div className="sm:flex md:flex-row sm:flex-col sm:space-y-16 md:space-y-0 md:items-center sm:justify-center sm:items-center  md:space-x-20">
      <img
        className="w-44 border-4 border-gray-500  rounded-full "
        src='./profile.jpg' 
        alt="Anuj-profile-img"
      />
      <div className="flex card flex-col items-start text-3xl space-y-1 out-border">
        <h3 className="text-2xl">Hey!</h3>
       
          <div className='flex items-end space-x-3'>
            <h3>I'm</h3>
          <h1 className="md:text-4xl sm:text-2xl gradient-text "> Anuj Chhikara</h1></div>
        
        <p className='md:text-2xl '>I am a <span className='gradient-text sm:text-2xl'>Full Stack Developer</span></p>
        
    </div></div>
  

      </main>
       
    </div>
  )
}

export default IntroSection