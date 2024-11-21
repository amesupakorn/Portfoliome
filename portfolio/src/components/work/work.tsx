const Work = () => {
    const projects = [
      {
        id: 1,
        title: "Teammusic",
        description: "Website Development for Audio Streaming Systems on Amazon Web Services (AWS)",
        link: "https://github.com/amesupakorn/TM_Teammusic",
        image: "/work/tm.png", 
        tags: ["Django", "Tailwind", "Amazon Web Services", "PostgreSQL"],
        rowSpan: "row-span-2", 
      },
      {
        id: 2,
        title: "WellCareConnect",
        description: "Chatbot Solutions for Preliminary Disease Assessment and Health Guidance",
        link: "https://github.com/amesupakorn/WellCareConnect",
        image: "/work/wellcare.png", 
        tags: ["Django", "Tailwind", "Dialogflow", "Google Cloud", "Docker", "Jenkins", "PostgreSQL"],
        rowSpan: "row-span-1",
      },
      {
        id: 3,
        title: "HyGeas Hotel",
        description: "A comprehensive hotel management system integrating frontend guest experience and backend hotel operations.",
        link: "https://github.com/amesupakorn/HYGEAS_HOTEL-web-",
        image: "/work/hygeas.png",
        tags: ["PHP", "Bootstrap", "DBeaver"],
        rowSpan: "row-span-1",
      },
      {
        id: 4,
        title: "OhYummy",
        description: "An all-in-one restaurant management website that integrates backend kitchen operations and frontend customer-facing solutions.",
        link: "https://github.com/amesupakorn/OhYummy",
        image: "/work/ohyum.png",
        tags: ["PHP", "Bootstrap", "DBeaver"],
        rowSpan: "row-span-3",
      },
    ];
  
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
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {projects.map((project) => (
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
                    onClick={() => window.open(`${project.link}`, '_blank')}
                    className="mt-2 text-gray-400 text-sm group-hover:text-blue-500 inline-block group-hover:underline flex items-center">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2"
                        >
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.152-1.11-1.459-1.11-1.459-.907-.62.069-.607.069-.607 1.004.07 1.533 1.03 1.533 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.104-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.578 9.578 0 0112 6.801a9.56 9.56 0 012.508.338c1.91-1.296 2.75-1.026 2.75-1.026.545 1.376.202 2.393.099 2.646.64.7 1.029 1.591 1.029 2.682 0 3.842-2.337 4.687-4.566 4.936.36.31.678.921.678 1.855 0 1.339-.012 2.421-.012 2.75 0 .268.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                            clipRule="evenodd"
                        />
                        </svg> Explore my work <span className="ml-2">→</span>
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
  