import { useState, useEffect } from 'react';
import image1 from '../Assets/Images/project-img1.png';
import image2 from '../Assets/Images/project-img2.png';
import image3 from '../Assets/Images/project-img3.png';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  activeTab: string;
}

const Project = ({ activeTab }: Props) => {
  const [activeClass, setActiveClass] = useState<string>('');

  const data = [
    {
      tab: 'tab1',
      content: [
        {
          image: image1.src,
          text: 'Something about this awesome project',
        },
        {
          image: image2.src,
          text: 'Something about this awesome project',
        },
        {
          image: image3.src,
          text: 'Something about this awesome project',
        },
        {
          image: image1.src,
          text: 'Something about this awesome project',
        },
        {
          image: image2.src,
          text: 'Something about this awesome project',
        },
        {
          image: image3.src,
          text: 'Something about this awesome project',
        },
      ],
    },
    {
      tab: 'tab2',
      content: [],
    },
    {
      tab: 'tab3',
      content: [],
    },
  ];

  return (
    <div>
      <motion.div layout>
        <AnimatePresence>
          {data.map((item, index) => {
            return (
              item.tab === activeTab && (
                <motion.div
                  key={index}
                  className='grid grid-cols-3 gap-16 mx-auto w-11/12 lg:gap-10 md:grid-cols-2 sm:grid-cols-1'
                >
                  {item.content.length == 0 ? (
                    <div className='col-start-2 text-center md:col-start-1'>
                      No content
                    </div>
                  ) : (
                    item.content.map((item, index) => (
                      <div
                        key={index}
                        className='relative overflow-hidden group/bring rounded-lg'
                      >
                        <img src={item.image} className='w-full' />
                        <div className='absolute top-[-100%] group-hover/bring:top-0 bg-light-color w-full h-full transition-all duration-200 ease-in flex items-center justify-center'>
                          {item.text}
                        </div>
                      </div>
                    ))
                  )}
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Project;
