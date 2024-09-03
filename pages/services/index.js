// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// components 
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//framer motion
import { motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-30 py-36 flex items-center'>
    <Circles /> 
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text*/}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up', 0.2)}
           initial="hidden" 
           animate="show"
          exit="hidden" 
          className='h2 xl:mt-8'
          >
            My services <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.4)}
           initial="hidden" 
           animate="show"
          exit="hidden"
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'
          >
            As a Network Engineer and Web Developer, I specialize in designing, implementing, 
            and managing complex network systems to ensure seamless communication and data flow.</motion.p>
        </div>
        <motion.div
         variants={fadeIn('down', 0.6)}
         initial="hidden" 
          animate="show"
          exit="hidden"
          className='w-full xl:max-w-[65%]'> 
        {/* slider */ }
        <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb/>

  </div>
  );
};

export default Services;
