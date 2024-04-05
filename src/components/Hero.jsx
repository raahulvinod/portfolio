import heroImage from '../assets/profilepic.png';
import notebookL from '../assets/notebookL.png';
import notebookM from '../assets/notebookM.png';
import mobileR from '../assets/mobileR.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div>
      <img src={notebookL} alt="" />
      <img src={notebookM} alt="" />
      <img src={mobileR} alt="" />

      <div>
        <h1>
          <span>
            <p>I'm a </p>
            <br />
            <TypeAnimation></TypeAnimation>
          </span>
        </h1>
        <p></p>
      </div>

      <div>
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
