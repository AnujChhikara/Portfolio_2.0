import IntroSection from '@/components/Intro';
import Navbar from '@/components/Navbar'
import Tech from '@/components/Tech';

export default function Home() {
  return (
    
    <main className='flex flex-col space-y-20'>
    <Navbar/>
    <IntroSection/>
    <Tech/>
    
    </main>
   
  );
}
