import Newsletter from './Newsletter';
import Logo from '../Assets/Images/logo.svg';
import linkedin from '../Assets/Images/linkedin.svg';
import instagram from '../Assets/Images/instagram.svg';
import facebook from '../Assets/Images/facebook.svg';

const Footer = () => {
  return (
    <div className="bg-[url('../Assets/Images/footer-bg.png')] bg-no-repeat pb-20 lg:py-10 xs:py-3">
      <div className='w-11/12 mx-auto'>
        <Newsletter />
        <div className='flex justify-between items-center'>
          <div>
            <img className='md:w-2/3' src={Logo.src} />
          </div>
          <div className='flex items-center'>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
