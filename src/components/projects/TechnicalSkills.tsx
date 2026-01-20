// @ts-nocheck
'use client'
import { 
  Users, Clock, Lightbulb, Briefcase, Cpu, Monitor
} from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'
import ElectricBorder from '../ElectricBorder'
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaWindows,
  FaLinux, FaGithub, FaFigma, FaNetworkWired, FaTools, 
  FaCode, FaPaintBrush, FaRobot
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiRailway, SiPostman, SiCanva, SiMongodb
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

export function TechnicalSkills(): React.ReactElement {
  const hardSkills = [
    { name: "HTML", icon: <FaHtml5 className="w-5 h-5" />, color: "from-orange-500 to-orange-600" },
    { name: "CSS", icon: <FaCss3Alt className="w-5 h-5" />, color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", icon: <FaJsSquare className="w-5 h-5" />, color: "from-yellow-500 to-yellow-600" },
    { name: "React.js", icon: <FaReact className="w-5 h-5" />, color: "from-cyan-500 to-cyan-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" />, color: "from-teal-500 to-teal-600" },
    { name: "Railway.app", icon: <SiRailway className="w-5 h-5" />, color: "from-blue-600 to-blue-700" },
    { name: "Hardware Troubleshooting", icon: <Cpu className="w-5 h-5" />, color: "from-gray-500 to-gray-600" },
    { name: "Windows OS", icon: <FaWindows className="w-5 h-5" />, color: "from-cyan-600 to-blue-700" },
    { name: "Basic Networking", icon: <FaNetworkWired className="w-5 h-5" />, color: "from-green-500 to-green-600" },
    { name: "Arch Linux", icon: <FaLinux className="w-5 h-5" />, color: "from-blue-600 to-blue-700" },
    { name: "UI/UX Design", icon: <FaPaintBrush className="w-5 h-5" />, color: "from-purple-500 to-purple-600" }
  ]

  const softSkills = [
    { name: "Leadership", icon: <Briefcase className="w-5 h-5" />, color: "from-red-500 to-red-600" },
    { name: "Teamwork & Collaboration", icon: <Users className="w-5 h-5" />, color: "from-green-500 to-green-600" },
    { name: "Time Management", icon: <Clock className="w-5 h-5" />, color: "from-amber-500 to-amber-600" },
    { name: "Problem-Solving", icon: <Lightbulb className="w-5 h-5" />, color: "from-yellow-500 to-yellow-600" },
    { name: "UI/UX Innovation", icon: <FaPaintBrush className="w-5 h-5" />, color: "from-pink-500 to-pink-600" },
    { name: "Adaptability", icon: <Lightbulb className="w-5 h-5" />, color: "from-indigo-500 to-indigo-600" }
  ]

  const roles = [
    { name: "IT Support", icon: <FaTools className="w-5 h-5" />, color: "from-blue-500 to-blue-600" },
    { name: "Web Developer", icon: <FaCode className="w-5 h-5" />, color: "from-green-500 to-green-600" },
    { name: "UI/UX Designer", icon: <FaPaintBrush className="w-5 h-5" />, color: "from-purple-500 to-purple-600" }
  ]

  const tools = [
    { name: "GitHub", icon: <FaGithub className="w-5 h-5" />, color: "from-gray-700 to-gray-800" },
    { name: "VS Code", icon: <VscVscode className="w-5 h-5" />, color: "from-blue-600 to-blue-700" },
    { name: "Figma", icon: <FaFigma className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { name: "Canva", icon: <SiCanva className="w-5 h-5" />, color: "from-blue-500 to-teal-500" },
    { name: "Browser DevTools", icon: <Monitor className="w-5 h-5" />, color: "from-orange-500 to-orange-600" },
    { name: "Postman", icon: <SiPostman className="w-5 h-5" />, color: "from-orange-600 to-orange-700" },
    { name: "MongoDB Atlas", icon: <SiMongodb className="w-5 h-5" />, color: "from-green-500 to-green-600" },
    { name: "AI Tools", icon: <FaRobot className="w-5 h-5" />, color: "from-yellow-500 to-yellow-600" }
  ]

  const SkillCard = ({ skill, index }: { skill: typeof hardSkills[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className="relative bg-[#1a1a1a] rounded-lg p-3 border border-gray-700/50 group-hover:border-gray-500/50 transition-colors">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
            {skill.icon}
          </div>
          <span className="text-gray-100 font-medium text-xs group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="py-16 px-4 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/subtle-grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }}
            className="bg-blue-500/10 p-4 rounded-2xl mb-4 ring-2 ring-blue-500/20 relative group"
          >
            <FaCode className="w-10 h-10 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-3xl text-sm leading-relaxed">
            A comprehensive overview of my technical expertise and technological proficiencies
          </p>
        </div>

        {/* Skills Container - Grid with Separate Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Box 1: Hard Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="h-[450px]"
          >
            <ElectricBorder
              color="#9f5b2d"
              speed={1}
              chaos={0.12}
              borderRadius={16}
            >
              <div className="bg-[#0f0f0f] p-5 flex flex-col h-[450px]">
                <h3 className="text-sm font-bold text-white pb-3 mb-4 flex items-center gap-2 border-b border-gray-700/50 flex-shrink-0">
                  <FaCode className="w-4 h-4 text-blue-400" />
                  Hard Skills
                </h3>
                <div className="space-y-2 overflow-y-auto flex-1 scrollbar-hide pr-1">
                  {hardSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </ElectricBorder>
          </motion.div>

          {/* Box 2: Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-[450px]"
          >
            <ElectricBorder
              color="#9f5b2d"
              speed={1}
              chaos={0.12}
              borderRadius={16}
            >
              <div className="bg-[#0f0f0f] p-5 flex flex-col h-[450px]">
                <h3 className="text-sm font-bold text-white pb-3 mb-4 flex items-center gap-2 border-b border-gray-700/50 flex-shrink-0">
                  <Users className="w-4 h-4 text-green-400" />
                  Soft Skills
                </h3>
                <div className="space-y-2 overflow-y-auto flex-1 scrollbar-hide pr-1">
                  {softSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </ElectricBorder>
          </motion.div>

          {/* Box 3: Preferred Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[450px]"
          >
            <ElectricBorder
              color="#9f5b2d"
              speed={1}
              chaos={0.12}
              borderRadius={16}
            >
              <div className="bg-[#0f0f0f] p-5 flex flex-col h-[450px]">
                <h3 className="text-sm font-bold text-white pb-3 mb-4 flex items-center gap-2 border-b border-gray-700/50 flex-shrink-0">
                  <Briefcase className="w-4 h-4 text-orange-400" />
                  Preferred Roles
                </h3>
                <div className="space-y-2 overflow-y-auto flex-1 scrollbar-hide pr-1">
                  {roles.map((role, index) => (
                    <SkillCard key={role.name} skill={role} index={index} />
                  ))}
                </div>
              </div>
            </ElectricBorder>
          </motion.div>

          {/* Box 4: Tools & Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[450px]"
          >
            <ElectricBorder
              color="#9f5b2d"
              speed={1}
              chaos={0.12}
              borderRadius={16}
            >
              <div className="bg-[#0f0f0f] p-5 flex flex-col h-[450px]">
                <h3 className="text-sm font-bold text-white pb-3 mb-4 flex items-center gap-2 border-b border-gray-700/50 flex-shrink-0">
                  <FaTools className="w-4 h-4 text-purple-400" />
                  Tools & Tech
                </h3>
                <div className="space-y-2 overflow-y-auto flex-1 scrollbar-hide pr-1">
                  {tools.map((tool, index) => (
                    <SkillCard key={tool.name} skill={tool} index={index} />
                  ))}
                </div>
              </div>
            </ElectricBorder>
          </motion.div>
        </div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Continuously expanding my skills and exploring new technologies
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] -z-10 animate-pulse"></div>
    </section>
  )
}