import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import image from '../Assets/Images/header-img.svg';

const Hero = () => {
  return (
    <div className='px-16 xl:px-10 xl:pt-40 sm:pt-52'>
      <div className='flex lg:flex-col justify-between'>
        <div className='flex-1 text-white'>
          <div className='bg-gradient-to-r from-light-color to-dark-color inline-block px-5 py-2 font-semibold text-white tracking-wide border border-neutral-400'>
            Welcome to my Portfolio
          </div>
          <h1 className='my-7 text-6xl font-black md:text-4xl'>
            Hi! I'm Messi Web Developer
          </h1>
          <p className='mb-10 text-light-text text-base md:text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            illum vero sapiente in aut impedit necessitatibus deleniti eos
            laudantium tempora!
          </p>
          <div className='inline-flex text-neutral-400 cursor-pointer items-center'>
            <p className='mr-4'>Let's Connect</p>
            <div className='rounded-full border-2 border-gray-400 text-sm'>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
        <div className='flex-1 flex justify-end lg:pt-20'>
          <img
            className='lg:w-2/4 animate-[wiggle_3s_ease-in-out_infinite] !z-0'
            src={image.src}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
