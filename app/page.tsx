import HomePage from './HomePageClient'
import Navbar from '@/components/Navbar'


export const metadata = {
  title: 'Eventful - Book Artists',
  description: 'Find and book top Singers, DJs, Speakers & Dancers',
}

export default function Page() {
  return(
    <div>
      <Navbar />
      <HomePage />
    </div>
    
  ); 
}
