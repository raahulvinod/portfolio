import proj1 from '../assets/trendfy1.png';
import proj2 from '../assets/learnly2.png';
import proj3 from '../assets/blogspace.png';
import proj4 from '../assets/airbnb.png';
import proj5 from '../assets/nikepark.png';
import proj6 from '../assets/brand.png';

const projects = [
  {
    id: 1,
    img: proj1,
    title: 'E-commerce Website',
    liveUrl: 'https://trendfy.vercel.app/',
    github: 'https://github.com/raahulvinod/ecommerce-project',
  },
  {
    id: 2,
    img: proj2,
    title: 'Learning Management system',
    liveUrl: 'https://learnlyeducation.vercel.app/',
    github: 'https://github.com/raahulvinod/lernly-learning-management-system',
  },
  {
    id: 3,
    img: proj3,
    title: 'Blogging website',
    liveUrl: 'https://getblogspace.netlify.app/',
    github: 'https://github.com/raahulvinod/blogspace-blogging',
  },
  {
    id: 4,
    img: proj4,
    title: 'Airbnb clone',
    liveUrl: 'https://airbnbbookings.vercel.app/',
    github: 'https://github.com/raahulvinod/airbnb-clone',
  },
  {
    id: 5,
    img: proj5,
    title: 'Nikepark UI',
    liveUrl: 'https://nikepark.vercel.app/',
    github: 'https://github.com/raahulvinod/ecommerce_next13',
  },
  {
    id: 6,
    img: proj6,
    title: 'Online shopping Platform',
    liveUrl: 'https://brandistic-store.vercel.app/',
    github: 'https://github.com/raahulvinod/ecommerce_next13',
  },
];

const Projects = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto grid grid-cols-2 gap-4 glass p-6"
      id="portfolio"
    >
      <div className="col-span-2 my-4">
        <h1 className="text-4xl mb-4 text-gray-300">My Projects</h1>
      </div>
      {projects.map((project) => (
        <div
          key={project.id}
          className="glass transform transition-transform hover:scale-105 duration-300 overflow-hidden shadow-lg md:h-[200px] group relative"
        >
          <img src={project.img} alt="" />
          <div className="group-hover:opacity-90 opacity-0 bg-[#232323] absolute transition-opacity duration-300 inset-0 flex flex-col justify-center items-center">
            <span className="text-sm md:text-2xl font-bold text-white mb-4">
              {project.title}
            </span>
            <div className="flex gap-1">
              <a
                href={project.github}
                className="bg-white px-5 py-2 rounded-xl font-bold"
              >
                Github
              </a>
              <a
                href={project.liveUrl}
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

export default Projects;
