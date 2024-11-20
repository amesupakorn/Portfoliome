import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
  <div className="sticky top-0 z-50 bg-[#0e0e0e] w-full transition-colors duration-500">

  <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 px-4 text-white">
    <h1 className="w-full text-3xl font-bold text-blue-500">SUPAKORN.</h1>
    <ul className="hidden md:flex w-full justify-end">
      <li className="p-4 cursor-pointer hover:text-blue-500 transition">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li className="p-4 cursor-pointer hover:text-blue-500 transition">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li className="p-4 cursor-pointer hover:text-blue-500 transition">
        <Link to="what-i-do" smooth={true} duration={500}>
          What I do
        </Link>
      </li>
      <li className="p-4 cursor-pointer hover:text-blue-500 transition">
        <Link to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link>
      </li>
      <div className="flex items-center space-x-4">
          <div className="w-[1px] h-6 bg-gray-600"></div>

          <button
            onClick={() => window.open('https://github.com/amesupakorn', '_blank')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.152-1.11-1.459-1.11-1.459-.907-.62.069-.607.069-.607 1.004.07 1.533 1.03 1.533 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.104-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.578 9.578 0 0112 6.801a9.56 9.56 0 012.508.338c1.91-1.296 2.75-1.026 2.75-1.026.545 1.376.202 2.393.099 2.646.64.7 1.029 1.591 1.029 2.682 0 3.842-2.337 4.687-4.566 4.936.36.31.678.921.678 1.855 0 1.339-.012 2.421-.012 2.75 0 .268.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={() => window.open('https://www.facebook.com/ame.supakorn/', '_blank')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaFacebookF size={16} />
          </button>

          <button
            onClick={() => window.open('mailto:supakorn642@gmail.com', '_blank')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <HiOutlineMail size={22} />
          </button>
        </div>
      </ul>



        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <ul
             className={`fixed top-0 h-full w-[50%] border-r border-r-gray-900 bg-[#000300] transform transition-transform duration-500 ease-in-out ${
              nav ? '-translate-x-4' : '-translate-x-[80vw]'
            }`}
            
          >
            <h1 className="w-full text-2xl font-bold text-blue-500 m-4">SUPAKORN.</h1>
            <li className="p-4 cursor-pointer hover:text-blue-500 transition">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-blue-500 transition">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-blue-500 transition">
              <Link to="what-i-do" smooth={true} duration={500}>
                What I do
              </Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-blue-500 transition">
              <Link to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>

          <div className="flex items-center space-x-4">
          <div className="w-[1px] h-6 bg-gray-600"></div>

          <button
            onClick={() => window.open('https://github.com/amesupakorn', '_blank')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.152-1.11-1.459-1.11-1.459-.907-.62.069-.607.069-.607 1.004.07 1.533 1.03 1.533 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.104-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.578 9.578 0 0112 6.801a9.56 9.56 0 012.508.338c1.91-1.296 2.75-1.026 2.75-1.026.545 1.376.202 2.393.099 2.646.64.7 1.029 1.591 1.029 2.682 0 3.842-2.337 4.687-4.566 4.936.36.31.678.921.678 1.855 0 1.339-.012 2.421-.012 2.75 0 .268.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={() => window.open('https://www.facebook.com/ame.supakorn/', '_blank')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaFacebookF size={16} />
          </button>

          <button
            onClick={() => window.open('mailto:supakorn642@gmail.com', '_blank')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <HiOutlineMail size={22} />
          </button>
        </div>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
