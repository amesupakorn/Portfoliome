import { Code } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      date: 'Apr 2025 – Jun 2025',
      position: 'Full-stack Developer (Intern)',
      company: 'tohome.com',
      logo: '/tohome.png',
      website: 'https://www.tohome.com',
      description: [
        'Developed and maintained both frontend and backend of the website to ensure smooth user experience and system performance',
        'Improved UX/UI based on real user behavior to reduce drop rates and increase conversion rates',
        'Structured and published SEO-friendly content to improve Google rankings and drive consistent organic traffic',
        'Enhanced the CMS/dashboard for non-technical team members to manage content more easily',
        'Built backend APIs with RabbitMQ for asynchronous task handling under high loads',
        'Integrated an AI-powered article generation pipeline using LLMs for scalable SEO content'
      ],
      tech: ['TypeScript', 'Next.js', 'NodeJs','RabbitMQ', 'AI APIs', 'CMS']
    },
  ];

  return (
    <div className="text-white ">

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[20px] top-0 h-full w-[2px] bg-gradient-to-b from-blue-600 to-cyan-400"></div>

       <div className="space-y-14">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-14">
              {/* Glowing Dot */}
              <div className="absolute left-[12px] top-2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]"></div>

              {/* Entire Card Wrapped in <a> */}
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-br from-zinc-900  to-gray-900 rounded-xl lg:p-6 p-4 shadow-xl transition duration-300  hover:border-blue-500"
              >
                <div className="flex items-center mb-5">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-16 h-16 object-contain rounded-md mr-4 bg-gray-700 p-1 shadow"
                    />
                  )}
                  <div>
                    <h3 className="sm:text-xl text-base font-semibold text-white group-hover:text-blue-500 transition-colors">{exp.position}</h3>
                    <p className="text-sm text-gray-400 italic group-hover:text-white transition-colors ">{exp.company}</p>
                  </div>
                </div>

                <span className="inline-block bg-gradient-to-br from-zinc-800 to-gray-900 group-hover:text-white transition-colors text-xs text-gray-200 px-3 py-1 rounded-full mb-4 tracking-wide">
                  {exp.date}
                </span>

                <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 mb-3 leading-relaxed group-hover:text-white transition-colors ">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="text-xs text-gray-400 mt-3 flex items-center space-x-1 ">
                  <Code className="w-5 h-5 text-blue-400 hidden group-hover:text-blue-500 transition-colors sm:block" />
                  <span className="font-semibold text-blue-400 group-hover:text-blue-500 transition-colors ">Tech used:</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors ">{exp.tech.join(', ')}</span>
                </div>

                {/* Label showing it's a link */}
                <div className="inline-flex items-center text-sm text-gray-400 group-hover:text-blue-500 transition-colors mt-3">
                  Visit Website
                  <span className="ml-2 transform transition-transform duration-300 will-change-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;