import {
  FaTwitter,
  FaFacebookSquare,
  FaDribbble,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="relative p-8 pt-8 pb-6 mt-12 mx-w-[1200px] glass">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-gray-300">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-500">
              Find me on any of these platforms, respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaTwitter className="ml-3" />
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebookSquare className="ml-3" />
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaDribbble className="ml-3" />
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaGithub className="ml-3" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="https://www.linkedin.com/in/raahulvinod"
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="https://www.linkedin.com/in/raahulvinod/"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/raahulvinod"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/raahulvinod"
                    >
                      Free Designs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/raahulvinod"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">{getCurrentYear()} </span>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-400 "
                target="_blank"
              >
                Rahul Vinod
              </a>
              .<a href="/" className="text-gray-500 hover:text-gray-400 "></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
