import React from "react";
import Strings from '../Shared/Strings';

interface Experiences {
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  duration: string;
  achievements: string[];
}

const experiences: Experiences[] = [
  {
    title: "Upgrade Specialist and PC Repair (Freelance)",
    company: "Self-Employed",
    companyLogo: "remote.png",
    location: "Guelph, CA",
    duration: "Sept 2020 - Present",
    achievements: [
      "Built and repaired over 100 PCs, saving clients up to 25% in hardware costs.",
      "Trained a junior technician, increasing sales by $8,000 in two months.",
      "Enhanced hardware upgrade efficiency, achieving a 50% faster resolution rate.",
    ],
  },
  {
    title: "Software Developer (Co-op)",
    company: "Bastian Solutions",
    companyLogo: "bastianSolutions.webp",
    location: "Guelph, CA",
    duration: "Sept - Dec 2022",
    achievements: [
      "Worked in a team of 5 to build a digital twin of Bastian’s factories.",
      "Implemented and tested an OPC UA client in C#.",
      "Wrote comprehensive ROS documentation for Azure integration, streamlining future projects.",
    ],
  },
  {
    title: "IT Service Desk Support (Co-op)",
    company: "City of Guelph",
    companyLogo: "CityOfGuelph.webp",
    location: "Guelph, CA",
    duration: "May - Sept 2022",
    achievements: [
      "Resolved 90% of IT issues on the first interaction, reducing ticket backlog by 15%.",
      "Assisted 30 employees daily, ensuring efficient IT issue resolution.",
      "Enhanced ticket documentation accuracy by 30%, improving issue tracking.",
    ],
  },
  {
    title: "IT Technician (Intern)",
    company: "University of Guelph",
    companyLogo: "UniversityOfGuelph.webp",
    location: "Guelph, CA",
    duration: "Jan - Sept 2021",
    achievements: [
      "Provided technical support for university departments using Active Directory & SCCM.",
      "Maintained IT inventory and streamlined ticketing system efficiency.",
      "Diagnosed hardware failures and trained users on common IT issues.",
    ],
  },
];

const WorkExperiences: React.FC = () => {
  return (
    <section id="work-experiences" className="scroll-mt-24 p-6 max-w-4xl mx-auto">
      {/* Title Section */}
      <div className='flex items-center'>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <h2 className='text-[24px] font-bold'><center>{Strings.WORKEXPERIENCES}</center></h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      </div>

      {/* Experience List - One Per Row */}
      <div className="mt-10 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg border border-gray-200 flex items-start space-x-6">
            {/* Company Logo */}
            <img
              src={exp.companyLogo}
              alt={`${exp.company} logo`}
              className="w-16 h-16 rounded object-contain"
            />
            
            {/* Experience Details */}
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} • {exp.location}</p>
              <p className="text-gray-500">{exp.duration}</p>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperiences;
