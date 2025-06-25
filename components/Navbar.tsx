'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
   <nav className="bg-white fixed top-0 left-0 right-0 z-50 border-0 shadow-none">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold text-purple-700">
              Eventful-Artists
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLinks />
            <Link
              href="/artists"
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Explore Artists
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? (
                <X className="w-6 h-6 text-purple-700" />
              ) : (
                <Menu className="w-6 h-6 text-purple-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2">
          <MobileLinks onLinkClick={() => setIsOpen(false)} />
          <Link
            href="/artists"
            className="block w-full text-center bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Explore Artists
          </Link>
        </div>
      )}
    </nav>
  )
}

function NavLinks() {
  return (
    <>
      <Link href="/" className="text-gray-700 hover:text-purple-600 transition">Home</Link>
      <Link href="/artists" className="text-gray-700 hover:text-purple-600 transition">Artists</Link>
      <Link href="/onboard" className="text-gray-700 hover:text-purple-600 transition">Onboard</Link>
      <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition">Contact</Link>
    </>
  )
}

function MobileLinks({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    <div className="flex flex-col space-y-2">
      <Link href="/" className="text-gray-800" onClick={onLinkClick}>Home</Link>
      <Link href="/artists" className="text-gray-800" onClick={onLinkClick}>Artists</Link>
      <Link href="/onboard" className="text-gray-800" onClick={onLinkClick}>Onboard</Link>
      <Link href="/contact" className="text-gray-800" onClick={onLinkClick}>Contact</Link>
    </div>
  )
}
