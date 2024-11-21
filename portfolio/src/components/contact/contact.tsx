import { Link } from 'react-scroll';
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    return (
      <footer className="bg-black text-white py-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-2">
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
  
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-2 text-sm">
        <ul className="hidden justify-center  md:flex w-full">
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
                <Link to="skill" smooth={true} duration={500}>
                My Skills
                </Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-blue-500 transition">
                <Link to="work" smooth={true} duration={500}>
                What I do
                </Link>
            </li>
            </ul>
        </div>
  
        <div className="text-center text-xs text-gray-500">
          Copyright ©{new Date().getFullYear()}; Designed by <span className="font-semibold text-white">SUPAKORN</span>
        </div>
      </footer>
    );
  };
  
  export default Contact;
  