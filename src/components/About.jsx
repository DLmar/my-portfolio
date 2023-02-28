import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Den, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>As a current Computer Science student at NLTU, I am highly motivated, a fast learner, and always open to learning about new technologies. I am particularly focused on collaborating with professionals in order to gain valuable experience and develop my skills as a developer. My goal is to continue growing in this field, all while bringing value to the companies I work for.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
