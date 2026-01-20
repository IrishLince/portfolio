'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';

const ProjectAccordion = () => {
  const [openProject, setOpenProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: "item-1",
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
      id: "item-2",
      title: "Macmac",
      technology: "Tailwind CSS, Github Live hosting",
      description: "I created a website for my dog, Macmac, as part of this project. The idea came to me as a way to ensure his safety. I plan to attach a QR code to his leash that links directly to the website. If Macmac ever gets lost, anyone can simply scan the QR code to access all his details on the site, hosted live on GitHub.",
      projectUrl: "https://irishlince.github.io/Macmac/",
      role: "Frontend Developer",
      duration: "2023",
      keyFeatures: [
        "QR code linking to the website for quick access",
        "Details about Macmac, including contact information",
        "Live hosting on GitHub for easy availability",
        "Responsive design for mobile and desktop users"
      ]
    },
    {
      id: "item-3",
      title: "E-commerce Dashboard",
      technology: "Next.js, Java Backend, RESTful APIs",
      description: "Created an administrative dashboard for managing products, orders, and customer data with real-time updates.",
      role: "Backend Developer",
      duration: "2023",
      keyFeatures: [
        "Real-time Updates",
        "Product Management",
        "Order Tracking",
        "Customer Analytics"
      ]
    }
  ];

  const toggleProject = (projectId) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a] text-white">
      <Navbar />

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