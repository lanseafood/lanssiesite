'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface FloatingCubeProps {
  pages: Array<{ name: string; href: string; color: string }>
}

export default function FloatingCube({ pages }: FloatingCubeProps) {
  const cubeRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [autoRotation, setAutoRotation] = useState({ x: 0, y: 0 })

  // Auto-rotation animation
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setAutoRotation(prev => ({
        x: prev.x + 0.5,
        y: prev.y + 0.5,
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [isHovered])

  // Mouse interaction
  useEffect(() => {
    if (!cubeRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return
      
      const rect = cubeRef.current?.getBoundingClientRect()
      if (!rect) return

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) / 10
      const deltaY = (e.clientY - centerY) / 10

      setRotation({
        y: deltaX,
        x: -deltaY,
      })
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setRotation({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    cubeRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered])

  // Ensure we have 6 pages (cube has 6 faces)
  const cubePages = [
    ...pages,
    ...Array(6 - pages.length).fill({ name: '', href: '#', color: '#e5e7eb' })
  ].slice(0, 6)

  return (
    <div className="flex items-center justify-center min-h-[60vh] perspective-1000">
      <div className="cube-wrapper">
        <div
          ref={cubeRef}
          className="cube-container relative w-64 h-64"
          onMouseEnter={() => setIsHovered(true)}
          style={{
            transformStyle: 'preserve-3d',
            transform: isHovered
              ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
              : `rotateX(${autoRotation.x}deg) rotateY(${autoRotation.y}deg)`,
            transition: isHovered ? 'none' : 'transform 0.1s linear',
          }}
        >
        {/* Cube faces */}
        {cubePages.map((page, index) => {
          const positions = [
            { transform: 'rotateY(0deg) translateZ(128px)', name: 'Front' },
            { transform: 'rotateY(180deg) translateZ(128px)', name: 'Back' },
            { transform: 'rotateY(90deg) translateZ(128px)', name: 'Right' },
            { transform: 'rotateY(-90deg) translateZ(128px)', name: 'Left' },
            { transform: 'rotateX(90deg) translateZ(128px)', name: 'Top' },
            { transform: 'rotateX(-90deg) translateZ(128px)', name: 'Bottom' },
          ]

          const position = positions[index]

          return (
            <Link
              key={index}
              href={page.href}
              className={`cube-face absolute w-64 h-64 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/20 transition-all hover:scale-105 hover:shadow-2xl`}
              style={{
                background: page.color || '#3b82f6',
                transform: position.transform,
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">
                  {index === 0 && '🏠'}
                  {index === 1 && '👤'}
                  {index === 2 && '📄'}
                  {index === 3 && '📧'}
                  {index === 4 && '🥽'}
                  {index === 5 && '⭐'}
                </div>
                <div>{page.name || position.name}</div>
              </div>
            </Link>
          )
        })}
        </div>
      </div>
    </div>
  )
}

