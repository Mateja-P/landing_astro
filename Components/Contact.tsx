import image from '../Assets/Images/contact-img.svg';

const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-light-color to-dark-color pt-52 pb-64 lg:py-32'>
      <div className='flex gap-10 mx-auto w-11/12 lg:flex-col-reverse'>
        <div className='flex-1 lg:flex lg:justify-center lg:mt-10'>
          <img className='w-full' src={image.src} />
        </div>
        <div className='flex-1 flex flex-col'>
          <h2 className='text-4xl font-semibold text-white mb-10'>
            Get In Touch
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className='flex flex-col justify-between h-full items-start flex-1'
          >
            <div className='flex-1 flex flex-col w-full'>
              <div className='h-14 flex justify-between w-full sm:flex-col sm:h-auto'>
                <input
                  className='outline-none p-2 rounded-lg border border-light-text placeholder:text-sm bg-light-input h-full flex-1 sm:mb-2'
                  placeholder='First Name'
                  autoComplete='off'
                />
                <input
                  className='outline-none p-2 rounded-lg border border-light-text placeholder:text-sm bg-light-input h-full flex-1 ml-2 sm:ml-0'
                  placeholder='Last Name'
                  autoComplete='off'
                />
              </div>
              <div className='my-2 flex h-14 sm:flex-col sm:h-auto'>
                <input
                  className='outline-none p-2 rounded-lg border border-light-text placeholder:text-sm bg-light-input h-full flex-1 sm:mb-2'
                  placeholder='Email Address'
                  autoComplete='off'
                />
                <input
                  className='outline-none p-2 rounded-lg border border-light-text placeholder:text-sm bg-light-input h-full flex-1 ml-2 sm:ml-0'
                  placeholder='Phone No.'
                  autoComplete='off'
                />
              </div>
              <div className='w-full h-64 2xl:pb-5'>
                <textarea
                  className='outline-none p-2 rounded-lg border border-light-text placeholder:text-sm w-full bg-light-input h-full'
                  placeholder='Message'
                  autoComplete='off'
                ></textarea>
              </div>
            </div>
            <button className='py-3 px-8 bg-white text-black font-semibold'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
