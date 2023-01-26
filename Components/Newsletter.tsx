const Newsletter = () => {
  return (
    <div className='bg-white mb-24 py-16 px-12 rounded-2xl translate-y-[-100px] lg:translate-y-0 lg:px-2 '>
      <div className='flex justify-between items-center w-3/4 mx-auto lg:w-full md:flex-col'>
        <div className='flex-1 text-3xl font-bold lg:text-xl md:mb-5 leading-loose lg:leading-none'>
          Subscribe to our Newsletter & Never miss latest updates
        </div>
        <div className='flex-1'>
          <form
            onSubmit={(e) => e.preventDefault()}
            className='border border-black h-16 p-1 rounded-xl flex justify-between'
          >
            <input
              className='flex-1 placeholder:text-sm outline-none'
              placeholder='Email Address'
            />
            <button className='xs:text-sm h-full px-10 bg-gradient-to-r xs:px-2 from-light-color to-dark-color text-white rounded-xl'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
