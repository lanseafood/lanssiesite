'use client'

import { useEffect, useMemo, useState } from 'react'

interface FloatingCubeProps {
  faceColors: string[]
  activeFace: number
}

const cubeSize = 256
const half = cubeSize / 2

export default function FloatingCube({ faceColors, activeFace }: FloatingCubeProps) {
  const [isInitialMount, setIsInitialMount] = useState(true)

  useEffect(() => {
    setIsInitialMount(false)
  }, [])

  const faceRotations = useMemo(
    () => [
      { x: 0, y: 0 }, // Front
      { x: 0, y: 90 }, // Right
      { x: 0, y: 180 }, // Back
      { x: 0, y: -90 }, // Left
    ],
    []
  )

  const currentRotation = faceRotations[Math.max(0, Math.min(3, activeFace))] ?? { x: 0, y: 0 }

  const faces = useMemo(
    () => [
      { id: 'front', transform: `rotateY(0deg) translateZ(${half}px)`, color: faceColors[0] ?? '#10b981' },
      { id: 'right', transform: `rotateY(90deg) translateZ(${half}px)`, color: faceColors[1] ?? '#3b82f6' },
      { id: 'back', transform: `rotateY(180deg) translateZ(${half}px)`, color: faceColors[2] ?? '#8b5cf6' },
      { id: 'left', transform: `rotateY(-90deg) translateZ(${half}px)`, color: faceColors[3] ?? '#ef4444' },
      { id: 'top', transform: `rotateX(90deg) translateZ(${half}px)`, color: '#f3f4f6' },
      { id: 'bottom', transform: `rotateX(-90deg) translateZ(${half}px)`, color: '#d1d5db' },
    ],
    [faceColors]
  )

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center" 
      style={{ 
        perspective: '1400px',
        width: cubeSize,
        height: cubeSize,
      }}
    >
      <div
        className="relative"
        style={{
          width: cubeSize,
          height: cubeSize,
          // filter: 'drop-shadow(8px 12px 25px rgba(0,0,0,0.45))',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            width: '100%',
            height: '100%',
            transform: `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`,
            transition: isInitialMount ? 'none' : 'transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)',
          }}
        >
          {faces.map(face => (
            <div
              key={face.id}
              className="absolute inset-0"
              style={{
                width: '100%',
                height: '100%',
                transform: face.transform,
                background: face.color,
                border: '4px solid rgba(90, 40, 19, 0.85)',
                borderRadius: '18px',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                // boxShadow:
                //   'inset 0 0 0 2px rgba(255,255,255,0.35), inset 0 0 35px rgba(0,0,0,0.25), 0 0 25px rgba(0,0,0,0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

