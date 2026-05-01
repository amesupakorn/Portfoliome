import { useEffect } from "react";
import certificates from "../../data/certificates";
import AOS from "aos";
import "aos/dist/aos.css";

const Certificates = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="certificates"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="800"
      className="text-white mt-24 px-4"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col">
          <p className="text-blue-500 text-sm uppercase tracking-wider font-semibold mb-2">
            My Credentials
          </p>
          <div className="w-10 h-[2px] bg-gray-600 mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Licenses & Certifications
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            A collection of professional certifications and licenses I've earned to validate my skills and expertise in various technologies.
          </p>
        </div>
      </div>

      {/* Certificate Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-gradient-to-br from-zinc-900 to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-blue-900/20 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-800 hover:border-blue-500/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 transition-colors">
                {cert.image ? (
                  <img src={cert.image} alt={cert.issuer} className="w-full h-full object-contain" />
                ) : (
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )}
              </div>
              <span className="text-xs text-gray-500 font-medium">{cert.date}</span>
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
              {cert.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {cert.issuer}
            </p>

            {cert.credentialId && (
              <p className="text-xs text-gray-500 mt-auto mb-4 italic">
                ID: {cert.credentialId}
              </p>
            )}

            <div className="mt-auto">
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors group/link"
                >
                  Show credential
                  <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

export default Certificates;
