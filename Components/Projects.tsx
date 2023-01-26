import Tabs from './Tabs';
import Project from './Project';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [activeTab, setActive] = useState<string>('');

  const getTab = (value: string) => {
    setActive(value);
  };

  return (
    <div className='bg-black text-white py-20'>
      <div>
        <div className='text-center'>
          <h2 className='text-4xl mb-10 font-bold'>Projects</h2>
          <p className='text-light-text w-3/5 mx-auto lg:w-11/12 sm:text-sm'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            deserunt! Assumenda adipisci, nemo iusto ab minima consequatur eaque
            consequuntur quisquam! Consequatur quas officia at voluptates,
            obcaecati iste corporis? Iure commodi dolor nam deleniti fugit eius
            totam laborum dignissimos quasi temporibus blanditiis, quam quaerat
            libero veritatis enim itaque delectus omnis provident. Accusantium
            sed assumenda veritatis? Aliquam enim id iste quas quod.
          </p>
        </div>
        <div>
          <Tabs liftTab={getTab} />
        </div>
        <div>
          <Project activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
