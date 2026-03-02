import React from 'react'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ProductsSection from '../components/sections/ProductsSection'
import TechStackSection from '../components/sections/TechStackSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/layout/Footer'
import { AnimationProvider } from '../components/providers/AnimationProvider'

export default function Home() {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-dark-900 text-white">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <TechStackSection />
          <FeaturesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  )
}
