'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Photo {
  id: string
  url: string
  description: string
}

interface PhotoTileProps {
  photos: Photo[]
  interval?: number
}

const PhotoTile: React.FC<PhotoTileProps> = ({ photos, interval = 5000 }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipped(true)
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
        setIsFlipped(false)
      }, 2000)
    }, interval)

    return () => clearInterval(timer)
  }, [photos, interval])

  const currentPhoto = photos[currentPhotoIndex]

  return (
    <div className={`relative bg-gray-700 w-full h-0 pb-[100%] overflow-hidden ${isFlipped ? 'flipped' : ''}`}>
      <div className="absolute inset-0 transition-transform duration-1000 transform-style-preserve-3d">
        <div className="absolute inset-0 backface-hidden">
          <Image
            src={currentPhoto.url}
            alt={currentPhoto.description}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 backface-hidden transform rotate-y-180 bg-gray-300 bg-opacity-50 flex flex-col justify-end p-4 text-white">
          <p className="text-sm">{currentPhoto.description}</p>
        </div>
      </div>
    </div>
  )
}

interface PhotoGalleryProps {
  photos: Photo[][]
}

export default function PhotoGalleryComponent({ photos }: PhotoGalleryProps) {
  const allPhotos = photos.flat()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      <div className="md:hidden">
        <PhotoTile photos={allPhotos} />
      </div>
      {photos.map((photoGroup, index) => (
        <div key={index} className="hidden md:block">
          <PhotoTile photos={photoGroup} />
        </div>
      ))}
    </div>
  )
}