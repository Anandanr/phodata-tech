import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { AnimationProvider } from '../components/providers/AnimationProvider'

export default function TermsOfService() {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-dark-900 text-white">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-dark-300">
            <p className="text-lg">Last updated: February 2026</p>

            <h2 className="text-2xl font-semibold text-white mt-8">1. Services</h2>
            <p>Phodata LLC provides technology consulting, custom software development, cloud infrastructure management, and related professional services as agreed upon in individual project agreements.</p>

            <h2 className="text-2xl font-semibold text-white mt-8">2. Intellectual Property</h2>
            <p>Upon full payment, clients receive ownership of custom code and deliverables created specifically for their project, unless otherwise stated in the project agreement.</p>

            <h2 className="text-2xl font-semibold text-white mt-8">3. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of any engagement.</p>

            <h2 className="text-2xl font-semibold text-white mt-8">4. Limitation of Liability</h2>
            <p>Phodata LLC&apos;s liability is limited to the fees paid for the specific services in question. We are not liable for indirect, incidental, or consequential damages.</p>

            <h2 className="text-2xl font-semibold text-white mt-8">5. Contact</h2>
            <p>For questions about these terms, contact us at hello@phodata.xyz.</p>
          </div>
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  )
}
