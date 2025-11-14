'use client'

import FloatingCube from '@/components/FloatingCube'
import GameBackground from '@/components/GameBackground'

export default function Home() {
  const pages = [
    { name: 'Home', href: '/', color: '#3b82f6' },
    { name: 'About', href: '/about', color: '#10b981' },
    { name: 'CV', href: '/cv', color: '#f59e0b' },
    { name: 'Contact', href: '/contact', color: '#ef4444' },
    { name: 'VR', href: '/vr', color: '#8b5cf6' },
    { name: 'Surprise', href: '/surprise', color: '#ec4899' },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GameBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          
          <p className="text-xl text-white drop-shadow-md mb-2" style={{ 
            textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
            fontFamily: 'Courier New, monospace'
          }}>
            Hey, I'm Lanssie
          </p>
          
        </div>
        
        <div className="flex justify-center">
          <FloatingCube pages={pages} />
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
