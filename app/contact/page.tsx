'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Head from 'next/head'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
     <><Head>
          <title>Contact Us | Eventful Artists</title>
          <meta name="description" content="Reach out to Eventful Artists for support, partnership, or inquiries." />
          <meta name="keywords" content="event contact, support, customer care, partnership" />
          <meta property="og:title" content="Contact - Eventful Artists" />
          <meta property="og:description" content="Have questions? Contact our team for help or to collaborate." />
          <meta property="og:image" content="/og-image-contact.png" />
          <meta property="og:url" content="https://your-domain.com/contact" />
          <link rel="icon" href="/favicon.ico" />
      </Head><main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-20 px-4">
              <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
                  <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Contact Us</h1>

                  {submitted ? (
                      <div className="text-center text-green-600 font-semibold text-xl">
                          ✅ Thank you! We will get back to you soon.
                      </div>
                  ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                          <div>
                              <input
                                  type="text"
                                  placeholder="Your Name"
                                  required
                                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-300" />
                          </div>
                          <div>
                              <input
                                  type="email"
                                  placeholder="Your Email"
                                  required
                                  className="w-full px-4 py-3 rounded-lg text-black border border-gray-300 placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-300" />
                          </div>
                          <div>
                              <textarea
                                  placeholder="Your Message"
                                  rows={5}
                                  required
                                  className="w-full px-4 py-3 rounded-lg text-black  border border-gray-300 placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-300" />
                          </div>
                          <button
                              type="submit"
                              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-600 transition"
                          >
                              <Send size={18} /> Send Message
                          </button>
                      </form>
                  )}

                  {/* Contact Info */}
                  <div className="mt-10 text-gray-700 space-y-4 text-sm text-center">
                      <div className="flex justify-center items-center gap-2">
                          <Mail size={16} /> support@eventfulartists.com
                      </div>
                      <div className="flex justify-center items-center gap-2">
                          <Phone size={16} /> +91 98765 43210
                      </div>
                      <div className="flex justify-center items-center gap-2">
                          <MapPin size={16} /> Hyderabad, India
                      </div>
                  </div>
              </div>
          </main></>
  )
}
