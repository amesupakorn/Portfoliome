
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
        <div className="space-y-8">
          <div className="absolute left-[15px] top-0 h-full w-[2px] bg-gradient-to-b from-blue-600 to-cyan-400"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-[6px] top-2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]"></div>

              <div className="mb-4">
                <div className="inline-block border bg-gradient-to-br from-zinc-800 to-gray-900  border-gray-700 text-gray-300 px-4 py-1 text-sm rounded-full">
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
