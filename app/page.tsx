import Gallery from '../components/Gallery'
import { getAllPosts } from '../lib/posts'
import ScrollPrompt from '../components/ScrollPrompt'
import ModelViewer from '../components/ModelViewer'
import GlitchTransition from '../components/GlitchTransition'
import GlitchWord from '../components/GlitchWord'
import MusicPlayer from '../components/MusicPlayer'

export default function Home() {
  const posts = getAllPosts()
  const modelSrc = "/models/cow/source/cow.glb" // Change this to switch models

  return (
    <main className="min-h-screen bg-[#860123]">
      {/* Music Player */}
      <MusicPlayer />
      
      {/* Scrolling Banner */}
      <div className="relative w-full bg-[#860123] border-b border-black/20 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <div className="text-black text-sm py-1 px-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
            TRACK THE PROGRESS OF MY RESEARCH AND DESIGN WORK FOR MY MASTERS PROGRAM IN THE BLOG SECTION. FOLLOW MY JOURNEY THROUGH PARAMETRIC ARCHITECTURE, URBAN DESIGN COMPETITIONS, AND SPECULATIVE DESIGN METHODOLOGIES. DISCOVER INSIGHTS INTO COMPUTATIONAL DESIGN PROCESSES, RESEARCH METHODOLOGIES, AND INNOVATIVE APPROACHES TO ARCHITECTURAL VISUALIZATION AND SPATIAL ANALYSIS.
          </div>
        </div>
      </div>
      
      {/* Hero Section - Full Bleed Image with 3D Model Overlay */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/2.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#860123]/40 via-[#860123]/20 to-transparent"></div>
        </div>

        {/* 3D Model Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <ModelViewer
            src={modelSrc}
            alt="Interactive 3D Model"
            className="w-full h-full opacity-100 hover:opacity-90 transition-opacity duration-300"
            style={{
              pointerEvents: 'auto',
              background: 'transparent'
            }}
          />
        </div>

        {/* Scroll Bypass Area - Invisible area for page scrolling */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-auto z-20">
          <div className="w-full h-full bg-transparent"></div>
        </div>
        
        {/* Hero Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#860123] via-[#860123]/80 to-transparent p-8">
          <div className="container mx-auto max-w-[1400px] px-4">
                          <div className="text-center">
                <div className="mb-4">
                  <h1 className="text-5xl md:text-6xl font-bold text-white font-mono">
                    <GlitchTransition />
                  </h1>
                </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed group cursor-pointer transition-all duration-500 hover:text-black hover:scale-105 hover:drop-shadow-2xl animate-fade-in-up">
                <GlitchWord glitchText="DISCOVER">Explore</GlitchWord> my creative work across <GlitchWord glitchText="BUILDINGS">architecture</GlitchWord>, <GlitchWord glitchText="STUDY">research</GlitchWord>, <GlitchWord glitchText="IDENTITY">branding</GlitchWord>, and more. 
                <br />
                <GlitchWord glitchText="NAVIGATE" className="hover:text-[#ff6b6b]">Scroll down</GlitchWord> to browse by category.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Prompt Animation */}
        <ScrollPrompt />
      </div>

      {/* Portfolio Section */}
      <div className="container mx-auto max-w-[1400px] px-4 py-12">
        <Gallery posts={posts} />
      </div>
    </main>
  )
}
