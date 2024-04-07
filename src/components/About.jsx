import notebook from '../assets/notebookM.png';
import mobile from '../assets/mobileR.png';

const About = () => {
  return (
    <div
      className="text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3"
      id="about"
    >
      <div className="sm:col-span-2 glass sm:p-16 my-auto text-left p-4">
        <div className="mx-auto max-w-[80%]">
          <h2 className="text-3xl font-bold mb-4">
            I can optimize your website
          </h2>
          <p className="text-gray-200">
            I specialize in optimizing websites for performance and user
            experience. Whether it's reducing load times, improving SEO, or
            enhancing mobile responsiveness, I can help your website reach its
            full potential.
          </p>
        </div>
      </div>
      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img
          src={notebook}
          alt=""
          className="w-[200px] md:w-[500px] absolute"
        />
      </div>
      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img src={mobile} alt="" className="w-[200px] md:w-[500px] absolute" />
      </div>
      <div className="md:hidden relative overflow-hidden h-[200px] glass">
        <img src={notebook} alt="" className="w-[400px]  absolute" />
        <img src={mobile} alt="" className="w-[200px] right-0  absolute" />
      </div>
      <div className="sm:col-span-2 glass sm:p-16 my-auto text-left p-4">
        <div className="mx-auto max-w-[80%]">
          <h2 className="text-3xl font-bold mb-4">Mobile Optimization</h2>
          <p className="text-gray-200">
            With the increasing use of mobile devices, it's crucial to ensure
            your website is optimized for mobile users. I specialize in mobile
            optimization, making sure your website provides an excellent
            experience across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
