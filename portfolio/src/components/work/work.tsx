import { useState, useEffect } from "react";
import projects from  "../../data/work"

const Work = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="work" className="text-white py-12 px-4">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto mb-10">
        <p className="text-blue-500 text-sm uppercase tracking-wider font-semibold mb-2">
          My Portfolio
        </p>
        <div className="w-10 h-[2px] bg-gray-600 mb-4"></div>
        <h2 className="text-3xl font-bold mt-2">
          Take a look at the latest projects I've done
        </h2>
        <a
          href="https://github.com/amesupakorn"
          className="mt-3 text-blue-500 inline-block hover:underline flex items-center"
        >
          Browse all projects <span className="ml-2">→</span>
        </a>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {isLoading
          ? Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#16181D] rounded-2xl p-4 shadow-md transition-shadow row-span-1 animate-pulse"
                >
                  {/* Skeleton Tags */}
                  <div className="flex flex-wrap gap-2 mb-3 max-w-full overflow-hidden">
                    <div className="h-4 w-16 bg-gray-700 rounded-full"></div>
                    <div className="h-4 w-20 bg-gray-700 rounded-full"></div>
                  </div>

                  {/* Skeleton Title and Description */}
                  <div className="h-5 bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>

                  {/* Skeleton Button */}
                  <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>

                  {/* Skeleton Image */}
                  <div className="h-40 bg-gray-700 rounded-lg"></div>
                </div>
              ))
          : projects.map((project) => (
              <div
                key={project.id}
                className={`bg-[#16181D] rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow ${project.rowSpan} group`}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3 max-w-full overflow-hidden">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full group-hover:bg-blue-500 group-hover:text-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold group-hover:text-blue-500 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-200 transition">
                  {project.description}
                </p>

                <button
                  onClick={() => window.open(`${project.link}`, "_blank")}
                  className="mt-2 text-gray-400 text-sm group-hover:text-blue-500 inline-block group-hover:underline flex items-center"
                >
                  Explore my work <span className="ml-2">→</span>
                </button>

                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover h-auto group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Work;
