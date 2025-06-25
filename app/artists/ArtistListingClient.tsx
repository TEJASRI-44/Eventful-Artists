'use client'

import { useState } from 'react'
import artistsData from '@/data/artists.json'
import ArtistCard from '@/components/ArtistCard'
import FilterBlock from '@/components/FilterBlock'
import ThemeToggle from '@/components/ThemeToggle'
import Head from 'next/head'

export default function ArtistListingPage() {
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [filtered, setFiltered] = useState(artistsData)

  const handleFilter = () => {
    const result = artistsData.filter((artist) => {
      return (
        (category ? artist.category === category : true) &&
        (location ? artist.location.toLowerCase().includes(location.toLowerCase()) : true)
      )
    })
    setFiltered(result)
  }

  return (
     <><Head>
      <title>Browse Verified Artists | Eventful Artists</title>
      <meta name="description" content="Find the perfect singer, DJ, or speaker for your event. Filter artists by category and city." />
      <meta name="keywords" content="book artists, event performers, singers, DJs, speakers, event talent" />
      <meta property="og:title" content="Artist Directory - Eventful Artists" />
      <meta property="og:description" content="Explore and book top-rated performers near you." />
      <meta property="og:image" content="/og-image-artists.png" />
      <meta property="og:url" content="https://your-domain.com/artists" />
      <link rel="icon" href="/favicon.ico" />
    </Head><main className="min-h-screen bg-white text-gray-900 transition-all duration-300">
        {/* Optional ThemeToggle if needed */}
        {/* <ThemeToggle /> */}

        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
          {/* Header */}
          <h1 className="text-2xl sm:text-5xl font-extrabold text-center mb-9 text-gray-800">
            Browse & Book Verified Artists
          </h1>

          {/* Filter Section */}
          <section className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow mb-12">
            <FilterBlock
              category={category}
              setCategory={setCategory}
              location={location}
              setLocation={setLocation}
              handleFilter={handleFilter} />
          </section>

          {/* Artists Grid */}
          <section>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((artist) => (
                  <ArtistCard key={artist.name} {...artist} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-lg text-gray-500">
                😔 No artists found. Try adjusting your filters.
              </div>
            )}
          </section>
        </div>
      </main></>
  )
}
