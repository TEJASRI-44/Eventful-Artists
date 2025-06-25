import { div } from 'framer-motion/client'
import ArtistListingPage from './ArtistListingClient'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Eventful - Book Artists',
  description: 'Find and book top Singers, DJs, Speakers & Dancers',
}

export default function Page() {
  return (
    <div>

      <Navbar/>
      <ArtistListingPage />
    </div>
  );
}
