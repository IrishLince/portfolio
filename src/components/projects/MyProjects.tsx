'use client'
import React, { useState, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, Briefcase, Calendar, Code, Zap, CheckCircle, Droplet, Globe, BarChart3, Briefcase as BriefcaseIcon } from 'lucide-react'

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
  icon: React.ReactNode
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
    ],
    icon: <Droplet className="w-8 h-8 text-[#ff4d00]" />
  },
  {
    id: "item-2",
    title: "Mecha Mods - Figma Design",
    technology: "Figma, UI/UX Design",
    description: "A comprehensive Figma design system for Mecha Mods mechanical keyboard e-commerce platform. This project encompasses a complete design approach with detailed user personas to understand target customers, information architecture that organizes product categories and services logically, wireframes defining layout structure and user flows, and a cohesive design system with reusable components. The design includes mood boards capturing the brand aesthetic, responsive layout variations for different screen sizes, user flow diagrams mapping customer journeys, and a priority matrix for feature implementation. Every design decision was made with user experience in mind, ensuring intuitive navigation, visual hierarchy, and seamless interaction patterns across all pages.",
    projectUrl: "https://www.figma.com/design/0UopDZT46U0Tv4K2zISpAy/Lince_Mechamods_INDIVIDUAL?node-id=0-1&t=HjhaHcKKEB1sLZTf-1",
    role: "UI/UX Designer",
    duration: "2024",
    keyFeatures: [
      "User Personas - Understanding target audience and their needs",
      "Information Architecture - Logical organization of content and services",
      "Wireframes - Layout and structural design of all pages",
      "Design System - Reusable components and design tokens",
      "Mood Board - Brand aesthetic and visual direction",
      "Responsive Layouts - Multi-device design variations"
    ],
    icon: <Globe className="w-8 h-8 text-[#ff4d00]" />
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
    ],
    icon: <BarChart3 className="w-8 h-8 text-[#ff4d00]" />
  }
]

// Memoize ProjectCard component
const ProjectCard = memo(({ project, isOpen, onToggle, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
    className="group"
  >
    <button
      onClick={() => onToggle(project.id)}
      className="w-full text-left"
    >
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800/50 rounded-2xl p-6 sm:p-8 hover:border-[#ff4d00]/30 transition-all duration-300 cursor-pointer group/card"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Icon */}
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="flex-shrink-0 p-3 bg-[#ff4d00]/10 rounded-xl group-hover/card:bg-[#ff4d00]/20 transition-all duration-300"
            >
              {project.icon}
            </motion.div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ff4d00] bg-clip-text text-transparent mb-2 group-hover/card:from-[#ff8a5b] group-hover/card:to-[#ff6b35] transition-all duration-300 line-clamp-2"
              >
                {project.title}
              </motion.h3>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Code className="w-4 h-4 text-[#ff4d00]" />
                <p className="text-sm text-gray-400 font-medium line-clamp-1">
                  {project.technology}
                </p>
              </div>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-6 h-6 text-[#ff4d00] group-hover/card:text-[#ff6b35] transition-colors" />
          </motion.div>
        </div>
      </div>
    </button>

    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] border-l border-r border-b border-gray-800/50 rounded-b-2xl p-6 sm:p-8 space-y-8">
            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#ff4d00]" />
                Overview
              </h4>
              <p className="text-gray-300 leading-relaxed text-base">
                {project.description}
              </p>
              {project.projectUrl && project.projectUrl !== '#' && (
                <motion.a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-[#ff4d00] hover:text-[#ff6b35] font-semibold transition-all duration-300 group/link"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                  View Live Project
                </motion.a>
              )}
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    className="flex items-center gap-3 bg-[#1a1a1a]/60 border border-gray-800/30 rounded-lg px-4 py-3 hover:border-[#ff4d00]/20 hover:bg-[#1a1a1a]/80 transition-all duration-300"
                  >
                    <span className="text-[#ff4d00] text-lg">→</span>
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Role & Duration */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-800/30"
            >
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#ff4d00]" />
                  Role
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{project.role}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#ff4d00]" />
                  Duration
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{project.duration}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
))
ProjectCard.displayName = 'ProjectCard'

function MyProjectsContent() {
  const [openProject, setOpenProject] = useState<string | null>(null)
  
  const toggleProject = useCallback((projectId: string) => {
    setOpenProject(prev => prev === projectId ? null : projectId)
  }, [])

  return (
    <section className="py-16 px-6 lg:px-12 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" style={{ willChange: 'contents' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block p-6 rounded-3xl bg-[#ff4d00]/10 mb-8"
            style={{ willChange: 'transform' }}
          >
            <BriefcaseIcon className="w-14 h-14 text-[#ff4d00]" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff6b35] via-[#ff4d00] to-[#ff8a5b] bg-clip-text text-transparent">
            My Projects
          </h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-xl">
            Showcase of my recent work and achievements with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-4">
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

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  )
}

export const MyProjects = memo(MyProjectsContent)
MyProjectsContent.displayName = 'MyProjectsContent'
