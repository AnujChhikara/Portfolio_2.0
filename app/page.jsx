import AboutMe from '@/components/AboutMe';
import IntroSection from '@/components/Intro';
import Projects from '@/components/Projects';

import Tech from '@/components/Tech';


export default function Home() {
  return (
    
    <main className='flex flex-col  space-y-20 mt-20'>
   
   
    <IntroSection/>
    <AboutMe/>
    <Tech/>
    <Projects/>
    
    
    
    </main>
   
  );
}
