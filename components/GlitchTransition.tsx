'use client'

import { useState, useEffect } from 'react'

const GlitchTransition = () => {
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
    triggerGlitch('DARIUS CHEN')
  }
  
  const handleMouseLeave = () => {
    triggerGlitch('DARCHE')
  }
  
  // Initial glitch effect for DARCHE
  useEffect(() => {
    const initialGlitch = setTimeout(() => {
      triggerGlitch('DARCHE')
    }, 1000) // Start glitching after 1 second
    
    return () => clearTimeout(initialGlitch)
  }, [])
  
  return (
    <span 
      className="cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {currentText}
    </span>
  )
}

export default GlitchTransition
