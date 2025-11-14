'use client'

import { useState } from 'react'
import FloatingCube from '@/components/FloatingCube'
import GameBackground from '@/components/GameBackground'

const sections = [
  {
    label: 'about',
    title: 'About Lanssie',
    description:
      "Creative technologist blending design, storytelling, and software to build playful experiences that make people feel something.",
    color: '#10b981',
  },
  {
    label: 'projects',
    title: 'Selected Projects',
    description:
      'Immersive web experiments, AR playgrounds, and interactive moments crafted with React, Three.js, and a lot of curiosity.',
    color: '#3b82f6',
  },
  {
    label: 'art',
    title: 'Art & Motion',
    description:
      'Generative visuals, tactile zines, and motion studies inspired by sci-fi color palettes, analog textures, and digital nostalgia.',
    color: '#8b5cf6',
  },
  {
    label: 'contact',
    title: 'Reach Out',
    description:
      'Open to collaborations, commissions, and conversations. Say hello if you have an idea that feels delightfully impossible.',
    color: '#ef4444',
  },
]

export default function Home() {
  const [activeFace, setActiveFace] = useState(0)

  const handleNavClick = (index: number) => {
    setActiveFace(index)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GameBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          
          <p className="text-xl text-white drop-shadow-md mb-4" style={{ 
            textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
            fontFamily: 'Courier New, monospace'
          }}>
            Hey, I'm Lanssie
          </p>
          
          {/* Navigation Bar */}
          <nav className="flex justify-center gap-6 mb-8">
            {sections.map((section, index) => (
              <button
                key={section.label}
                onClick={() => handleNavClick(index)}
                className="px-4 py-2 text-white font-mono text-sm uppercase tracking-wider transition-all hover:scale-110"
                style={{
                  textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                  fontFamily: 'Courier New, monospace',
                  borderBottom: activeFace === index ? '2px solid white' : '2px solid transparent',
                  opacity: activeFace === index ? 1 : 0.8,
                }}
              >
                {section.label}
              </button>
            ))}
          </nav>
          
        </div>
        
        <div className="flex justify-center">
          <div className="relative" style={{ width: '256px', height: '256px' }}>
            <FloatingCube activeFace={activeFace} faceColors={sections.map(section => section.color)} />
            
            {/* Text overlay positioned on top of the cube face */}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white text-sm font-mono leading-relaxed pointer-events-none"
              style={{
                width: '256px',
                height: '256px',
                background: 'transparent',
                zIndex: 10,
              }}
            >
              <div
                className="w-full h-full flex flex-col justify-center p-4 rounded-xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(2px)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-2 opacity-80">{sections[activeFace].label}</p>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
                  {sections[activeFace].title}
                </h3>
                <p className="text-sm opacity-90">{sections[activeFace].description}</p>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
      
      <footer className="relative z-10 bg-black/50 backdrop-blur-sm border-t-4 border-green-600 mt-12" style={{ borderStyle: 'solid' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-white text-sm font-mono" style={{ 
            textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
          }}>
            &copy; {new Date().getFullYear()} Lanssie. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
