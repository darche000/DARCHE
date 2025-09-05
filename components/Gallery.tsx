"use client"

import Shuffle from 'shufflejs'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Post } from '@/lib/posts'
import Link from 'next/link'

interface GalleryProps {
  posts: Post[]
}

export default function Gallery({ posts }: GalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState('all')
  const [data, setData] = useState<Post[]>(posts)
  const [shuffleInstance, setShuffleInstance] = useState<Shuffle | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Fisher–Yates shuffle once on mount
  useEffect(() => {
    const shuffled = [...posts]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setData(shuffled)
  }, [posts])

  // Initialize Shuffle.js
  useEffect(() => {
    if (!containerRef.current) return

          const shuffle = new Shuffle(containerRef.current, {
        itemSelector: '.card',
        gutterWidth: 0, // Remove engine-level gutters
        columnWidth: 240,
        sizer: '.sizer' // Use dedicated sizer element
      })

    setShuffleInstance(shuffle)
    setIsLoading(false)

    // Handle resize events
    const onResize = () => {
      shuffle.update()
    }

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(onResize, 250)
    }

    window.addEventListener('resize', debouncedResize)

    // Update after each image loads
    const images = containerRef.current.querySelectorAll('img')
    images.forEach((img) => {
      img.addEventListener('load', () => {
        shuffle.update()
      })
    })

    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(resizeTimeout)
      shuffle.destroy()
    }
  }, [data])

  const onFilter = (tag: string) => {
    setActive(tag)
    if (!shuffleInstance) return

    if (tag === 'all') {
      shuffleInstance.filter(Shuffle.ALL_ITEMS)
    } else {
      shuffleInstance.filter(tag)
    }
  }

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tags = posts.flatMap(post => post.tags)
    return ['all', ...Array.from(new Set(tags))]
  }, [posts])

  return (
    <div className="space-y-8">
      {/* Tag Filter Bar */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 py-2 whitespace-nowrap snap-x snap-mandatory scrollbar-hide">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onFilter(tag)}
              className={`px-4 py-1 rounded-2xl transition-all duration-200 font-medium text-sm shrink-0 snap-start ${
                active === tag
                  ? 'bg-gray-800 text-white border-black shadow-lg scale-105'
                  : 'bg-[#860123] text-gray-50 hover:bg-[#980025] hover:border-gray-400 hover:scale-105'
              }`}
            >
              {tag === 'all' ? 'All Work' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      )}
      <div 
        ref={containerRef} 
        className={`flex flex-wrap gap-y-4 justify-center transition-opacity duration-500 mx-auto ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Dedicated sizer element for consistent column width */}
        <div className="sizer w-[240px] h-[240px] opacity-0 ml-4" aria-hidden="true"></div>        
        {data.map((post, index) => (
          <Link
            key={post.id}
            href={`/project/${post.projectId}`}
            className="card w-[240px] m-2 overflow-hidden rounded-lg bg-[#78172b] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer animate-fade-in block"
            data-groups={JSON.stringify(post.tags)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={post.src} 
                alt={post.title} 
                loading="lazy" 
                className="w-full h-auto block object-cover"
                style={{ aspectRatio: `${post.width}/${post.height}` }}
              />
              <div className="absolute inset-0 bg-red bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-white mb-1 text-sm">{post.title}</h3>
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-50 text-xs mt-1">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Floating Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#860123] hover:bg-[#980025] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Open menu"
      >
        <svg 
          className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Expandable Menu */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 transition-transform duration-300 ease-in-out z-40 ${
        isMenuOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="container mx-auto max-w-[1400px] px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Menu Items */}
            <Link 
              href="/about" 
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-[#860123]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#860123] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">About</h3>
              <p className="text-gray-600 text-xs mt-1">Learn about me</p>
            </Link>

            <Link 
              href="/contact" 
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-[#860123]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#860123] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Contact</h3>
              <p className="text-gray-600 text-xs mt-1">Get in touch</p>
            </Link>

            <Link 
              href="/services" 
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-[#860123]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#860123] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Services</h3>
              <p className="text-gray-600 text-xs mt-1">What I offer</p>
            </Link>

            <Link 
              href="/blog" 
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-[#860123]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#860123] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Blog</h3>
              <p className="text-gray-600 text-xs mt-1">Latest posts</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
