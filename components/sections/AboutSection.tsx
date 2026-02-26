import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008V17.25zm-3.75 0h.008v.008h-.008V17.25z" />
      </svg>
    ),
    title: 'Cloud-Native Architecture',
    description: 'Production-ready infrastructure with microservices, containerization, and auto-scaling built for performance at any scale.',
    gradient: 'from-primary-500 to-secondary-600',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: 'Data & Analytics',
    description: 'Real-time dashboards, business analytics, and data pipelines to help you make data-driven decisions.',
    gradient: 'from-secondary-500 to-accent-600',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    title: 'API & System Integration',
    description: 'Connect your tools, payment processors, CRMs, and third-party services with reliable, well-documented APIs.',
    gradient: 'from-accent-500 to-primary-600',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: 'Automation & DevOps',
    description: 'CI/CD pipelines, automated testing, monitoring, and alerting to reduce operational overhead.',
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-20 bg-dark-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">About Phodata</span>
          </h2>
          <p className="section-subtext">
            We build reliable, scalable software solutions for businesses &mdash; from cloud-native
            applications and API integrations to full-stack platforms and data infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Capabilities List */}
          <div className="space-y-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${cap.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{cap.title}</h3>
                  <p className="text-dark-300">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dashboard Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-white">Project Dashboard</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-400">12</div>
                    <div className="text-sm text-dark-400">Active Projects</div>
                  </div>
                  <div className="bg-secondary-500/10 border border-secondary-500/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-secondary-400">98%</div>
                    <div className="text-sm text-dark-400">Client Satisfaction</div>
                  </div>
                </div>
                <div className="bg-dark-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-dark-300">Infrastructure Health</span>
                    <span className="text-sm text-green-400">All systems operational</span>
                  </div>
                  <div className="w-full bg-dark-600 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '99%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  {['Payment Gateway API', 'Cloud Infrastructure', 'Data Pipeline'].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-dark-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
