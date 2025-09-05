'use client'

import { useEffect, useState } from 'react'

// TypeScript declaration for model-viewer web component
// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

interface ModelViewerProps {
  src: string
  alt?: string
  className?: string
  style?: React.CSSProperties
}

export default function ModelViewer({ src, alt = "3D Model", className = "", style = {} }: ModelViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Dynamically import model-viewer to avoid SSR issues
    const loadModelViewer = async () => {
      if (typeof window !== 'undefined') {
        await import('@google/model-viewer')
      }
    }
    
    loadModelViewer()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-white/60 text-sm"> </div>
        </div>
      )}
      
              {/* @ts-expect-error - model-viewer is a custom web component */}
        <model-viewer
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        style={style}
        auto-rotate
        camera-controls
        touch-action="pan-y"
        shadow-intensity="1"
        environment-image="neutral"
        exposure="1"
        tone-mapping="neutral"
        skybox-image=""
        poster=""
        loading="eager"
        reveal="auto"
        ar
        ar-modes="webxr scene-viewer"
        ar-scale="auto"
        ar-placement="floor"
        ios-src=""
        seamless-poster
        background-color="transparent"
        onLoad={handleLoad}
        interaction-prompt="none"
      />
    </div>
  )
}
