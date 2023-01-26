import Slide from './Slide';

const Skills = () => {
  return (
    <div className="bg-[url('../Assets/Images/color-sharp.png')] bg-no-repeat relative pb-20 lg:py-20">
      <div className='w-10/12 mx-auto bg-black py-20 rounded-3xl translate-y-[-150px] lg:translate-y-0 lg:w-11/12 sm:w-full sm:py-14'>
        <div className='text-center mb-16'>
          <h2 className='text-white text-4xl font-bold mb-4'>Skills</h2>
          <p className='text-light-text w-2/3 mx-auto lg:w-full lg:text-sm lg:px-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            iure harum, sit ad distinctio eos cupiditate odio illo dignissimos
            eveniet? Corporis nobis quidem recusandae eligendi tenetur incidunt
            in et dolorem?
          </p>
        </div>
        <Slide />
      </div>
    </div>
  );
};

export default Skills;
