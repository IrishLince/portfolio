'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Footer } from '../../components/footer';

const ProjectAccordion = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: "item-1",
      

      title: "Blood Bank Management System",
      technology: "React.js, Tailwind CSS, JavaScript, MongoDB, Node.js, Railway.app",
      description: "A web-based system for managing blood donors, inventory, and requests. It helps blood banks organize records, track blood availability, and process requests efficiently through a centralized platform.",
      projectUrl: "https://redsource.up.railway.app/",
      role: "Team Leader Frontend Developer",
      duration: "2024",
      keyFeatures: [
        "Donor registration",
        "Blood inventory tracking",
        "Request management",
        "Admin dashboard",
        "Responsive design"
      ]
    },
    {
      id: "item-2",
      

      title: "Websystem Final",
      technology: "Tailwind CSS, Github Live hosting",
      description: "A personal portfolio website showcasing my skills and projects. Features a responsive design, dark theme, and modern UI components.",
      projectUrl: "https://irishlince.github.io/websys-final",
      role: "Frontend Developer",
      duration: "2024",
      keyFeatures: [
        "Responsive Design",
        "Dark Theme",
        "Modern UI Components",
        "Figma templates"
      ]
    },
    {
      id: "item-3",
      title: "E-commerce Dashboard",
      technology: "Next.js, React, Node.js Backend, RESTful APIs",
      description: "Mecha Mods is your go-to destination for all things mechanical keyboards. Whether you're looking for high-quality keyboards, key-caps, switches, or accessories, we offer a wide range of products to cater to your needs. Our listings are detailed with images and specifications to help you make informed decisions. Additionally, we provide professional services including keyboard assembly, switch lubing, and custom switch modifications. These services are designed to enhance the performance and longevity of your keyboard, ensuring it delivers the best experience possible. At Mecha Mods, we focus on providing a seamless shopping experience with easy-to-navigate menus and a secure payment system, so you can shop with confidence.",
      projectUrl: "https://mechamods.up.railway.app/",
      role: "Full Stack Developer",
      duration: "2023",
      keyFeatures: [
        "Wide Product Selection",
        "Detailed Product Listings with Images",
        "Professional Services (Assembly, Lubing, Modifications)",
        "Secure Payment System",
        "Seamless Shopping Experience",
        "Customer Support"
      ]
    }
  ];

  const toggleProject = (projectId: string) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a] text-white">
      <main className="flex-1 px-4 lg:px-12 py-24 md:py-26">
        <div className="space-y-6 w-full max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-white mb-8 px-4 opacity-0 ${
            isVisible ? 'animate-fade-in' : ''
          }`}>
            My Projects
          </h2>
          
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-[#2a2a2a]/50 rounded-xl border border-gray-700/50 overflow-hidden 
                shadow-lg transition-all duration-300 hover:border-gray-600 opacity-0
                ${isVisible ? 'animate-slide-in' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between 
                  hover:bg-[#2a2a2a]/70 transition-all duration-300 group"
              >
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#ff4d00] 
                    group-hover:text-[#ff6b33] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">
                    {project.technology}
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 md:w-7 md:h-7 text-gray-400 transform transition-all 
                    duration-300 group-hover:text-gray-300 ${
                    openProject === project.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openProject === project.id && (
                <div 
                  className="px-6 md:px-8 pb-8 space-y-8 animate-content-fade"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-white mb-3">Description</h4>
                      <p className="text-gray-300 leading-relaxed">{project.description}</p>
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#ff4d00] hover:text-[#ff6b33] 
                            mt-4 font-medium transition-all duration-300 hover:gap-3"
                        >
                          View Project <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-white">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.keyFeatures.map((feature, index) => (
                        <li 
                          key={index} 
                          className="text-gray-300 flex items-center gap-3 bg-[#2a2a2a]/30 
                            rounded-lg px-4 py-3 md:py-4 transform transition-all duration-300
                            hover:translate-x-1 hover:bg-[#2a2a2a]/50"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <span className="text-[#ff4d00] text-lg">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-2">
                    <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
                      <h4 className="text-lg md:text-xl font-semibold text-white">Role</h4>
                      <p className="text-gray-300">{project.role}</p>
                    </div>
                    <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
                      <h4 className="text-lg md:text-xl font-semibold text-white">Duration</h4>
                      <p className="text-gray-300">{project.duration}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectAccordion;