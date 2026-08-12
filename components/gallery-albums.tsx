'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react'

export interface GalleryPhoto {
  file: string
  caption: string
}

export interface GalleryAlbum {
  id: string
  title: string
  meta: string
  description: string
  photos: GalleryPhoto[]
}

const photoSrc = (file: string) => `/Gallery/${encodeURIComponent(file)}`

export default function GalleryAlbums({ albums }: { albums: GalleryAlbum[] }) {
  const [openAlbum, setOpenAlbum] = useState<number | null>(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [previewIndex, setPreviewIndex] = useState<number[]>(() => albums.map(() => 0))

  const stepPreview = (albumIdx: number, dir: 1 | -1) => {
    setPreviewIndex((prev) => {
      const count = albums[albumIdx].photos.length
      const next = [...prev]
      next[albumIdx] = (prev[albumIdx] + dir + count) % count
      return next
    })
  }

  const album = openAlbum !== null ? albums[openAlbum] : null

  const next = useCallback(() => {
    if (!album) return
    setPhotoIndex((i) => (i + 1) % album.photos.length)
  }, [album])

  const prev = useCallback(() => {
    if (!album) return
    setPhotoIndex((i) => (i - 1 + album.photos.length) % album.photos.length)
  }, [album])

  const close = useCallback(() => {
    setOpenAlbum(null)
  }, [])

  useEffect(() => {
    if (openAlbum === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openAlbum, next, prev, close])

  return (
    <>
      {/* Album stack — vertical, equal-sized cards with an in-card preview carousel */}
      <div className="flex flex-col gap-6">
        {albums.map((a, i) => {
          const current = a.photos[previewIndex[i]]
          return (
            <div
              key={a.id}
              className="group relative overflow-hidden rounded-2xl"
              style={{
                aspectRatio: '16 / 9',
                border: '1px solid rgba(0,158,96,0.15)',
              }}
            >
              <button
                onClick={() => {
                  setOpenAlbum(i)
                  setPhotoIndex(previewIndex[i])
                }}
                className="absolute inset-0 w-full h-full text-left"
                aria-label={`Open ${a.title} album`}
              >
                <Image
                  key={current.file}
                  src={photoSrc(current.file)}
                  alt={a.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i === 0}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(20,20,15,0.65) 0%, rgba(20,20,15,0.05) 45%, rgba(20,20,15,0) 70%)',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(20,20,15,0.55) 100%)',
                  }}
                />
              </button>

              {/* Count badge */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold pointer-events-none"
                style={{ background: 'rgba(0,0,0,0.45)', color: '#ffffff' }}
              >
                <Images size={12} />
                {a.photos.length}
              </div>

              {/* Title / meta */}
              <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                <div className="text-xs font-semibold mb-1" style={{ color: '#8fe3b0', letterSpacing: '0.08em' }}>
                  {a.meta}
                </div>
                <h3
                  className="font-bold leading-snug mb-1"
                  style={{ color: '#ffffff', fontFamily: 'Georgia, serif', fontSize: '1.5rem' }}
                >
                  {a.title}
                </h3>
                <p className="text-sm max-w-md" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {a.description}
                </p>
              </div>

              {/* In-card preview navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  stepPreview(i, -1)
                }}
                aria-label={`Previous photo in ${a.title}`}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(0,0,0,0.45)', color: '#ffffff' }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  stepPreview(i, 1)
                }}
                aria-label={`Next photo in ${a.title}`}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(0,0,0,0.45)', color: '#ffffff' }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )
        })}
      </div>

      {/* Lightbox */}
      {album && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ background: 'rgba(10,10,8,0.96)' }}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
            <div>
              <div className="text-xs font-semibold" style={{ color: '#8fe3b0', letterSpacing: '0.08em' }}>
                {album.meta}
              </div>
              <h3 className="font-bold" style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}>
                {album.title}
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm" style={{ color: '#cfcfe1' }}>
                {photoIndex + 1} / {album.photos.length}
              </span>
              <button
                onClick={close}
                aria-label="Close gallery"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Main viewer */}
          <div className="relative flex-1 flex items-center justify-center px-4 min-h-0">
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-2 md:left-6 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="relative w-full h-full max-w-5xl">
              <Image
                key={album.photos[photoIndex].file}
                src={photoSrc(album.photos[photoIndex].file)}
                alt={album.photos[photoIndex].caption}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={next}
              aria-label="Next photo"
              className="absolute right-2 md:right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Caption */}
          <div className="text-center px-6 py-3 flex-shrink-0">
            <p className="text-sm" style={{ color: '#e5e5e0' }}>
              {album.photos[photoIndex].caption}
            </p>
          </div>

          {/* Thumbnail strip */}
          <div className="flex-shrink-0 px-4 pb-5 pt-1">
            <div className="flex gap-2 overflow-x-auto justify-center">
              {album.photos.map((p, i) => (
                <button
                  key={p.file}
                  onClick={() => setPhotoIndex(i)}
                  className="relative flex-shrink-0 rounded-md overflow-hidden transition-opacity"
                  style={{
                    width: '56px',
                    height: '56px',
                    opacity: i === photoIndex ? 1 : 0.45,
                    border: i === photoIndex ? '2px solid #009e60' : '2px solid transparent',
                  }}
                >
                  <Image src={photoSrc(p.file)} alt="" fill sizes="56px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
