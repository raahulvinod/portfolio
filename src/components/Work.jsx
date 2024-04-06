import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';

const projects = [
  { id: 1, img: proj1, title: 'E-commerce Website', liveUrl: '/', github: '/' },
  { id: 2, img: proj2, title: 'Blog Platform', liveUrl: '/', github: '/' },
  { id: 3, img: proj3, title: 'Chat Application', liveUrl: '/', github: '/' },
  { id: 4, img: proj4, title: 'Portfolio Website', liveUrl: '/', github: '/' },
  { id: 5, img: proj5, title: 'Social Media App', liveUrl: '/', github: '/' },
  { id: 6, img: proj6, title: 'Online Learning Platform', liveUrl: '/' },
];

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-4 glass p-6">
      <div className="col-span-2 my-4">
        <h1 className="text-4xl mb-4 text-gray-300">My Work</h1>
      </div>
      {projects.map((project) => (
        <div
          key={project.id}
          className="glass transform transition-transform hover:scale-105 duration-300 overflow-hidden shadow-lg h-[200px] group relative"
        >
          <img src={project.img} alt="" />
          <div className="group-hover:opacity-90 opacity-0 bg-[#232323] absolute transition-opacity duration-300 inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white mb-4">
              {project.title}
            </span>
            <div className="flex gap-1">
              <a
                href={project.liveUrl}
                className="bg-white px-5 py-2 rounded-xl font-bold"
              >
                Github
              </a>
              <a
                href={project.github}
                className="bg-white px-5 py-2 rounded-xl font-bold"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
