import React from "react";
import { services } from "../../constants";

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 px-6 sm:px-10 md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">SERVICES</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">
          A showcase of the services I offer, demonstrating my expertise in frontend development, backend development, and problem-solving through clean code and scalable solutions.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Services Items */}
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Dot */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-200 border-4 border-[#8245ec] w-14 h-14 rounded-full z-10 shadow-md">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:w-[48%] p-6 sm:p-8 rounded-xl border border-gray-700 bg-gray-900 shadow-lg backdrop-blur-sm transition-transform transform hover:scale-[1.02] ${
                index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
              } z-20`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-md overflow-hidden bg-white shadow-sm">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-gray-300">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm">{service.desc}</p>

              {/* Technologies List */}
              <div className="mt-4">
                <h5 className="text-white font-medium mb-2">Technologies:</h5>
                <ul className="flex flex-wrap gap-2">
                  {service.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec]/90 text-white text-xs px-3 py-1 rounded-full border border-white/20"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coding Profiles */}
              {service.profiles && (
                <div className="mt-6">
                  <h5 className="text-white font-medium mb-2">Coding Profiles:</h5>
                  <div className="flex flex-wrap gap-4">
                    {service.profiles.map((profile, idx) => (
                      <a
                        key={idx}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                      >
                        <img
                          src={profile.logo}
                          alt={profile.name}
                          className="w-5 h-5 rounded-full"
                        />
                        <span className="text-white text-sm">{profile.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
