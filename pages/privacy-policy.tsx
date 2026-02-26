import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { AnimationProvider } from '../components/providers/AnimationProvider'

export default function PrivacyPolicy() {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-dark-900 text-white">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-dark-300">
            <p className="text-lg">Last updated: February 2026</p>

            <h2 className="text-2xl font-semibold text-white mt-8">1. Information We Collect</h2>
            <p>Phodata LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects information you provide when contacting us, including your name, email address, company name, and project details.</p>

            <h2 className="text-2xl font-semibold text-white mt-8">2. How We Use Your Information</h2>
            <p>We use the information collected to respond to your inquiries, provide technology consulting services, improve our services, and communicate with you about projects and updates.</p>

            <h2 className="text-2xl font-semibold text-white mt-8">3. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information. We do not sell, trade, or transfer your information to third parties without your consent.</p>

            <h2 className="text-2xl font-semibold text-white mt-8">4. Contact Us</h2>
            <p>If you have questions about this privacy policy, please contact us at hello@phodata.xyz.</p>
          </div>
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  )
}
