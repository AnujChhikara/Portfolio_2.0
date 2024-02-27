import Image from 'next/image'
import img from '../public/main.png'

function Tech() {
  return (
    <main className='items-center justify-center pt-20 flex flex-col'>
        <section>
        <h2 className='font-bold text-4xl text-gray-300'>My Tech Arsenal </h2>
        <hr class="h-0.5 mt-1 border "></hr></section>
    <div>
    <Image className='w-[700px]' src={img} alt='tech-stack imgage'/>
    </div>
</main>
  )
}

export default Tech