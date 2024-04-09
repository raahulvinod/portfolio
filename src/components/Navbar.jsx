import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <div className="glass-nav md:backdrop-blur-xl text-gray-300 h-[96px] px-8 max-w-[1200px] flex justify-between items-center mx-auto">
      <h1 className="text-3xl font-extrabold">RV.</h1>
      <ul className="hidden md:flex gap-6 text-xl cursor-pointer">
        <li>
          <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="block md:hidden text-gray-300 right-10 top-10 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? 'text-gray-300 z-40 absolute left-0 top-0 w-full bg-[#232323] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <ul className="p-8 text-4xl ml-20 z-10">
          <li className="p-2">
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
