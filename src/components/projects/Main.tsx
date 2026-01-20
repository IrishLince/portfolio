'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../navbar'
import { Footer } from '../footer'
import { TechnicalSkills } from './TechnicalSkills'
import { Aboutme } from './Aboutme'
import { EducationGoals } from './Education'
import Plasma from '../plasma';



import { 
  Briefcase, ArrowDown, 
  InstagramIcon, GithubIcon, TwitterIcon, 
  Mail, Phone, MapPin
} from 'lucide-react'
import myImage from '../Pictures/Avatar.png'

export default function AboutPage(): React.ReactElement {
  const socialLinks = [
    { 
      icon: InstagramIcon, 
      href: "https://www.instagram.com/cartiii_dior/",
      color: "text-blue-500 hover:text-blue-600"
    },
    { 
      icon: GithubIcon, 
      href: "https://github.com/IrishLince",
      color: "text-gray-500 hover:text-gray-700"
    },
    { 
      icon: TwitterIcon, 
      href: "https://x.com/iriiiissshh?s=21",
      color: "text-cyan-500 hover:text-cyan-600"
    }
  ]

  const contactInfo = [
    { 
      icon: Mail, 
      text: "irishlince03@gmail.com",
      href: "mailto:irishlince03@gmail.com"
    },
    { 
      icon: Phone, 
      text: "+63 939 412 3330",
      href: "tel:+639394123330"
    },
    { 
      icon: MapPin, 
      text: "Pasay City, Metro Manila, Philippines",
      href: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden" suppressHydrationWarning>


 



      <Navbar />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Plasma Background */}
          <div className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <Plasma 
              color="#ff6b35"
              speed={0.6}
              direction="forward"
              scale={1.1}
              opacity={0.8}
              mouseInteractive={true}
            />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20 
              }}
              className="mx-auto w-48 h-48 mb-8 relative"
            >
              <Image 
                src={myImage}
                alt="Irish Lince"
                fill
                className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
                priority
              />
            </motion.div>


            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Irish Lince
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              BSIT Student | Web Developer | Design Enthusiast
            </motion.p>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {contactInfo.map((contact, index) => (
                <Link 
                  key={index} 
                  href={contact.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <contact.icon className="w-5 h-5" />
                  <span className="text-sm">{contact.text}</span>
                </Link>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex justify-center space-x-6 mb-12"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${social.color} transition-all duration-300`}
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </motion.div>

            {/* Download Resume Button */}
          </div>
        </section>

        

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Aboutme />
        </motion.div>

        {/* Skills Sections */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TechnicalSkills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <EducationGoals />
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  )
}