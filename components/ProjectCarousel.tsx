'use client'

import { useState } from 'react'
import { Post } from '@/lib/posts'

interface ProjectCarouselProps {
  projectPosts: Post[]
  mainProject: Post
  relatedProjects: Post[]
}

export default function ProjectCarousel({ projectPosts, mainProject, relatedProjects }: ProjectCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectPosts.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectPosts.length) % projectPosts.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <main className="min-h-screen bg-[#860123]">
      <div className="container mx-auto max-w-[1200px] px-4 py-12">
        {/* Back Button */}
        <a 
          href="/"
          className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </a>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">{mainProject.title}</h1>
          <div className="flex justify-center gap-2 mb-4">
            {mainProject.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-white text-[#860123] text-sm rounded-full font-medium"
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </span>
            ))}
          </div>
          <p className="text-gray-200 text-lg">Completed on {new Date(mainProject.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>

        {/* Project Images Carousel */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl flex items-center justify-center" style={{ height: '80vh', minHeight: '600px' }}>
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={projectPosts[currentImageIndex].src} 
                  alt={projectPosts[currentImageIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Image Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">{projectPosts[currentImageIndex].title}</h3>
              </div>

              {/* Navigation Arrows */}
              {projectPosts.length > 1 && (
                <>
                  {/* Left Arrow - Only show if not on first image */}
                  {currentImageIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#860123]/80 hover:bg-[#860123] text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Right Arrow - Only show if not on last image */}
                  {currentImageIndex < projectPosts.length - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#860123]/80 hover:bg-[#860123] text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </>
              )}

              {/* Dots Navigation - Overlay on image */}
              {projectPosts.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {projectPosts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-110' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-gray-200 leading-relaxed">
              This is a comprehensive project that showcases modern design principles and innovative solutions. 
              The work demonstrates attention to detail, user-centered design, and cutting-edge technology implementation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Responsive design implementation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Modern UI/UX principles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Performance optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Accessibility compliance
              </li>
            </ul>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Related Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProjects.map((relatedProject) => (
                <a 
                  key={relatedProject.id}
                  href={`/project/${relatedProject.projectId}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg bg-[#78172b] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src={relatedProject.src} 
                      alt={relatedProject.title}
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: `${relatedProject.width}/${relatedProject.height}` }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="p-3">
                      <h3 className="font-semibold text-white text-sm">{relatedProject.title}</h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
