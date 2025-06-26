import Timeline from './timeline';
import AOS from "aos";
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Experience = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })
  return (
    <div id='about' className="text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-[1200px] w-full items-center">
        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"  >
            <div className="flex flex-col">
            <p className="text-blue-500 text-sm uppercase tracking-wider font-semibold mb-1">My Experience</p>
            <div className="w-10 h-[2px] bg-gray-600 mb-4"></div>
            </div>

            <div className="text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
            <p className="text-gray-400 mt-2">
                A glimpse into my professional journey – roles I’ve taken, projects I’ve built, and skills I’ve gained throughout the years.
            </p>
            </div>
            <Timeline />
        </div>

      </div>
    </div>
  );
};

export default Experience;
