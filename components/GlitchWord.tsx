'use client'

import { useState } from 'react'

interface GlitchWordProps {
  children: string
  glitchText?: string
  className?: string
}

const GlitchWord = ({ children, glitchText, className = '' }: GlitchWordProps) => {
  const [currentText, setCurrentText] = useState(children)
  
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
    if (glitchText) {
      triggerGlitch(glitchText)
    }
  }
  
  const handleMouseLeave = () => {
    triggerGlitch(children)
  }
  
  return (
    <span 
      className={`inline-block transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {currentText}
    </span>
  )
}

export default GlitchWord
