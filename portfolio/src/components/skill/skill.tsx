import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import tools from "../../data/tools"; // นำเข้าข้อมูล tools จากไฟล์แยก
import AOS from "aos";
import 'aos/dist/aos.css';

const Skill = () => {

  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const displayedTools = showAll ? tools : tools.slice(0, 8);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);


     useEffect(() => {
        AOS.init({
          duration: 1000,
        })
      })

  return (
    <div id="skill" className="text-white py-12">
      <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1500" className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col">
          <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">My Skills</p>
          <div className="w-10 h-[2px] bg-gray-600 mb-4"></div>
        </div>

        <div className="text-left mb-10">
          <h2 className="text-3xl font-bold">Essential Tools I use</h2>
          <p className="text-gray-400 mt-2">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
          </p>
        </div>

        {/* Tools Grid */}
        <div
          className={`transition-all duration-1000 ease-in-out overflow-hidden ${
            showAll ? "max-h-[2000px]" : "max-h-[600px]"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            {isLoading
              ? Array(8)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex border border-gray-700 rounded-2xl p-3 shadow-lg space-x-4 animate-pulse"
                    >
                      <div className="rounded-full bg-gray-800 p-2 w-[32px] h-[32px]"></div>
                      <div className="flex flex-col space-y-2">
                        <div className="bg-gray-700 h-4 w-24 rounded"></div>
                        <div className="bg-gray-700 h-3 w-32 rounded"></div>
                      </div>
                    </div>
                  ))
              : displayedTools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex border border-gray-700 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow space-x-4"
                  >
                    <div className="rounded-full bg-gray-800 p-2 object-cover">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-[32px] h-[32px] rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">{tool.name}</h3>
                      <p className="text-gray-400 text-sm">{tool.description}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 text-white rounded-full hover:bg-gray-800 transition"
        >
          {showAll ? (
            <FaChevronUp size={24} className="mx-auto text-gray-400 hover:text-gray-300" />
          ) : (
            <FaChevronDown size={24} className="mx-auto text-gray-400 hover:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Skill;
