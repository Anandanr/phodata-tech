import React from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from '../ui/AnimatedBackground'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </motion.div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-dark-200 to-dark-300 bg-clip-text text-transparent">
              Technology That
            </span>
            <br />
            <span className="gradient-text">
              Moves Your Business
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-dark-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-primary-400 font-semibold">Cross-border payments</span>,{' '}
            <span className="text-secondary-400 font-semibold">stablecoin infrastructure</span>, and{' '}
            <span className="text-accent-400 font-semibold">fintech products</span>{' '}
            &mdash; plus custom software development and cloud consulting.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            <motion.a
              href="#products"
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Our Products</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { value: '99.9%', label: 'Uptime Guarantee' },
              { value: '24/7', label: 'Technical Support' },
              { value: '10+', label: 'Years Experience' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">{stat.value}</div>
                <div className="text-dark-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
