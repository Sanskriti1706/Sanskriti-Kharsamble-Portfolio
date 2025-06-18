"use client"

import { useEffect, useState, useCallback } from 'react'

const STAR_COUNT = 80
const BLOB_COUNT = 5

export const AnimatedBackground = () => {
  const [stars, setStars] = useState<any[]>([])
  const [blobs, setBlobs] = useState<any[]>([])

  const createStars = useCallback(() => {
    const newStars = []
    for (let i = 0; i < STAR_COUNT; i++) {
      newStars.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random(),
        delay: Math.random() * 5,
        twinkle: Math.random() > 0.7,
      })
    }
    setStars(newStars)
  }, [])

  const createBlobs = useCallback(() => {
    const newBlobs = []
    const colors = ["#d946ef", "#ef4444", "#f97316"] 
    for (let i = 0; i < BLOB_COUNT; i++) {
      newBlobs.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 300 + 300,
        x: Math.random() * window.innerWidth,
        y: (Math.random() * 0.4 + 0.6) * window.innerHeight,
        delay: Math.random() * 5,
      })
    }
    setBlobs(newBlobs)
  }, [])

  useEffect(() => {
    createStars()
    createBlobs()

    const handleResize = () => {
      createStars()
      createBlobs()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [createStars, createBlobs])

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-black">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute bg-white rounded-full opacity-0 animate-fade-in ${
            star.twinkle ? 'animate-twinkle' : ''
          }`}
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            boxShadow: "0 0 4px 1px rgba(255,255,255,0.7)",
          }}
        />
      ))}

      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"
          style={{
            background: blob.color,
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            animationDelay: `${blob.delay}s`,
          }}
        />
      ))}
    </div>
  )
} 