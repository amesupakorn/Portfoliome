const Work = () => {
    const projects = [
      {
        id: 1,
        title: "DeFi X",
        description: "Crypto Website Development for DeFi X",
        image: "/images/defix.png", 
        tags: ["React JS", "Web Development"],
        rowSpan: "row-span-2", 
      },
      {
        id: 2,
        title: "Dev X",
        description: "Agency Website Development for Dev X",
        image: "/images/devx.png", 
        tags: ["React JS", "Web Development"],
        rowSpan: "row-span-1",
      },
      {
        id: 3,
        title: "Dark X",
        description: "Webflow Website for Dark X",
        image: "/images/darkx.png",
        tags: ["Webflow", "Web Development"],
        rowSpan: "row-span-2",
      },
      {
        id: 4,
        title: "Light X",
        description: "E-commerce Website",
        image: "/images/lightx.png",
        tags: ["Vue JS", "Web Development"],
        rowSpan: "row-span-1",
      },
    ];
  
    return (
        <div className="bg-[#0a0b10] text-white py-12 px-4">
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
            href="#"
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
                <div className="flex space-x-2 mb-3">
                    {project.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full group-hover:bg-blue-500 group-hover:text-white transition"
                    >
                        {tag}
                    </span>
                    ))}
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-semibold group-hover:text-blue-500 transition">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-200 transition">
                    {project.description}
                </p>

                {/* Image */}
                <div className="mt-4 rounded-lg overflow-hidden">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover h-[200px] group-hover:scale-105 transition-transform"
                    />
                </div>
                </div>
            ))}
            </div>

      </div>
    );
  };
  
  export default Work;
  