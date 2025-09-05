import MusicPlayer from '../../components/MusicPlayer'
import NavLogo from '../../components/NavLogo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Services - DARCHE",
  description: "Architectural design, visualization, and research services by Darius Chen",
};

export default function Services() {
  const services = [
    {
      title: "Architectural Design",
      description: "Complete architectural solutions from concept to construction documentation",
      features: [
        "3D Modeling & Visualization",
        "Space Planning & Design",
        "Sustainable Architecture",
        "Building Information Modeling",
        "Construction Documentation"
      ],
      icon: "🏗️"
    },
    {
      title: "Digital Design",
      description: "Modern web experiences and interactive design solutions",
      features: [
        "Web Development",
        "UI/UX Design",
        "Interactive Prototypes",
        "Responsive Design",
        "Performance Optimization"
      ],
      icon: "💻"
    },
    {
      title: "Research & Analysis",
      description: "Data-driven insights and user experience research",
      features: [
        "User Experience Research",
        "Design Methodology",
        "Spatial Analysis",
        "Innovation Studies",
        "Market Research"
      ],
      icon: "🔬"
    },
    {
      title: "Brand Identity",
      description: "Comprehensive branding and visual identity systems",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity Systems",
        "Marketing Materials",
        "Brand Strategy"
      ],
      icon: "🎨"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your needs, goals, and vision through detailed consultation and research."
    },
    {
      step: "02", 
      title: "Strategy",
      description: "Developing a comprehensive strategy and roadmap tailored to your specific requirements."
    },
    {
      step: "03",
      title: "Design",
      description: "Creating innovative solutions through iterative design and collaborative feedback."
    },
    {
      step: "04",
      title: "Development",
      description: "Bringing designs to life with meticulous attention to detail and quality execution."
    },
    {
      step: "05",
      title: "Launch",
      description: "Deploying solutions and providing ongoing support to ensure long-term success."
    }
  ]

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
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#860123]/60 via-[#860123]/30 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold font-mono mb-6">
              SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive design solutions across architecture, research, and digital innovation
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto max-w-[1400px] px-4 py-16">
        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-mono">WHAT I OFFER</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-2xl font-bold text-white font-mono">{service.title}</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-white/70 flex items-center">
                      <span className="w-2 h-2 bg-[#860123] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-mono">MY PROCESS</h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#860123] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-mono">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 font-mono">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-mono">PRICING</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">STARTER</h3>
              <div className="text-4xl font-bold text-white mb-6">$2,500</div>
              <ul className="space-y-3 mb-8">
                <li className="text-white/80">• Initial consultation</li>
                <li className="text-white/80">• Concept development</li>
                <li className="text-white/80">• Basic deliverables</li>
                <li className="text-white/80">• 2 rounds of revisions</li>
              </ul>
              <a 
                href="/contact" 
                className="block w-full bg-[#860123] hover:bg-[#980025] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Started
              </a>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-[#860123] text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#860123] text-white px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">PROFESSIONAL</h3>
              <div className="text-4xl font-bold text-white mb-6">$5,000</div>
              <ul className="space-y-3 mb-8">
                <li className="text-white/80">• Comprehensive consultation</li>
                <li className="text-white/80">• Full design development</li>
                <li className="text-white/80">• Advanced deliverables</li>
                <li className="text-white/80">• 5 rounds of revisions</li>
                <li className="text-white/80">• Ongoing support</li>
              </ul>
              <a 
                href="/contact" 
                className="block w-full bg-[#860123] hover:bg-[#980025] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Started
              </a>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">ENTERPRISE</h3>
              <div className="text-4xl font-bold text-white mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="text-white/80">• Dedicated project management</li>
                <li className="text-white/80">• Full-service solution</li>
                <li className="text-white/80">• Unlimited revisions</li>
                <li className="text-white/80">• Priority support</li>
                <li className="text-white/80">• Long-term partnership</li>
              </ul>
              <a 
                href="/contact" 
                className="block w-full bg-[#860123] hover:bg-[#980025] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#860123]/20 to-black/40 backdrop-blur-sm rounded-lg p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">READY TO START YOUR PROJECT?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let&apos;s discuss your vision and create something extraordinary together
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#860123] hover:bg-[#980025] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Start a Project
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
