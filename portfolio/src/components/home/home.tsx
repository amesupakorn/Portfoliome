import { useEffect, useRef } from "react";
import Typed from 'typed.js';
import { Link } from 'react-scroll';


const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full-Stack Web Development",
        "CI/CD Pipelines",
        "Cloud Solutions",
        "Database Management",
        "Modern UI/UX Design",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // ล้าง instance ของ Typed เมื่อ component ถูก unmount
    };
  }, []);

  return (
    <div id="home" className="text-white">
      <div className="max-w-[1000px] sm:max-w-[90%] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-gray-400 font-bold p-2 text-sm sm:text-base">
          WEB DEVELOPER & FULL STACK DEVELOPER
        </p>
        <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold md:py-6">
          Hello, I&apos;m <span className="text-blue-500">Supakorn</span>
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4 sm:py-8">
            Specialized in
          </p>
          <span
            ref={typedRef}
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2"
          ></span>
        </div>
        <p className="md:text-2xl sm:text-xl text-lg font-bold text-gray-500 px-4 sm:px-0">
          I’m Supakorn, a passionate Full-Stack Web Developer with expertise in
          building scalable web applications. I specialize in integrating
          frontend, backend, and cloud-based solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 sm:space-y-0 space-y-4 mt-12">
          <button onClick={() => window.open('resume/resume.pdf', '_blank')} className="bg-white w-[200px] rounded-md font-medium py-3 text-black border border-white hover:text-white hover:bg-black transition duration-300">
            View Resume
          </button>
          <Link to="work" smooth={true} duration={500}>
          <button className="w-[200px] rounded-md font-medium py-3 border border-white hover:bg-white hover:text-black transition duration-300">
            
              My Work

          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
