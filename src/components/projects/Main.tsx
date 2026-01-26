'use client'
import React, { memo, Suspense, lazy, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { StaggeredMenu } from '../StaggeredMenu'

import { 
  InstagramIcon, GithubIcon, TwitterIcon, 
  Mail, Phone, MapPin
} from 'lucide-react'
import myImage from '../Pictures/IrishFormal.png'

// Type definitions
interface MenuItem {
  label: string
  ariaLabel?: string
  link: string
}

interface SocialMenuItem {
  label: string
  link: string
}

// Lazy load all major section components
const Plasma = lazy(() => import('../plasma'))
const Aboutme = lazy(() => import('./Aboutme').then(mod => ({ default: mod.Aboutme })))
const TechnicalSkills = lazy(() => import('./TechnicalSkills').then(mod => ({ default: mod.TechnicalSkills })))
const MyProjects = lazy(() => import('./MyProjects').then(mod => ({ default: mod.MyProjects })))
const EducationGoals = lazy(() => import('./Education').then(mod => ({ default: mod.EducationGoals })))
const Footer_Component = lazy(() => import('../footer').then(mod => ({ default: mod.Footer })))

// Memoized static data - moved outside component to prevent recreation
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

const menuItems: MenuItem[] = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
  { label: 'About Me', ariaLabel: 'Learn about me', link: '#aboutme' },
  { label: 'Technical Skills', ariaLabel: 'View my technical skills', link: '#technicalskills' },
  { label: 'My Projects', ariaLabel: 'View my projects', link: '#myprojects' },
  { label: 'Education', ariaLabel: 'View my education', link: '#education' }
]

const socialMenuItems: SocialMenuItem[] = [
  { label: 'Instagram', link: 'https://www.instagram.com/cartiii_dior/' },
  { label: 'GitHub', link: 'https://github.com/IrishLince' },
  { label: 'Twitter', link: 'https://x.com/iriiiissshh?s=21' }
]

// Loading placeholder for Plasma
const PlasmaLoading = memo(() => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#ff6b35]/10 to-transparent" />
))
PlasmaLoading.displayName = 'PlasmaLoading'

// Loading placeholders for sections
const SectionLoading = memo(() => (
  <div className="min-h-screen animate-pulse bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]" />
))
SectionLoading.displayName = 'SectionLoading'

function AboutPageContent(): React.ReactElement {
  const handleMenuOpen = useCallback(() => console.log('Menu opened'), [])
  const handleMenuClose = useCallback(() => console.log('Menu closed'), [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden" suppressHydrationWarning>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialMenuItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#ff6b35', '#ff4d00']}
        accentColor="#ff4d00"
        isFixed={true}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
      />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-20"
        style={{ willChange: 'opacity' }}
      >
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Plasma Background - Lazy Loaded */}
          <div className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <Suspense fallback={<PlasmaLoading />}>
              <Plasma 
                color="#ff6b35"
                speed={0.6}
                direction="forward"
                scale={1.1}
                opacity={0.8}
                mouseInteractive={true}
              />
            </Suspense>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 180, 
                damping: 25,
                duration: 0.6
              }}
              className="mx-auto w-48 h-48 mb-8 relative"
              style={{ willChange: 'transform' }}
            >
              <Image 
                src={myImage}
                alt="Irish Lince"
                fill
                className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
                priority
                sizes="(max-width: 768px) 192px, 192px"
              />
            </motion.div>

            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
              style={{ willChange: 'transform' }}
            >
              Irish Lince
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              IT Support | Web Developer | Design Enthusiast
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
          </div>
        </section>

        <motion.div
          id="aboutme"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          style={{ willChange: 'transform' }}
        >
          <Suspense fallback={<SectionLoading />}>
            <Aboutme />
          </Suspense>
        </motion.div>

        {/* Skills Sections */}
        <motion.div
          id="technicalskills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Suspense fallback={<SectionLoading />}>
            <TechnicalSkills />
          </Suspense>
        </motion.div>

        <motion.div
          id="myprojects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Suspense fallback={<SectionLoading />}>
            <MyProjects />
          </Suspense>
        </motion.div>
      </motion.main>

        <motion.div
          id="education"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Suspense fallback={<SectionLoading />}>
            <EducationGoals />
          </Suspense>
        </motion.div>

      <Suspense fallback={null}>
        <Footer_Component />
      </Suspense>
    </div>
  )
}

const AboutPage = memo(AboutPageContent)
AboutPageContent.displayName = 'AboutPageContent'

export default AboutPage