import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'Full-stack web and mobile application development tailored to your business needs. From MVP to enterprise-grade platforms.',
    features: ['Next.js / React / Node.js', 'Mobile Apps (React Native)', 'Database Design & Optimization', 'API Development & Integration'],
    gradient: 'from-primary-500 to-secondary-600',
    borderHover: 'hover:border-primary-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: 'Cloud Infrastructure & DevOps',
    description: 'Design, deploy, and manage cloud infrastructure on AWS, GCP, or Azure. CI/CD pipelines, monitoring, and auto-scaling.',
    features: ['AWS / GCP / Azure / Vercel', 'Docker & Kubernetes', 'CI/CD Automation', 'Monitoring & Alerting'],
    gradient: 'from-secondary-500 to-accent-600',
    borderHover: 'hover:border-secondary-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: 'Fintech & Payment Solutions',
    description: 'Build payment processing, cross-border transfer, and financial technology platforms with compliance-ready infrastructure.',
    features: ['Payment Gateway Integration', 'Cross-Border Transfers', 'KYC/AML Compliance Tools', 'Multi-Currency Support'],
    gradient: 'from-accent-500 to-purple-600',
    borderHover: 'hover:border-accent-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: 'Data Analytics & Business Intelligence',
    description: 'Real-time dashboards, data pipelines, and analytics platforms to turn your data into actionable insights.',
    features: ['Real-Time Dashboards', 'ETL & Data Pipelines', 'Custom Reporting', 'Predictive Analytics'],
    gradient: 'from-purple-500 to-pink-500',
    borderHover: 'hover:border-purple-500/30',
  },
]

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="section-subtext">
            End-to-end technology solutions to build, launch, and scale your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`card card-hover group ${service.borderHover}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-dark-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 text-dark-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
