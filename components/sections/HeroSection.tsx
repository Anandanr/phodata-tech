import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from '../ui/AnimatedBackground'

const rotatingWords = [
  'Payments',
  'Remittance',
  'On-Ramp',
  'Off-Ramp',
  'Payouts',
]

const apiNodes = [
  { label: 'Payout API', x: 0, y: -1, icon: '↗' },
  { label: 'On-Ramp', x: 0.87, y: -0.5, icon: '⬆' },
  { label: 'Off-Ramp', x: 0.87, y: 0.5, icon: '⬇' },
  { label: 'Stablecoin', x: 0, y: 1, icon: '◈' },
  { label: 'KYC', x: -0.87, y: 0.5, icon: '✓' },
  { label: 'Webhooks', x: -0.87, y: -0.5, icon: '⚡' },
]

function ConnectionAnimation() {
  const centerX = 200
  const centerY = 160
  const radius = 130

  return (
    <div className="relative w-[400px] h-[320px] mx-auto">
      <svg
        viewBox="0 0 400 320"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        {/* Connection lines from center to each node */}
        {apiNodes.map((node, i) => {
          const nx = centerX + node.x * radius
          const ny = centerY + node.y * radius
          return (
            <g key={node.label}>
              {/* Static line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={nx}
                y2={ny}
                stroke="rgba(139,92,246,0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* Animated data pulse traveling along the line */}
              <circle r="3" fill="#8b5cf6">
                <animateMotion
                  dur={`${2 + i * 0.4}s`}
                  repeatCount="indefinite"
                  path={`M${centerX},${centerY} L${nx},${ny}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${2 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Return pulse */}
              <circle r="2" fill="#22d3ee">
                <animateMotion
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                  path={`M${nx},${ny} L${centerX},${centerY}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0"
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          )
        })}

        {/* Center hub glow */}
        <circle cx={centerX} cy={centerY} r="38" fill="url(#hubGlow)" />
        <circle cx={centerX} cy={centerY} r="32" fill="rgba(9,9,11,0.9)" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" />

        {/* Center label */}
        <text x={centerX} y={centerY - 6} textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
          Your
        </text>
        <text x={centerX} y={centerY + 10} textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
          Platform
        </text>

        {/* Outer nodes */}
        {apiNodes.map((node, i) => {
          const nx = centerX + node.x * radius
          const ny = centerY + node.y * radius
          return (
            <g key={node.label}>
              {/* Node background */}
              <rect
                x={nx - 34}
                y={ny - 16}
                width="68"
                height="32"
                rx="8"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(139,92,246,0.25)"
                strokeWidth="1"
              />
              {/* Node pulse ring */}
              <rect
                x={nx - 34}
                y={ny - 16}
                width="68"
                height="32"
                rx="8"
                fill="none"
                stroke="rgba(139,92,246,0.4)"
                strokeWidth="1"
              >
                <animate
                  attributeName="opacity"
                  values="0.4;0;0.4"
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </rect>
              {/* Node text */}
              <text
                x={nx}
                y={ny + 4}
                textAnchor="middle"
                fill="rgba(228,228,231,0.8)"
                fontSize="10"
                fontWeight="500"
              >
                {node.label}
              </text>
            </g>
          )
        })}

        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(139,92,246,0.3)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b]">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pill badge */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Plug &amp; Play APIs &amp; SDKs
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.15] tracking-tight text-center">
            <span className="text-white">Connect </span>
            <span className="inline-flex justify-start w-[160px] sm:w-[220px] md:w-[280px] lg:w-[340px] overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span className="text-white">into your Platform!</span>
          </h1>

          {/* API Connection Animation */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <ConnectionAnimation />
          </motion.div>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stablecoin-powered cross-border payment infrastructure.{' '}
            Integrate our APIs to move money across the{' '}
            <span className="text-white font-medium">USD &rarr; INR</span> corridor.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
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
              <span>Explore Products</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </div>

          {/* Stats strip */}
          <motion.div
            className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[
              { value: 'Pym', label: 'Flagship Product' },
              { value: '3 APIs', label: 'Platform Services' },
              { value: 'MSB', label: 'Registered & Compliant' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
