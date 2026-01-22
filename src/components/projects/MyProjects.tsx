'use client'
import React, { useState, memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'

// Type definitions
interface Project {
  id: string
  title: string
  technology: string
  description: string
  projectUrl?: string
  role: string
  duration: string
  keyFeatures: string[]
}

interface ProjectCardProps {
  project: Project
  isOpen: boolean
  onToggle: (id: string) => void
  index: number
}

// Memoize projects data outside component
const PROJECTS_DATA: Project[] = [
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
]

// Memoize ProjectCard component
const ProjectCard = memo(({ project, isOpen, onToggle, index }: ProjectCardProps) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
    viewport={{ once: true, margin: '0px 0px -50px 0px' }}
    className="bg-[#2a2a2a]/50 rounded-xl border border-gray-700/50 overflow-hidden shadow-lg transition-all duration-300 hover:border-gray-600"
    style={{ willChange: 'transform' }}
  >
    <button
      onClick={() => onToggle(project.id)}
      className="w-full px-6 md:px-8 py-6 flex items-center justify-between hover:bg-[#2a2a2a]/70 transition-all duration-300 group"
    >
      <div className="flex flex-col items-start text-left">
        <h3 className="text-xl md:text-2xl font-semibold text-[#ff4d00] group-hover:text-[#ff6b33] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">
          {project.technology}
        </p>
      </div>
      <ChevronDown
        className={`w-6 h-6 md:w-7 md:h-7 text-gray-400 transform transition-transform duration-300 group-hover:text-gray-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
        style={{ willChange: 'transform' }}
      />
    </button>

    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className="px-6 md:px-8 pb-8 space-y-8"
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
                className="inline-flex items-center gap-2 text-[#ff4d00] hover:text-[#ff6b33] mt-4 font-medium transition-all duration-300 hover:gap-3"
              >
                View Project <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg md:text-xl font-semibold text-white">Key Features</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature: string, idx: number) => (
              <li
                key={idx}
                className="text-gray-300 flex items-center gap-3 bg-[#2a2a2a]/30 rounded-lg px-4 py-3 md:py-4 transition-all duration-300 hover:translate-x-1 hover:bg-[#2a2a2a]/50"
              >
                <span className="text-[#ff4d00] text-lg">•</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-2">
          <div className="space-y-2 transition-all duration-300 hover:translate-y-[-2px]">
            <h4 className="text-lg md:text-xl font-semibold text-white">Role</h4>
            <p className="text-gray-300">{project.role}</p>
          </div>
          <div className="space-y-2 transition-all duration-300 hover:translate-y-[-2px]">
            <h4 className="text-lg md:text-xl font-semibold text-white">Duration</h4>
            <p className="text-gray-300">{project.duration}</p>
          </div>
        </div>
      </motion.div>
    )}
  </motion.div>
))
ProjectCard.displayName = 'ProjectCard'

function MyProjectsContent() {
  const [openProject, setOpenProject] = useState<string | null>(null)
  
  const toggleProject = useCallback((projectId: string) => {
    setOpenProject(prev => prev === projectId ? null : projectId)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 text-lg">Explore my recent work and achievements</p>
        </motion.div>

        <div className="space-y-6">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOpen={openProject === project.id}
              onToggle={toggleProject}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export const MyProjects = memo(MyProjectsContent)
MyProjectsContent.displayName = 'MyProjectsContent'
