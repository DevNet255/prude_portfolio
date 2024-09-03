// next image
import Image from "next/image";
// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
// framer motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
// typewriter effect
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Hello I'm <br />Prudence Pallangyo<br />{' '}
            <span className='text-accent'>
              <Typewriter
                options={{
                  strings: ["Network Engineer", "Web Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                }}
              />
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
          I’m a Network Engineer and Web Developer, blending technical expertise with creative innovation. 
          I troubleshoot and manage complex network systems, ensuring seamless connectivity and robust performance.
           On the web development side, I craft dynamic, user-focused applications that not only look great 
           but function flawlessly. My unique skill set allows me to deliver solutions that are both highly 
           reliable and exceptionally innovative.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
