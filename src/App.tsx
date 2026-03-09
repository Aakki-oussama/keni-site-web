import { useState } from 'react'
import { ArrowRight, Sparkles, Shield, Zap, Component } from 'lucide-react'
import { cn } from './lib/utils'

function App() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      {/* Background Ornament */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] w-[70%] h-[70%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Component className="w-5 h-5 text-white" />
            </div>
            <span>KENI<span className="text-purple-500">SITE</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Process</a>
            <a href="#" className="hover:text-white transition-colors">Showcase</a>
            <button className="px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-all font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-medium animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Built for the Next Generation</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight max-w-4xl bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Elevate Your Digital <br /> Presence with Style
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              We craft high-performance websites that combine stunning aesthetics with seamless functionality. Experience the future of web design today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 transition-all duration-300 font-semibold flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Start Your Project
                <ArrowRight className={cn("w-4 h-4 transition-transform duration-300", isHovered && "translate-x-1")} />
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-semibold">
                View Showcase
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-32">
            {[
              { icon: Zap, title: "Ultra Fast", desc: "Optimized for speed and performance from the ground up." },
              { icon: Shield, title: "Secure", desc: "Built with the latest security standards and best practices." },
              { icon: Component, title: "Scalable", desc: "Modular architecture designed to grow with your business." },
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
