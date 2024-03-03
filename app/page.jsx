import AboutMe from '@/components/AboutMe';
import EndSection from '@/components/EndSection';
import IntroSection from '@/components/Intro';
import Projects from '@/components/Projects';

import Tech from '@/components/Tech';


export default function Home() {
  return (
    
    <main className='flex flex-col space-y-20 sm:px-4 md:px-0 sm:mt-16 md:mt-20'>
   
   
    <IntroSection/>
    <AboutMe/>
    <Tech/>
    <Projects/>
    <EndSection/>
    
    
    </main>
   
  );
}
