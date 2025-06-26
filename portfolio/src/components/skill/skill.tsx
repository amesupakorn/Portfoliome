import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import tools from "../../data/tools";
import AOS from "aos";
import 'aos/dist/aos.css';

const Skill = () => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const displayedTools = showAll ? tools : tools.slice(0, 8);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  
  return (
    <section id="skill" className="text-white py-16">
      <div 
        data-aos="fade-up" 
        data-aos-delay="50" 
        data-aos-duration="1000" 
        className="max-w-6xl mx-auto px-4"
      >
        <div className="flex flex-col">
          <p className="text-blue-500 text-sm uppercase tracking-wider font-semibold mb-1">My Skills</p>
          <div className="w-10 h-[2px] bg-gray-600 mb-4"></div>
        </div>
        
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Essential Tools I Use</h2>
          <p className="text-gray-400 mt-2">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
          </p>
        </div>
        
        {/* Tools Grid */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            showAll ? "max-h-[2000px]" : "max-h-[600px]"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading
              ? Array(8)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center border border-gray-700 bg-[#16181D] rounded-2xl p-4 shadow-lg animate-pulse"
                    >
                      <div className="rounded-lg bg-gray-800 p-2 w-12 h-12 mr-4"></div>
                      <div className="flex flex-col space-y-2 flex-1">
                        <div className="bg-gray-700 h-5 w-24 rounded"></div>
                        <div className="bg-gray-700 h-3 w-20 rounded"></div>
                      </div>
                    </div>
                  ))
              : displayedTools.map((tool, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="flex items-center border bg-gradient-to-br from-zinc-800 to-gray-900  border-gray-700 bg-[#16181D] rounded-2xl p-2 shadow-lg hover:shadow-xl hover:border-gray-600 transition-all group"
                  >
                    <div className="rounded-lg  bg-gradient-to-br from-zinc-900 to-gray-900 p-3 mr-4 group-hover:bg-blue-900/20 transition-colors">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">{tool.name}</h3>
                      <p className="text-gray-400 text-sm">{tool.description}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        
        {tools.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-gradient-to-br from-zinc-800 to-gray-900  hover:bg-gray-700 text-white rounded-full transition-colors flex items-center justify-center mx-auto"
            >
              {showAll ? (
                <>
                  Show Less <FaChevronUp className="ml-2" />
                </>
              ) : (
                <>
                  Show More <FaChevronDown className="ml-2" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;