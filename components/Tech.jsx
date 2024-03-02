import Image from 'next/image'
import img from '../public/main.png'

function Tech() {
  
  return (
    <main className='items-center justify-center pt-20 flex flex-col'>
        <section>
        <h2 className='font-semibold font-mono text-4xl text-gray-300'>Languages & Frameworks</h2>
        <hr className="h-0.5 mt-1 border border-gray-400 "></hr></section>
    <div>
    <Image className='w-[800px] pt-12' src={img} alt='tech-stack imgage'/>
    </div>
</main>
  )
}

export default Tech