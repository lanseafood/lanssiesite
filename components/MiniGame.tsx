'use client'

import { useState, useEffect, useCallback } from 'react'

interface MiniGameProps {
  onComplete: () => void
}

export default function MiniGame({ onComplete }: MiniGameProps) {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [targets, setTargets] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [gameStarted, setGameStarted] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  // Generate random targets
  const generateTarget = useCallback(() => {
    return {
      id: Date.now() + Math.random(),
      x: Math.random() * 80 + 10, // 10-90% of width
      y: Math.random() * 60 + 20, // 20-80% of height
    }
  }, [])

  // Start game
  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setTimeLeft(30)
    setGameComplete(false)
    // Generate initial targets
    const initialTargets = Array.from({ length: 5 }, () => generateTarget())
    setTargets(initialTargets)
  }

  // Handle target click
  const handleTargetClick = (id: number) => {
    setScore(prev => prev + 10)
    setTargets(prev => prev.filter(t => t.id !== id))
    // Add new target
    setTimeout(() => {
      setTargets(prev => [...prev, generateTarget()])
    }, 100)
  }

  // Timer countdown
  useEffect(() => {
    if (!gameStarted || gameComplete) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameComplete(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameStarted, gameComplete])

  // Check win condition (score >= 100)
  useEffect(() => {
    if (score >= 100 && !gameComplete) {
      setGameComplete(true)
      setTimeout(() => {
        onComplete()
      }, 1500)
    }
  }, [score, gameComplete, onComplete])

  // Auto-generate targets
  useEffect(() => {
    if (!gameStarted || gameComplete) return

    const interval = setInterval(() => {
      if (targets.length < 8) {
        setTargets(prev => [...prev, generateTarget()])
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [gameStarted, gameComplete, targets.length, generateTarget])

  if (!gameStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-md">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">🎮 Mini Game</h1>
          <p className="text-gray-600 mb-6">
            Click the targets to score points!<br />
            Get 100 points to unlock the website.
          </p>
          <button
            onClick={startGame}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Game
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
      {/* Game UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
        <div className="bg-black/50 px-4 py-2 rounded-lg">
          <div className="text-2xl font-bold">Score: {score}</div>
        </div>
        <div className="bg-black/50 px-4 py-2 rounded-lg">
          <div className="text-2xl font-bold">Time: {timeLeft}s</div>
        </div>
        <div className="bg-black/50 px-4 py-2 rounded-lg">
          <div className="text-sm">Target: 100</div>
        </div>
      </div>

      {/* Targets */}
      {targets.map(target => (
        <button
          key={target.id}
          onClick={() => handleTargetClick(target.id)}
          className="absolute w-16 h-16 bg-red-500 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer border-4 border-white animate-pulse"
          style={{
            left: `${target.x}%`,
            top: `${target.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          aria-label="Click target"
        >
          <span className="text-white text-2xl">🎯</span>
        </button>
      ))}

      {/* Game Over / Win Screen */}
      {gameComplete && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20">
          <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-md">
            {score >= 100 ? (
              <>
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold mb-4 text-green-600">You Win!</h2>
                <p className="text-gray-600 mb-4">Final Score: {score}</p>
                <p className="text-gray-500">Unlocking website...</p>
              </>
            ) : (
              <>
                <div className="text-6xl mb-4">😅</div>
                <h2 className="text-3xl font-bold mb-4 text-red-600">Time's Up!</h2>
                <p className="text-gray-600 mb-4">Final Score: {score}</p>
                <p className="text-gray-500 mb-4">You need 100 points to unlock the website.</p>
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
        Click the red targets to score points!
      </div>
    </div>
  )
}

