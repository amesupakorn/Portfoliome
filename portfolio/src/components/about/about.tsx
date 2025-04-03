import { FaCheckCircle } from 'react-icons/fa'; 
import { HiMail } from 'react-icons/hi';
import Timeline from './timeline';
import AOS from "aos";
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const About = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })
  return (
    <div id='about' className="text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-[1200px] w-full grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1500" className="flex justify-center items-center relative">
        <div className="rounded-full overflow-hidden border-4 border-gray-700 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
        <img
              src="/image/me.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute top-[10%] left-[-5%] w-[50px] h-[50px] rounded-full bg-gray-800 flex items-center justify-center">
            <img
                src="/image/Python-logo-notext.svg.png"
                className="w-[34px] h-[36px]"
                />
          </div>
          <div className="absolute top-[5%] right-[8%] w-[50px] h-[50px] rounded-full bg-gray-800 flex items-center justify-center">
            <img
                src="/image/Postgresql_elephant.svg.png"
                className="w-[24px] h-[24px]"
                />
          </div>
          <div className="absolute bottom-[15%] left-[5%] w-[50px] h-[50px] rounded-full bg-gray-800 flex items-center justify-center">
            <img
              src="/image/97_Docker_logo_logos-512.webp"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="absolute bottom-[15%] right-[5%] w-[50px] h-[50px] rounded-full bg-gray-800 flex items-center justify-center">
            <img
              src="/image/React-icon.svg.png"
              className="w-[28px] h-[24px]"
            />
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"  >
        <div className="flex flex-col">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                About Me
            </p>
            <div className="w-10 h-[2px] bg-gray-600"></div>
        </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            I'm <span className="text-blue-500">Full Stack Developer</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mt-4">
            Full-Stack Web Developer with experience in designing and developing end-to-end web applications. 
            Proficient in both frontend and backend technologies, with hands-on expertise in cloud-based deployments and database management.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-blue-400">
            <p className="flex items-center ">
              <FaCheckCircle className="mr-2" /> Website Development
            </p>
            <p className="flex items-center">
              <FaCheckCircle className="mr-2" /> AI Integration 
            </p>
            <p className="flex items-center mr-2">
              <FaCheckCircle className="mr-2" /> Database Management 
            </p>
            <p className="flex items-center mr-2">
              <FaCheckCircle className="mr-2" /> Cloud Solutions Architect
            </p>



          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="mt-8 p-2 w-72 rounded-full border border-gray-700 flex space-x-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800">
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
                </div>
                <p className="text-lg">amesupakorn</p>
            </div>

            <div className="mt-8 p-2 w-72 rounded-full border border-gray-700 flex space-x-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800">
                    <HiMail className="text-xl" />
                    </div>
                <p className="text-lg">supakorn642@gmail.com</p>
            </div>
        </div>         
        <Timeline />
        </div>

      </div>
    </div>
  );
};

export default About;
