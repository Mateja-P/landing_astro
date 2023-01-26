import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/Images/meter1.svg';
import image2 from '../Assets/Images/meter2.svg';
import image3 from '../Assets/Images/meter3.svg';
import prevArrow from '../Assets/Images/arrow1.svg';
import nextArrow from '../Assets/Images/arrow2.svg';
import { useRef } from 'react';

const Slide = () => {
  const sliderRef = useRef<any>();

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const data = [
    {
      title: 'Web Development',
      image: image1.src,
    },
    {
      title: 'Brand identity',
      image: image2.src,
    },
    {
      title: 'Logo Design',
      image: image3.src,
    },
    {
      title: 'Web Development',
      image: image3.src,
    },
    {
      title: 'Web Development',
      image: image3.src,
    },
    {
      title: 'Web Development',
      image: image3.src,
    },
  ];

  function PrevArrow() {
    return (
      <div
        onClick={() =>
          sliderRef.current != undefined && sliderRef.current.slickPrev()
        }
        className='absolute left-[-20px] top-1/2 translate-y-[-50%] cursor-pointer py-2 px-4 border-2 border-dark-color rounded-full w-[50px] h-[50px] flex justify-center items-center z-10 md:left-2 sm:w-[30px] sm:h-[30px] sm:p-1'
      >
        <img src={prevArrow.src} className='w-full z-0 sm:w-1/2' />
      </div>
    );
  }
  function NextArrow() {
    return (
      <div
        onClick={() =>
          sliderRef.current != undefined && sliderRef.current.slickNext()
        }
        className='absolute right-[-20px] top-1/2 translate-y-[-50%] cursor-pointer py-2 px-4 border-2 border-dark-color rounded-full w-[50px] h-[50px] flex justify-center items-center z-10 md:right-2 sm:w-[30px] sm:h-[30px] sm:p-1'
      >
        <img src={nextArrow.src} className='w-full z-0 sm:w-1/2' />
      </div>
    );
  }

  return (
    <div className='w-3/5 text-white mx-auto relative md:w-full'>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => {
          return (
            <div key={index} className='py-5'>
              <div className='flex flex-col justify-center items-center'>
                <img src={item.image} className='w-2/4 md:w-1/3 sm:w-2/4' />
                <div className='font-semibold mt-5'>{item.title}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide;
