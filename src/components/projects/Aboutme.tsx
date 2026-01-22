// @ts-nocheck
'use client'
import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import TiltedCard from '../TiltedCard'

// Use static import for IrishFormal
import IrishFormal from '../Pictures/IrishFormal.png'
import LogoLoop from '../LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import Aurora from '../Aurora'
import ScrambledText from '../ScrambledText'
import Shuffle from '../Shuffle'

// Memoize tech logos to prevent recreation on every render
const techLogos = [
  { node: <SiReact size={40} color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs size={40} color="#ffffff" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript size={40} color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss size={40} color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
]

function AboutmeContent(): React.ReactElement {
  // Memoize aurora props
  const auroraProps = useMemo(() => ({
    colorStops: ["#ff9466", "#ca4e4e", "#842a5a"],
    speed: 0.6,
    blend: 0.07
  }), [])

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-12 relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10" style={{ willChange: 'contents' }}>
        <Aurora
          colorStops={auroraProps.colorStops}
          speed={auroraProps.speed}
          blend={auroraProps.blend}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          
          {/* About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="mb-6 md:mb-8">
              <Shuffle
                text="About Me"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white"
                style={{ fontFamily: "var(--font-pixel), 'Press Start 2P', cursive" }}
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
              />
            </div>
            <ScrambledText
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0">
                Hello, I&apos;m Irish Lince, a 21-year-old BSIT student at Centro Escolar University Makati from Pasay City. I have experience in web development, technical support, and UI/UX design, with skills in building responsive interfaces and troubleshooting systems. Eager to learn, adaptable, and motivated to grow in a professional IT environment.
              </p>
            </ScrambledText>
          </motion.div>

          {/* TiltedCard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center mt-8 lg:mt-0"
          >
            <div className="w-[260px] h-[340px] sm:w-[280px] sm:h-[360px] md:w-[320px] md:h-[400px]">
              <TiltedCard
                imageSrc={IrishFormal?.src}
                altText="Irish Lince"
                scaleOnHover={1.2}
                showTooltip={false}
                displayOverlayContent={false}
                imageHeight="100%"
                imageWidth="100%"
                containerHeight="100%"
              />
            </div>
          </motion.div>

        </div>

        {/* Logo Loop Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }} className="sm:h-[100px]">
            <LogoLoop
              logos={techLogos}
              speed={160}
              logoHeight={100}
              gap={35}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export const Aboutme = memo(AboutmeContent)
AboutmeContent.displayName = 'AboutmeContent'
