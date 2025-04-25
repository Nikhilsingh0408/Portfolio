import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 sm:px-10 md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Dot */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-200 border-4 border-[#8245ec] w-14 h-14 rounded-full z-10 shadow-md">
              <img
                src={edu.img}
                alt={edu.school}
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
                {/* Logo */}
                <div className="w-14 h-14 rounded-md overflow-hidden bg-white shadow-sm">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Info */}
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-xs text-gray-500">{edu.date}</p>
                </div>
              </div>

              {/* Grade and Description */}
              <p className="text-gray-400 text-sm font-semibold">
                Grade: {edu.grade}
              </p>
              <p className="text-gray-400 text-sm mt-2">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
