'use client'
import { 
  Book, GraduationCap, Award, Brain, 
  Target, Rocket, Zap, Code, Star, 
  Lightbulb, CheckCircle
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

export function EducationGoals(): React.ReactElement {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [selectedView, setSelectedView] = useState('timeline')

  const educationData = [
    {
      title: "Current Education",
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      details: {
        school: "Centro Escolar University Makati",
        degree: "BSIT - Information Technology",
        duration: "2021 - Present",
        highlights: [
          "Pursuing Bachelor's degree in Information Technology",
          "Focusing on web development and Cybersecurity",
          "Active participation in tech-related university activities"
        ]
      }
    },
    {
      title: "Acedemic Achievements",
      icon: <Award className="w-8 h-8 text-purple-400" />,
      details: {
        focus: "Web Development, Programming, Hardware",
        goals: [
          "Dean's Lister 1st SEM (S.Y 2022-2023)",
          "Dean's Lister 1st SEM (S.Y 2023-2024)",
          "Dean's Lister 1st SEM (S.Y 2024-2025)",
          "JPCS-CSIT DAYS PC Assembly, Champion (S.Y 2022-2023)",
          "JPCS-CSIT DAYS PC Assembly, 1st Place (S.Y 2023-2024)",
          "Tesda Computer Servicing National Certification II",
          "PEAC Scholar Senior high School (S.Y 2020-2022)"

        ]
      }
    },
    {
      title: "Skills Development",
      icon: <Target className="w-8 h-8 text-green-400" />,
      details: {
        focus: "Continuous Learning",
        areas: [
          "Frontend",
          "Backend",
          "UI/UX Design Principles",
          "Pc Assembly And Disassembly"
        ]
      }
    }
  ]

  return (
   <section className="py-16 px-6 lg:px-12 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-6 rounded-3xl bg-blue-500/10 mb-8"
          >
            <Book className="w-14 h-14 text-blue-400" />
          </motion.div>
          
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  Learning and Growth
</h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-xl">
          Dedicated to excelling in IT through web development, cybersecurity, academic achievements, and technical skill-building.
          </p>

          {/* View Toggle */}
          <div className="flex justify-center gap-4 mt-12">
            {['timeline', 'grid'].map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedView === view 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-[#2a2a2a] text-gray-400 hover:bg-[#333333]'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)} View
              </button>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`${
              selectedView === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'flex flex-col space-y-8'
            }`}
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-2xl bg-[#2a2a2a] p-8 hover:bg-[#333333] 
                  transition-all duration-300 cursor-pointer ${
                    selectedView === 'timeline' 
                      ? 'max-w-3xl mx-auto w-full relative before:absolute before:left-[-30px] before:top-0 before:w-[2px] before:h-full before:bg-blue-500/20' 
                      : ''
                  }`}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
              >
                {/* Timeline Dot */}
                {selectedView === 'timeline' && (
                  <div className="absolute left-[-39px] top-8 w-[20px] h-[20px] rounded-full bg-blue-500 z-10" />
                )}

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs
                  ${item.bgColor} ${item.textColor}`}>
                  {item.status}
                </div>

                {/* Card Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${item.bgColor}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    {item.details.school && (
                      <p className="text-gray-400">
                        {item.details.school}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  {item.details.degree && (
                    <div className="flex items-center gap-2 text-blue-400">
                      <GraduationCap className="w-5 h-5" />
                      <span>{item.details.degree}</span>
                    </div>
                  )}

                  {/* Highlights/Goals/Areas */}
                  <div className="space-y-3">
                    {(item.details.highlights || item.details.goals || item.details.areas)?.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 group-hover/item:text-blue-400" />
                        <span className="text-gray-400 group-hover/item:text-gray-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Quote Section */}
        <div className="mt-24 text-center">
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <Lightbulb className="w-12 h-12 text-yellow-500 opacity-50" />
            </motion.div>
            <p className="text-2xl text-gray-400 italic mb-4">
              "Education is not the learning of facts, but the training of the mind to think"
            </p>
            <p className="text-gray-500">- Albert Einstein</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  )
}