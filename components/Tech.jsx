import Image from 'next/image'
import img from '../public/main.png'

function Tech() {
  
  return (
    <main className='items-center justify-center md:pt-20 flex flex-col'>
        <section>
        <h2 className='heading sm:text-2xl md:text-4xl'>Languages & Frameworks</h2>
        <hr className="h-0.5  border border-orange-200"></hr></section>
    <div>
    <Image className='md:w-[800px] sm:w-96 md:pt-4 sm:pt-8' src={img} alt='tech-stack imgage'/>
    </div>
</main>
  )
}

export default Tech