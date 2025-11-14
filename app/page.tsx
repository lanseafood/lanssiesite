'use client'

import FloatingCube from '@/components/FloatingCube'

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome!</h1>
          <p className="text-xl text-gray-600">Hi, I'm Lanssie</p>
          <p className="text-lg text-gray-500 mt-2">Click on the cube to explore</p>
        </div>
        
        <FloatingCube pages={pages} />
        
        <div className="text-center mt-12 text-gray-600">
          <p className="text-sm">Hover over the cube and move your mouse to rotate it</p>
        </div>
      </div>
      
      <footer className="bg-white/50 backdrop-blur-sm border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lanssie. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
