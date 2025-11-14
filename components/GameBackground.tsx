'use client'

import { useEffect, useRef } from 'react'

export default function GameBackground() {
  const cloud1Ref = useRef<HTMLDivElement>(null)
  const cloud2Ref = useRef<HTMLDivElement>(null)
  const cloud3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate clouds drifting
    const animateClouds = () => {
      if (cloud1Ref.current) {
        let position = -200
        const animate = () => {
          position += 0.3
          if (position > window.innerWidth + 200) position = -200
          cloud1Ref.current!.style.left = `${position}px`
          requestAnimationFrame(animate)
        }
        animate()
      }

      if (cloud2Ref.current) {
        let position = -150
        const animate = () => {
          position += 0.25
          if (position > window.innerWidth + 200) position = -200
          cloud2Ref.current!.style.left = `${position}px`
          requestAnimationFrame(animate)
        }
        animate()
      }

      if (cloud3Ref.current) {
        let position = -100
        const animate = () => {
          position += 0.2
          if (position > window.innerWidth + 200) position = -200
          cloud3Ref.current!.style.left = `${position}px`
          requestAnimationFrame(animate)
        }
        animate()
      }
    }

    animateClouds()
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Blue Sky - 8-bit gradient */}
      <div className="absolute inset-0" style={{
        background: '#60a5fa',
        imageRendering: 'pixelated'
      }} />
      
      {/* Drifting Clouds - 8-bit style */}
      <div
        ref={cloud1Ref}
        className="absolute top-20"
        style={{ left: '-200px', imageRendering: 'pixelated' }}
      >
        <div className="relative" style={{ width: '128px', height: '64px' }}>
          {/* Cloud base */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-white"></div>
          {/* Cloud puffs */}
          <div className="absolute bottom-4 left-8 w-12 h-12 bg-white" style={{ borderRadius: '0' }}></div>
          <div className="absolute bottom-4 right-8 w-12 h-12 bg-white" style={{ borderRadius: '0' }}></div>
          <div className="absolute bottom-6 left-16 w-16 h-10 bg-white" style={{ borderRadius: '0' }}></div>
        </div>
      </div>

      <div
        ref={cloud2Ref}
        className="absolute top-32"
        style={{ left: '-150px', imageRendering: 'pixelated' }}
      >
        <div className="relative" style={{ width: '96px', height: '48px' }}>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-white opacity-90" style={{ borderRadius: '0' }}></div>
          <div className="absolute bottom-3 left-6 w-10 h-10 bg-white opacity-90" style={{ borderRadius: '0' }}></div>
          <div className="absolute bottom-3 right-6 w-10 h-10 bg-white opacity-90" style={{ borderRadius: '0' }}></div>
          <div className="absolute bottom-4 left-12 w-12 h-8 bg-white opacity-90" style={{ borderRadius: '0' }}></div>
        </div>
      </div>

      <div
        ref={cloud3Ref}
        className="absolute top-16"
        style={{ left: '-100px', imageRendering: 'pixelated' }}
      >
        <div className="relative" style={{ width: '112px', height: '56px' }}>
          <div className="absolute bottom-0 left-0 w-full h-7 bg-white opacity-95" style={{ borderRadius: '0' }}></div>
          <div className="absolute bottom-3 left-6 w-11 h-11 bg-white opacity-95" style={{ borderRadius: '0' }}></div>
          <div className="absolute bottom-3 right-6 w-11 h-11 bg-white opacity-95" style={{ borderRadius: '0' }}></div>
          <div className="absolute bottom-4 left-14 w-14 h-9 bg-white opacity-95" style={{ borderRadius: '0' }}></div>
        </div>
      </div>

      {/* Green Grass - solid color with bushes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-green-500" style={{ imageRendering: 'pixelated' }}>
        {/* Bushes spread out - rounded poles with varying heights */}
        {[
          { left: '8%', bundle: 'double', bottom: '7px', color1: '#16a34a', color2: '#22c55e', height1: '24px', height2: '32px' },
          { left: '22%', bundle: 'single', bottom: '90px', color1: '#15803d', height1: '28px' },
          { left: '35%', bundle: 'triple', bottom: '40px', color1: '#166534', color2: '#15803d', color3: '#16a34a', height1: '20px', height2: '36px', height3: '28px' },
          { left: '48%', bundle: 'double', bottom: '32px', color1: '#22c55e', color2: '#4ade80', height1: '32px', height2: '24px' },
          { left: '62%', bundle: 'single', bottom: '0px', color1: '#16a34a', height1: '40px' },
          { left: '75%', bundle: 'triple', bottom: '20px', color1: '#15803d', color2: '#16a34a', color3: '#22c55e', height1: '28px', height2: '20px', height3: '36px' },
          { left: '88%', bundle: 'double', bottom: '100px', color1: '#166534', color2: '#15803d', height1: '24px', height2: '32px' },
        ].map((bush, i) => (
          <div
            key={i}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            style={{
              left: bush.left,
              bottom: bush.bottom,
              imageRendering: 'pixelated',
            }}
          >
            {/* Single bundle - rounded pole */}
            {bush.bundle === 'single' && (
              <div 
                className="bg-green-600"
                style={{ 
                  width: '12px',
                  height: bush.height1,
                  backgroundColor: bush.color1,
                  borderRadius: '6px 6px 0 0',
                }}
              />
            )}
            
            {/* Double bundle - rounded poles */}
            {bush.bundle === 'double' && (
              <div className="relative">
                <div 
                  className="absolute bottom-0 bg-green-600"
                  style={{ 
                    width: '12px',
                    height: bush.height1,
                    left: '-8px',
                    backgroundColor: bush.color1,
                    borderRadius: '6px 6px 0 0',
                  }}
                />
                <div 
                  className="absolute bottom-0 bg-green-600"
                  style={{ 
                    width: '12px',
                    height: bush.height2,
                    left: '8px',
                    backgroundColor: bush.color2,
                    borderRadius: '6px 6px 0 0',
                  }}
                />
              </div>
            )}
            
            {/* Triple bundle - rounded poles */}
            {bush.bundle === 'triple' && (
              <div className="relative">
                <div 
                  className="absolute bottom-0 bg-green-600"
                  style={{ 
                    width: '12px',
                    height: bush.height1,
                    left: '-16px',
                    backgroundColor: bush.color1,
                    borderRadius: '6px 6px 0 0',
                  }}
                />
                <div 
                  className="absolute bottom-0 bg-green-600"
                  style={{ 
                    width: '12px',
                    height: bush.height2,
                    left: '0px',
                    backgroundColor: bush.color2,
                    borderRadius: '6px 6px 0 0',
                  }}
                />
                <div 
                  className="absolute bottom-0 bg-green-600"
                  style={{ 
                    width: '12px',
                    height: bush.height3,
                    left: '16px',
                    backgroundColor: bush.color3,
                    borderRadius: '6px 6px 0 0',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

