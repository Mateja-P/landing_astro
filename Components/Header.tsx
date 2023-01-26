import Link from 'next/link';
import Logo from '../Assets/Images/logo.svg';
import linkedin from '../Assets/Images/linkedin.svg';
import instagram from '../Assets/Images/instagram.svg';
import facebook from '../Assets/Images/facebook.svg';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [isScrolled]);

  return (
    <div className='fixed w-full z-20'>
      <div
        className={`relative flex items-center justify-between px-16 py-5 ${
          isScrolled ? 'bg-black py-4' : ''
        } transition-all duration-200 ease-in xl:px-10`}
      >
        <div>
          <img className='md:w-2/3' src={Logo.src} />
        </div>
        <div
          className={`flex items-center xl:absolute  xl:flex-col xl:bg-black transition-all duration-400 ease-in xl:top-full xl:w-full xl:left-0 ${
            !openMenu ? 'xl:left-full' : 'xl:left-0'
          }`}
        >
          <nav className='flex text-gray-400 text-base xl:flex-col xl:text-center xl:mt-10 xl:text-lg'>
            <li className='list-none'>
              <div
                className={`cursor-pointer ${
                  router.pathname === '/'
                    ? 'font-semibold text-light-color'
                    : ''
                }`}
              >
                Home
              </div>
            </li>
            <li className='list-none px-10 xl:px-0 xl:py-5'>
              <div
                className={`cursor-pointer ${
                  router.pathname === '/skills'
                    ? 'font-semibold text-light-color'
                    : ''
                }`}
              >
                Skills
              </div>
            </li>
            <li className='list-none'>
              <div
                className={`cursor-pointer ${
                  router.pathname === '/projects'
                    ? 'font-semibold text-light-color'
                    : ''
                }`}
              >
                Projects
              </div>
            </li>
          </nav>
          <div className='flex items-center xl:flex-col'>
            <div className='mx-20 flex items-center xl:my-10'>
              <div className='group/social p-3 border border-gray-400 rounded-full bg-gray-900 cursor-pointer'>
                <img
                  className='group-hover/social:grayscale-0 w-5 grayscale transition-all duration-200 ease-in xl:w-4'
                  src={linkedin.src}
                />
              </div>
              <div className='group/social p-3 mx-6 border border-gray-400 rounded-full bg-gray-900 cursor-pointer'>
                <img
                  className='group-hover/social:grayscale-0 w-5 grayscale transition-all duration-200 ease-in xl:w-4'
                  src={instagram.src}
                />
              </div>
              <div className='group/social p-3 border border-gray-400 rounded-full bg-gray-900 cursor-pointer'>
                <img
                  className='group-hover/social:grayscale-0 w-5 grayscale transition-all duration-200 ease-in xl:w-4'
                  src={facebook.src}
                />
              </div>
            </div>
            <div className='cursor-pointer px-8 py-4 border-2 border-gray-400 text-white xl:mb-10'>
              Let's connect
            </div>
          </div>
        </div>
        <div
          className='hidden xl:flex xl:flex-col xl:justify-between xl:w-5 xl:h-5'
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div
            className={`w-full h-0.5 bg-white transition-all duration-200 ease-in ${
              openMenu ? 'rotate-[-45deg] translate-y-[9px]' : ''
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-white transition-all duration-200 ease-in ${
              openMenu ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-white transition-all duration-200 ease-in ${
              openMenu ? 'rotate-45 translate-y-[-9px]' : ''
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
