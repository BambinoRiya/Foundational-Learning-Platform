'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: { src: string; alt: string }[]
  intervalMs?: number
}

export default function ImageCarousel({ images, intervalMs = 5000 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(next, intervalMs)
    return () => clearInterval(timer)
  }, [next, intervalMs])

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: '16 / 9', border: '1px solid rgba(0,158,96,0.15)' }}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? 'auto' : 'none' }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Prev / Next controls */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={{ background: 'rgba(0,0,0,0.4)', color: '#ffffff' }}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={{ background: 'rgba(0,0,0,0.4)', color: '#ffffff' }}
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className="rounded-full transition-all"
            style={{
              width: i === index ? '20px' : '8px',
              height: '8px',
              background: i === index ? '#009e60' : 'rgba(255,255,255,0.7)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
