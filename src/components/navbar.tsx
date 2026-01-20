'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Home, Briefcase, Target } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Navigation items with icons
  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'My Projects', path: '/myproject', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Mission', path: '/mission', icon: <Target className="w-4 h-4" /> }
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg' 
            : 'bg-[#1a1a1a]/80 backdrop-blur-sm'
        }`}
      >
        <nav className="flex items-center justify-between h-16 md:h-20 px-4 lg:px-12 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#ff4d00] to-[#ff6b33] bg-clip-text text-transparent hover:from-[#ff6b33] hover:to-[#ff4d00] transition-all duration-300 relative group"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff4d00] to-[#ff6b33] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group
                    ${pathname === item.path 
                      ? 'text-[#ff4d00] bg-[#ff4d00]/10' 
                      : 'text-white hover:text-[#ff4d00] hover:bg-[#ff4d00]/10'
                    }`}
                >
                  <motion.span
                    animate={{ rotate: pathname === item.path ? 360 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="font-medium relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4d00] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden p-2 text-white hover:text-[#ff4d00] bg-white/10 rounded-lg backdrop-blur-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-md border-t border-gray-800/50 overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group
                        ${pathname === item.path 
                          ? 'text-[#ff4d00] bg-[#ff4d00]/10' 
                          : 'text-white hover:text-[#ff4d00] hover:bg-[#ff4d00]/10'
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span
                        animate={{ rotate: pathname === item.path ? 360 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="font-medium">{item.name}</span>
                      {pathname === item.path && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute right-4 w-2 h-2 rounded-full bg-[#ff4d00]"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer to prevent content overlap */}
      <div className="h-15 md:h-10" />
    </>
  )
}