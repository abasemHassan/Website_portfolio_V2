import React, { useEffect, useState } from "react";

const skills = {
  technical: [
    { name: "Python", level: 30 },
    { name: "JavaScript", level: 40 },
    { name: "React", level: 20 },
    { name: "Node.js", level: 30 },
    { name: "PostgreSQL", level: 30 },
    { name: "C", level: 70 },
    { name: "C#", level: 50 },
    { name: "SQL", level: 40 },
  ],
  nonTechnical: [
    { name: "Problem-Solving", level: 90 },
    { name: "Communication", level: 60 },
    { name: "Teamwork", level: 80 },
    { name: "Adaptability", level: 85 },
    { name: "Customer Focus", level: 60 },
    { name: "Time Management", level: 100 },
  ],
};

const ProgressBar = ({ name, level }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 500); // Delay to start animation
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-lg font-semibold text-gray-700">{name}</span>
        <span className="text-lg font-semibold text-gray-700">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-[5000ms] ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <div className="p-8 bg-white" id="skills">
    <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skills.technical.map((skill, index) => (
        <ProgressBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>

    <h2 className="text-3xl font-bold text-center mt-12 mb-10">Non-Technical Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skills.nonTechnical.map((skill, index) => (
        <ProgressBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  </div>
);

export default SkillsSection;
