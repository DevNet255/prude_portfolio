import React, { useState } from 'react';
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

// about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Bachelor of Electronics and Telecommunication Engineering',
        stage: '2015 - 2019',
      },
      {
        title: 'Advance Secondary Certificates (Edmund Rice Secondary School)',
        stage: '2013 - 2015',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'IP and PS - Huawei (Airtel MS Project)',
        stage: '2024 - Update to date',
      },
      {
        title: 'Transmission Engineer - Maktech (Vodacom MS Project)',
        stage: '2022 - 2024',
      },
      {
        title: 'Field Maintenace Engineer - NEWL (HTT)',
        stage: '2020 - 2021',
      },
    ],
  },
  {
    title: 'Certificates',
    info: [
      {
        title: 'CCNA (200-301) - CISCO',
        stage: '2024',
      },
      {
        title: 'AWS SAA - C03  - Amazon Web Services',
        stage: 'On progress',
      },
      {
        title: 'CCNP (350-401 ENCOR)  - CISCO',
        stage: 'On progress',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)}
           initial="hidden" 
           animate="show"
          exit="hidden"
          className='h2'>
          Seamless  <span className='text-accent'>connections </span> Fuel innovative solutions.
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)}
           initial="hidden" 
           animate="show"
          exit="hidden"
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          As a Network Engineer and Web Developer, I specialize in designing, implementing,
           and managing complex network systems to ensure seamless communication and data flow. 
           On the web development side, I build and maintain dynamic, user-friendly applications 
           that work smoothly with the underlying network infrastructure. My expertise allows 
           me to bridge the gap between reliable networking and innovative web development, bringing
            both stability and creativity to the projects I work on.
          </motion.p>
        </div>
        {/* info*/}
        <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <motion.div 
                variants={fadeIn('left', 0.2)}
                initial="hidden" 
                animate="show"
               exit="hidden"
                  key={itemIndex}
                  className={`${
                    index === itemIndex
                      ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                      : ''
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </motion.div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className='text-2xl text-white'>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
