'use client'

import { useEffect, useState } from 'react'

export default function ScrollPrompt() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Hide the prompt when user scrolls down more than 100px
      setIsVisible(scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    // Scroll down to just past the hero section (viewport height + some buffer)
    const heroHeight = window.innerHeight
    const scrollTarget = heroHeight + 50 // Add 50px buffer
    
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button 
      onClick={handleClick}
      className="absolute left-1/2 bottom-4 transform -translate-x-1/2 z-10 cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
      aria-label="Scroll down to continue"
    >
      <div className="animate-bounce">
        {/* Scroll Down Text */}
        <div className="text-white/60 text-[10px] font-medium tracking-wider uppercase hover:text-white/80 transition-colors duration-200">
          Scroll Down
        </div>
      </div>
    </button>
  )
}
