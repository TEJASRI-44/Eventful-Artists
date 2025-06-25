'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function HomePage() {
  return (
     <><Head>
      <title>Eventful Artists | Discover Top Performers for Your Events</title>
      <meta name="description" content="Browse and book the best singers, DJs, dancers, and performers for your next event with Eventful Artists." />
      <meta name="keywords" content="event artists, singers, dancers, DJs, event booking" />
      <meta property="og:title" content="Eventful Artists - Home" />
      <meta property="og:description" content="Discover and connect with top verified performers for weddings, parties, and corporate events." />
      <meta property="og:image" content="/og-image-home.png" />
      <meta property="og:url" content="https://eventful-artists-q5m2ylqez-tejasri-44s-projects.vercel.app" />
      <link rel="icon" href="/favicon.ico" />
    </Head><motion.main
      className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 px-4 sm:px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-6xl sm:text-5xl font-extrabold text-purple-900 drop-shadow-md">
            Eventful-Artists
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mt-2">Where Events Meet Talent</p>
        </header>

        {/* Hero Section */}
        <section className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14 max-w-3xl mx-auto text-center border border-white/40">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 drop-shadow">
            Find the Perfect Artist
          </h2>
          <p className="text-black text-base sm:text-lg mb-6">
            Book verified singers, dancers, DJs, speakers and more for your dream event.
          </p>

          <Link href="/artists">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
              🎯 Explore Artists
            </button>
          </Link>
        </section>

        {/* Category Cards */}
        <section className="mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-purple-800 mb-10">
            🎭 Popular Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4">
            {[
              { title: '🎤 Singers', color: 'from-yellow-200 to-yellow-400' },
              { title: '💃 Dancers', color: 'from-pink-200 to-pink-400' },
              { title: '🎧 DJs', color: 'from-indigo-200 to-indigo-400' },
              { title: '🎙️ Speakers', color: 'from-green-200 to-green-400' },
            ].map(({ title, color }) => (
              <motion.div
                key={title}
                className={`rounded-xl p-5 text-center font-semibold text-gray-800 bg-gradient-to-br ${color} shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                {title}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-24 bg-white rounded-xl p-6 sm:p-8 shadow max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-indigo-700 mb-6">
            What Organizers Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Ananya',
                feedback: 'Booked a singer through Eventful for our college fest — absolutely amazing experience!',
              },
              {
                name: 'Ravi',
                feedback: 'Super easy onboarding. As an artist, I loved the platform’s visibility.',
              },
              {
                name: 'Zoya',
                feedback: 'We found a DJ last minute — Eventful saved our show!',
              },
            ].map(({ name, feedback }) => (
              <div
                key={name}
                className="bg-indigo-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700 mb-2">"{feedback}"</p>
                <p className="text-xs text-gray-500 text-right font-semibold">– {name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs sm:text-sm text-gray-500 py-6 border-t border-gray-300">
          &copy; {new Date().getFullYear()} Eventful. Built with 💙 using Next.js & Tailwind CSS.
        </footer>
      </motion.main></>
  )
}
