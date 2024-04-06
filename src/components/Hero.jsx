import heroImage from '../assets/profilepic.png';
import notebookL from '../assets/notebookL.png';
import notebookM from '../assets/notebookM.png';
import mobileR from '../assets/mobileR.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8">
      <img
        className="absolute z-[-1] w-[400px] bottom-0 left-[-170px]"
        src={notebookL}
        alt=""
      />
      <img
        className="absolute z-[-1] w-[400px] bottom-0 left-[320px]"
        src={notebookM}
        alt=""
      />
      <img
        className="absolute z-[-1] w-[200px] bottom-[500px] left-[450px]"
        src={mobileR}
        alt=""
      />

      <div className="glass px-5 col-span-2 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <p className="mb-4 text-gray-500">I'm a </p>

          <TypeAnimation
            sequence={[
              'Full Stack Dev',
              1000,
              'Web Designer',
              1000,
              'Web Developer',
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          ></TypeAnimation>
        </h1>
        <p className="font-bold text-gray-300 my-6 sm:text-lg lg:text-xl max-w-[200px] md:max-w-[600px] ml-1">
          My name is rahul and i have 2+ years experience in web development.
        </p>
      </div>

      <div className="absolute bottom-0 right-0 w-[300px] lg:w-[500px]">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
