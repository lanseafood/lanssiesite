'use client'

import { useState } from 'react'
import MiniGame from '@/components/MiniGame'
import Link from 'next/link'

export default function Home() {
  const [gameComplete, setGameComplete] = useState(false)

  // Check if game was completed (stored in localStorage)
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('gameComplete')
    if (stored === 'true' && !gameComplete) {
      setGameComplete(true)
    }
  }

  const handleGameComplete = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gameComplete', 'true')
    }
    setGameComplete(true)
  }

  // Show mini-game if not completed
  if (!gameComplete) {
    return <MiniGame onComplete={handleGameComplete} />
  }

  // Show main website after game completion
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Lanssie</h1>
            <div className="space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/cv" className="text-gray-600 hover:text-gray-900">CV</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/vr" className="text-gray-600 hover:text-gray-900">VR</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome!</h1>
          <p className="text-xl text-gray-600">Hi, I'm Lanssie</p>
          <p className="text-lg text-gray-500 mt-2">Welcome to my personal website.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/about"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-600">Learn more about me</p>
          </Link>

          <Link
            href="/cv"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">CV</h2>
            <p className="text-gray-600">View my resume</p>
          </Link>

          <Link
            href="/contact"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-600">Get in touch</p>
          </Link>

          <Link
            href="/vr"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">VR</h2>
            <p className="text-gray-600">VR projects</p>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                localStorage.removeItem('gameComplete')
                setGameComplete(false)
              }
            }}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Play Game Again
          </button>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lanssie. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

