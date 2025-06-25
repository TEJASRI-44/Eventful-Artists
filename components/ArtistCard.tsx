'use client'

import { MapPin, Mic, DollarSign, Info, Star, Heart, Instagram, Linkedin } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

type Artist = {
  name: string
  category: string
  price: string
  location: string
  image?: string
  bio?: string
  rating?: number
  social?: {
    instagram?: string
    linkedin?: string
  }
}

export default function ArtistCard({
  name,
  category,
  price,
  location,
  image,
  bio,
  rating = 4,
  social
}: Artist) {
  const [hovered, setHovered] = useState(false)
  const [saved, setSaved] = useState(false)

  const toggleSaved = () => setSaved((prev) => !prev)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-6 text-center border border-gray-200 dark:border-gray-700 group overflow-hidden"
    >
      {/* Save Button */}
      <button
        onClick={toggleSaved}
        className="absolute top-4 right-4 text-red-500 hover:scale-110 transition"
        aria-label="Save to Favorites"
      >
        <Heart className={clsx('w-5 h-5', { 'fill-red-500': saved })} />
      </button>

      {/* Profile Image or Initial */}
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-purple-300 shadow-lg"
        />
      ) : (
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center text-3xl font-bold shadow-inner">
          {name.charAt(0)}
        </div>
      )}

      {/* Name */}
      <h3 className="text-xl font-extrabold text-purple-700 dark:text-purple-300 mb-2">{name}</h3>

      {/* Category, Location, Price */}
      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 text-sm mb-1">
        <Mic className="w-4 h-4" />
        <span>{category}</span>
      </div>

      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 text-sm mb-1">
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>

      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 text-sm mb-2">
        <DollarSign className="w-4 h-4" />
        <span>{price}</span>
      </div>

      {/* Ratings */}
      <div className="flex justify-center mb-4 text-yellow-400">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} className={clsx('w-4 h-4', idx < rating ? 'fill-yellow-400' : 'text-gray-300')} />
        ))}
      </div>

      {/* CTA */}
      <button className="mt-2 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full font-semibold shadow-md transition">
        Ask for Quote
      </button>

      {/* Hover Bio Overlay */}
      {hovered && bio && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm text-white px-6 py-6 rounded-2xl flex flex-col justify-center items-center text-center transition-opacity duration-300 z-10">
          <Info className="w-6 h-6 mb-2 text-emerald-400" />
          <p className="text-sm mb-4 max-w-xs">{bio.length > 150 ? bio.slice(0, 150) + '...' : bio}</p>
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-medium shadow">
            Contact Now
          </button>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {social?.instagram && (
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {social?.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
