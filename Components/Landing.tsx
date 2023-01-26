import Header from './Header';
import Hero from './Hero';
import ScrollBar from './ScrollBar';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className='bg-dark-bg'>
      <ScrollBar />
      <Header />
      <div className="bg-[url('../Assets/Images/bannerBg.png')] h-[110vh] bg-no-repeat flex items-end pb-40 w-full justify-between xl:pt-40 lg:pb-50 xs:pb-0 lg:h-screen lg:items-center md:items-end lg:pt-30 md:pt-10 xs:pt-0 sm:pt-[45rem]">
        <Hero />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
