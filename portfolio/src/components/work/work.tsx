import { useState, useEffect } from "react";
import projects from "../../data/work";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Effect for loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  // Get unique tags from all projects
  const uniqueTags = ["All", ...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on active tag
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section
      id="work"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="800"
      className="text-white py-16 px-4 "
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <p className="text-blue-500 text-sm uppercase tracking-wider font-semibold mb-2">
              My Portfolio
            </p>
            <div className="w-10 h-[2px] bg-gray-600 mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Take a look at the latest projects I've done

            </h2>
              <p className="text-gray-300 text-sm tracking-wider font-semibold mb-2 mt-4">
              Featured Projects            
              </p>
          </div>
          <a
            href="https://github.com/amesupakorn"
            className="mt-4 md:mt-0 text-blue-500 inline-flex items-center group hover:text-blue-400 transition-colors"
          >
            Browse all projects 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        
          {/* Filter Tabs
          <div className="flex flex-wrap gap-3 mb-10">
            {uniqueTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === tag 
                    ? 'bg-blue-500 text-white font-medium' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))} */}
        {/* </div> */}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {isLoading
          ? Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#16181D] rounded-2xl p-6 shadow-lg animate-pulse h-96"
                >
                  {/* Skeleton Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="h-4 w-16 bg-gray-700 rounded-full"></div>
                    <div className="h-4 w-20 bg-gray-700 rounded-full"></div>
                  </div>
                  {/* Skeleton Title */}
                  <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                  {/* Skeleton Description */}
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  </div>
                  {/* Skeleton Button */}
                  <div className="h-4 bg-gray-700 rounded w-1/3 mt-4"></div>
                  {/* Skeleton Image */}
                  <div className="h-48 bg-gray-700 rounded-lg mt-6"></div>
                </div>
              ))
          : filteredProjects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`bg-gradient-to-br from-zinc-900 to-gray-900  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  project.rowSpan || ''
                } group cursor-pointer h-full flex flex-col`}
                onClick={() => window.open(project.link, "_blank")}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gradient-to-br from-zinc-800 to-gray-900  text-gray-400 px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-6 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400 text-sm group-hover:text-blue-500 inline-flex items-center transition-colors">
                    View project <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a> 
                  )} 
                </div>
              </div>
            ))}
      </div>
      

    </section>
  );
};

export default Work;