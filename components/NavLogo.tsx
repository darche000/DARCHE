'use client'

import { useState } from 'react'
import Link from 'next/link'

const NavLogo = () => {
  const [currentText, setCurrentText] = useState('DARCHE')
  
  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
  
  const triggerGlitch = (targetText: string) => {
    const glitchInterval = setInterval(() => {
      // Create glitch effect by randomly replacing characters
      const glitchedText = targetText.split('').map((char) => {
        if (char === ' ') return ' ' // Keep spaces
        const shouldGlitch = Math.random() < 0.4 // 40% chance to glitch each character
        if (shouldGlitch) {
          return matrixChars[Math.floor(Math.random() * matrixChars.length)]
        }
        return char
      }).join('')
      
      setCurrentText(glitchedText)
    }, 80) // Glitch speed
    
    // Stop glitching and set final text
    setTimeout(() => {
      clearInterval(glitchInterval)
      setCurrentText(targetText)
    }, 600)
  }
  
  const handleMouseEnter = () => {
    triggerGlitch('HOME')
  }
  
  const handleMouseLeave = () => {
    triggerGlitch('DARCHE')
  }
  
  return (
    <Link 
      href="/"
      className="fixed top-6 left-6 z-50 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 hover:border-white/40 transition-colors duration-300">
        <span className="text-white font-mono font-bold text-lg">
          {currentText}
        </span>
      </div>
    </Link>
  )
}

export default NavLogo

