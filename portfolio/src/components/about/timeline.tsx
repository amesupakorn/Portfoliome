
const Timeline = () => {
  const experiences = [
    {
      date: '2022 - Present',
      position: "King Mongkut's Institute of Technology Ladkrabang",
      description: 'School of Information Technology Subject Area Software Engineering',
    },
    {
      date: '2018 - 2021',
      position: 'Rattanakosin Somphot Bang Khun Thian School',
      description: 'Sciences and Mathematics Program',
    },
  ];

  return (
    <div className="text-white py-6 px-1">
      <h2 className="text-2xl font-bold mb-5">Education</h2>
      <div className="relative">
        <div className="absolute left-[15px] top-0 h-full w-[2px] bg-gray-600"></div>
        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-[8px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>

              <div className="mb-4">
                <div className="inline-block border border-gray-700 text-gray-300 px-4 py-1 text-sm rounded-full">
                  {exp.date}
                </div>
              </div>
              <h3 className="text-lg font-semibold">{exp.position}</h3>
              <p className="text-sm text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
