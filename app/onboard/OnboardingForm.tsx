'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'
import Head from 'next/head'

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  bio: Yup.string().required('Bio is required'),
  category: Yup.array().min(1, 'Select at least one category'),
  languages: Yup.array().min(1, 'Select at least one language'),
  fee: Yup.string().required('Fee range is required'),
  location: Yup.string().required('Location is required'),
})

export default function OnboardingForm() {
  const [profilePreview, setProfilePreview] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log('Form Submitted:', data)
    setSubmitted(true)
    useEffect(() => {
  if (submitted) {
    const timer = setTimeout(() => {
      setSubmitted(false)
      reset()
      setProfilePreview(null)
    }, 2500)

    return () => clearTimeout(timer)
  }
}, [submitted, reset, setProfilePreview])
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setProfilePreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  return (
     <><Head>
      <title>Become an Eventful Artist | Join as a Performer</title>
      <meta name="description" content="Join our platform and showcase your talent to event organizers. Onboard as a singer, DJ, or speaker now." />
      <meta name="keywords" content="join artists platform, performer signup, event talent registration" />
      <meta property="og:title" content="Artist Registration - Eventful Artists" />
      <meta property="og:description" content="Submit your profile and get discovered by event planners." />
      <meta property="og:image" content="/og-image-onboard.png" />
      <meta property="og:url" content="https://your-domain.com/onboard" />
      <link rel="icon" href="/favicon.ico" />
    </Head><main className="min-h-screen bg-white py-14 px-6">
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Artist Onboarding
          </h1>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-16">
              <CheckCircle size={48} className="text-green-500" />
              <p className="text-xl font-semibold text-green-600">Form Submitted Successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register('name')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-black bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-100 shadow-sm transition" />
                <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
              </div>

              {/* Bio */}
              <div>
                <textarea
                  placeholder="Tell us about yourself..."
                  {...register('bio')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg text-black  border border-gray-300 placeholder-black bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100 shadow-sm transition" />
                <p className="text-red-500 text-sm mt-1">{errors.bio?.message}</p>
              </div>

              {/* Category */}
              <div>
                <label className="font-semibold text-gray-700">Category</label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {['Singer', 'Dancer', 'DJ', 'Speaker'].map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center text-black gap-2 px-3 py-2 rounded-full border border-purple-300 bg-purple-50 hover:bg-purple-100 cursor-pointer transition"
                    >
                      <input type="checkbox" value={cat} {...register('category')} />
                      {cat}
                    </label>
                  ))}
                </div>
                <p className="text-red-500 text-sm mt-1">{errors.category?.message}</p>
              </div>

              {/* Languages */}
              <div>
                <label className="font-semibold text-gray-700">Languages</label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {['English', 'Hindi', 'Telugu', 'Tamil'].map((lang) => (
                    <label
                      key={lang}
                      className="flex items-center gap-2 text-black px-3 py-2 rounded-full border border-pink-300 bg-pink-50 hover:bg-pink-100 cursor-pointer transition"
                    >
                      <input type="checkbox" value={lang} {...register('languages')} />
                      {lang}
                    </label>
                  ))}
                </div>
                <p className="text-red-500 text-sm mt-1">{errors.languages?.message}</p>
              </div>

              {/* Fee */}
              <div>
                <select
                  {...register('fee')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 shadow-sm transition"
                >
                  <option value="">Select Fee Range</option>
                  <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                  <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                  <option value="₹20,000+">₹20,000+</option>
                </select>
                <p className="text-red-500 text-sm mt-1">{errors.fee?.message}</p>
              </div>

              {/* Location */}
              <div>
                <input
                  type="text"
                  placeholder="City or Location"
                  {...register('location')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-black bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition" />
                <p className="text-red-500 text-sm mt-1">{errors.location?.message}</p>
              </div>

              {/* Profile Image */}
              <div>
                <label className="font-semibold text-gray-700">Profile Picture (Optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2 text-black block" />
                {profilePreview && (
                  <img
                    src={profilePreview}
                    alt="Profile Preview"
                    className="mt-4 h-24 w-24 rounded-full border-4 border-purple-300 object-cover shadow" />
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg transition text-lg"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </main></>
  )
}
