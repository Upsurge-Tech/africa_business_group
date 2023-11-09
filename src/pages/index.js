import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/layout/NavBar'
import HomePage from '@/components/home/HomePage'
import Contact from '@/components/contact/contact'
import About from '@/components/About/about'
import OurMissionAndVision from '@/components/our-mission-and-vision'

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <HomePage />
      <About />
      <Contact />
      <OurMissionAndVision />
    </main>
  )
}
