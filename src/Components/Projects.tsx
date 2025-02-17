import React from "react";
import Strings from '../Shared/Strings';
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Re-Tech Hub",
    description: "Re-Tech Hub is a full-stack PERN application that aggregates classified ads, streamlining searches. I designed the layout in Figma and integrated Python Scrapy, automating data collection by 80%, ensuring efficiency and a seamless user experience.",
    technologies: ["React", "Node.js", "PostgreSQL", "Python", "Express", "Figma"],
    image: "/Re-Tech Hub.JPG",
    link: "https://github.com/abasemHassan/Scraper",
  },
  {
    title: "Crypto Web Scraper",
    description: "A Python-based Crypto Web Scraper application is designed to fetch real-time cryptocurrency prices from CoinMarkCap. It offers seamless integration with Google Sheets for easy tracking of cryptocurrency prices and boasts robust error handling mechanisms for uninterrupted operation.",
    technologies: ["Python", "BeautifulSoup", "Google Sheets API"],
    image: "Mining revenu sheet.png",
    link: "https://github.com/abasemHassan/Crypto-WebScraper",
  },
  {
    title: "SVG Image Viewer",
    description: "A web-based image viewer allowing users to edit and save SVG images.",
    technologies: ["JavaScript", "jQuery", "Node.js"],
    image: "/svg-image-viewer.png",
    link: "https://github.com/abasemHassan/svg-image-viewer",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6 lg:px-24">
      <div className='flex items-center'>
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
            <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
            <h2 className='text-[24px] font-bold'>{Strings.PROJECTS}</h2>
            <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-around mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-green-500 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
