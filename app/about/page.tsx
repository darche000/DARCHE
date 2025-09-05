import MusicPlayer from '../../components/MusicPlayer'
import NavLogo from '../../components/NavLogo'

export default function About() {
  return (
    <main className="min-h-screen bg-[#860123]">
      {/* Navigation Logo */}
      <NavLogo />
      {/* Music Player */}
      <MusicPlayer />
      
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/2.png" 
            alt="About Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#860123]/60 via-[#860123]/30 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold font-mono mb-6">
              ABOUT
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Creative architect, researcher, and designer pushing the boundaries of digital innovation
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto max-w-[1400px] px-4 py-16">
        {/* Introduction */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-mono">WHO I AM</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I&apos;m Darius Chen, a multidisciplinary creative professional specializing in architecture, 
                research, and digital design. With a passion for innovation and a keen eye for detail, 
                I bridge the gap between traditional design principles and cutting-edge technology.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                My work spans across multiple disciplines, from architectural visualization to 
                interactive web experiences, always with a focus on creating meaningful connections 
                between people and the spaces they inhabit.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#860123]/20 to-black/40 rounded-lg overflow-hidden">
                <img 
                  src="/images/brand-identity-1.jpg" 
                  alt="Darius Chen" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-mono">EXPERTISE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">ARCHITECTURE</h3>
              <ul className="text-white/80 space-y-2">
                <li>• 3D Modeling & Visualization</li>
                <li>• Space Planning & Design</li>
                <li>• Sustainable Architecture</li>
                <li>• Building Information Modeling</li>
              </ul>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">RESEARCH</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Design Methodology</li>
                <li>• User Experience Research</li>
                <li>• Spatial Analysis</li>
                <li>• Innovation Studies</li>
              </ul>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">DIGITAL DESIGN</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Web Development</li>
                <li>• Interactive Design</li>
                <li>• Brand Identity</li>
                <li>• UI/UX Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 font-mono">PHILOSOPHY</h2>
            <blockquote className="text-2xl text-white/90 leading-relaxed italic">
              &ldquo;Design is not just about creating beautiful spaces or interfaces&mdash;it&apos;s about 
              understanding human behavior, solving complex problems, and creating experiences 
              that resonate on a deeper level.&rdquo;
            </blockquote>
            <p className="text-lg text-white/70 mt-6">
              — Darius Chen
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#860123]/20 to-black/40 backdrop-blur-sm rounded-lg p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">LET&apos;S WORK TOGETHER</h2>
            <p className="text-lg text-white/80 mb-8">
              Interested in collaborating or learning more about my work?
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#860123] hover:bg-[#980025] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
