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
    technologies: ["Python", "BeautifulSoup", "Google Sheets API", "Cryptocurrency"],
    image: "Mining revenu sheet.png",
    link: "https://github.com/abasemHassan/Crypto-WebScraper",
  },
  {
    title: "SVG Image Viewer",
    description: "The SVG Image Viewer is a web app for viewing, editing, and saving SVG images. Built with HTML, CSS, and jQuery, it integrates Node.js and FFI-napi to enable seamless communication between C and JavaScript, ensuring efficient SVG processing and storage.",
    technologies: ["JavaScript", "jQuery", "HTML","CSS","Node.js","FFi-napi"],
    image: "/SVG.PNG",
    link: "",
  },
  {
    title: "PawsConnect",
    description: "PawsConnect is a playful, dog-centric app for Gen Z, inspired by dating apps. Using CSS gradients and Bootstrap, it offers a vibrant UI where users swipe through dog profiles, match, and chat, connecting dog lovers in a fun, interactive community.",
    technologies: ["HTML","CSS","Bootstrap"],
    image: "/tin dog.png",
    link: "https://github.com/abasemHassan/PawsConnect",
  },
  {
    title: "Roll & Win: Dice Duel",
    description: "Roll & Win: Dice Duel is an exciting online dice game for all ages! Inspired by classic tabletop games, it combines vibrant visuals with modern gameplay for endless fun. Challenge friends, roll the dice, and claim victory in this addictive experience!",
    technologies: ["JavaScript", "HTML","CSS"],
    image: "/DiceGame.png",
    link: "https://github.com/abasemHassan/Dice_Game",
  },
  {
    title: "Mondrian pantings",
    description: "Piet Mondrian's abstract art, part of the De Stijl movement, features bold black grids, primary colors (red, blue, yellow), and white space. His iconic rectangular compositions use straight lines to create balance and harmony, defining modern abstraction.",
    technologies: [ "HTML","CSS"],
    image: "/Mondrain_Painting_2.png",
    link: "https://github.com/abasemHassan/Mondrian_Panting_2",
  },
  {
    title: "Website Portfolio V1",
    description: "Amr Hassan's portfolio showcases his expertise in software development, featuring projects like an industrial communication client at Bastian Solutions, a Python-based crypto web scraper, and creative web applications such as 'PawsConnect' and 'Roll & Win: Dice Duel'.",
    technologies: [ "JavaScript","Html","CSS"],
    image: "/website portfolio.PNG",
    link: "https://abasemhassan.github.io/PortWebsite/",
  },
  {
    title: "Resume",
    description: "Amr Hassan's resume showcases his expertise in software development, featuring projects like an industrial communication client at Bastian Solutions, a Python-based crypto web scraper, and creative web applications such as 'PawsConnect' and 'Roll & Win: Dice Duel'.",
    technologies: ["Html","CSS"],
    image: "/Resume.PNG",
    link: "https://github.com/abasemHassan/HTML_Protfolio",
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
