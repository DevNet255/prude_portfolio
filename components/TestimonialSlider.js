// testimonial data
export const testimonialData = [
  {
    image: './person.png',
    name: 'Alex Ndosi',
    position: 'Client',
    message:
      'Prudence delivered a stunning, fast, and reliable website. His expertise made a huge difference for us!',
  },
  {
    image: './person.png',
    name: 'Nickson Danielson',
    position: 'Client',
    message:
      'My website’s transformation was seamless and effective thanks to Prudence. I have seen great results in traffic and engagement.',
  },
  {
    image: './person.png',
    name: 'Hardson Mushi',
    position: 'Client',
    message:
      'Prudence optimized our site beautifully and efficiently. His dual skills in network and web development are invaluable',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';
// icons
import {FaQuoteLeft} from 'react-icons/fa';
// next image
import Image from 'next/image';
import Testimonials from '../pages/testimonials';
const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return <SwiperSlide key={index}>
           <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'> 
            {/* avatar, name, position */}
            <div className='w-full max-w-[300px] flex flex-col xl-justify-center
            items-center ralative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/* avatar */}
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt=''/>
                </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                    {/* position */}
                <div className='text-[12px] uppercase font-extralight'>{person.position}</div>
              </div>
            </div>
            {/* quotes and message */}
            <div className='flex-1 flex flex-col justify-center
            before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
            xl:before:h-[200px] relative xl:pl-20'>
              {/* quote icon */}
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
            </div>
           </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
