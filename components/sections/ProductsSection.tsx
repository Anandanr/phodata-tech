import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const flagship = {
  name: 'Pym',
  tagline: 'Cross-Border Remittance Platform',
  url: 'https://pym.ink',
  description:
    'Send money from the US to India at the best exchange rates. Stablecoin-powered rails with bank-grade compliance — live and processing transfers today.',
  features: [
    'USD → INR transfers via ACH, wire, or card',
    'Crypto-powered settlement (USDT) for near-instant delivery',
    'Real-time exchange rates with transparent fees',
    'KYC/AML compliant — US MSB registered',
    'USDT wallet with P2P send capability',
  ],
  gradient: 'from-primary-500 to-secondary-600',
  status: 'Live',
}

const platformAPIs = [
  {
    name: 'Stablecoin Orchestration API',
    description:
      'Programmable fiat-to-crypto and crypto-to-fiat rails. Convert USD to USDT (and back) via a single API call — no exchange accounts or wallet management needed.',
    capabilities: [
      'Fiat → Stablecoin (On-Ramp)',
      'Stablecoin → Fiat (Off-Ramp)',
      'Multi-exchange liquidity (Kraken, etc.)',
      'Custodial wallet management',
    ],
    gradient: 'from-accent-500 to-purple-600',
    badge: 'Orchestration',
  },
  {
    name: 'Cross-Border Payout API',
    description:
      'Deliver funds to Indian bank accounts via IMPS, UPI, or NEFT — programmatically. Built for platforms that need to pay out in INR at scale.',
    capabilities: [
      'IMPS / UPI / NEFT payouts',
      'Real-time P2P rate matching',
      'Webhook-based status updates',
      'Bulk payout support',
    ],
    gradient: 'from-primary-500 to-accent-600',
    badge: 'India Corridor',
  },
  {
    name: 'Crypto On-Ramp & Off-Ramp',
    description:
      'Let your users buy and sell stablecoins within your app. White-label on/off-ramp with Stripe-powered fiat collection and Kraken-powered execution.',
    capabilities: [
      'Card, ACH, & wire fiat collection',
      'USDT/USDC purchase & redemption',
      'Embedded widget or API integration',
      'Compliance-ready (KYC built in)',
    ],
    gradient: 'from-secondary-500 to-primary-600',
    badge: 'Embeddable',
  },
]

const upcomingProducts = [
  {
    name: 'Invoice Payments',
    description:
      'Freelancers and businesses receive USD invoices, get paid in INR directly to their bank. No intermediary accounts.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    name: 'Recurring Transfers',
    description:
      'Scheduled cross-border payments — rent, EMIs, family support. Set it once, funds arrive like clockwork.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    name: 'NRI Bill Pay',
    description:
      'Pay Indian utility bills, insurance premiums, and loan EMIs from your US bank account.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
  },
  {
    name: 'Payroll & Bulk Payouts',
    description:
      'Pay remote teams and contractors in India. Upload a CSV, we handle FX and distribution via IMPS.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    name: 'Multi-Corridor APAC',
    description:
      'Expanding beyond India — USD to Philippines, Vietnam, Bangladesh, and more using the same stablecoin rails.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    name: 'INR → USD Corridor',
    description:
      'Reverse flow for Indian businesses paying US vendors — circular float model for maximum capital efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
]

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="products" className="py-20 bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Our Products</span>
          </h2>
          <p className="section-subtext">
            Infrastructure for moving money across borders &mdash; stablecoin-powered rails,
            payout APIs, and consumer products built on top
          </p>
        </motion.div>

        {/* ── Flagship Product: Pym ── */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-primary-500/30 bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5" />
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0">
                      <defs>
                        <linearGradient id="pym-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#4f46e5" />
                        </linearGradient>
                      </defs>
                      <rect width="32" height="32" rx="8" fill="url(#pym-grad)" />
                      <line x1="9" y1="6" x2="9" y2="26" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
                      <line x1="23" y1="14.5" x2="30" y2="7.5" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
                      <path d="M9 9H17C20.3 9 23 11.3 23 14.5C23 17.7 20.3 20 17 20H9" stroke="#fde047" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 14.5H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                    </svg>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{flagship.name}</h3>
                    <span className="badge bg-green-500/10 text-green-400 border border-green-500/20">
                      {flagship.status}
                    </span>
                  </div>
                  <p className="text-lg text-primary-400 font-medium mb-4">{flagship.tagline}</p>
                  <p className="text-dark-300 leading-relaxed mb-8 max-w-2xl">
                    {flagship.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {flagship.features.map((f) => (
                      <li key={f} className="flex items-center space-x-3 text-dark-300">
                        <svg
                          className="w-5 h-5 text-primary-400 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={flagship.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Visit Pym</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.a>
                </div>

                {/* Mini dashboard graphic */}
                <div className="lg:w-80 flex-shrink-0">
                  <div className="bg-dark-800/60 border border-dark-700/50 rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-dark-300">Transfer Status</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div className="text-lg font-semibold text-white">
                      Real-time P2P rates
                    </div>
                    <div className="border-t border-dark-700/50 pt-4 space-y-2">
                      {['ACH Transfer', 'Wire Transfer', 'Card Payment'].map((m) => (
                        <div key={m} className="flex items-center justify-between text-sm">
                          <span className="text-dark-400">{m}</span>
                          <span className="text-primary-400">Available</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Platform API Services ── */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Platform APIs</h3>
            <p className="text-dark-300 max-w-2xl mx-auto">
              The same infrastructure that powers Pym &mdash; available as APIs for your platform.
              Stablecoin-powered rails built for emerging-market corridors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platformAPIs.map((api, i) => (
              <motion.div
                key={api.name}
                className="card card-hover group hover:border-primary-500/30"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${api.gradient} rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </div>
                  <span className="badge-primary text-xs">{api.badge}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{api.name}</h4>
                <p className="text-dark-300 text-sm leading-relaxed mb-5">{api.description}</p>
                <ul className="space-y-2">
                  {api.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center space-x-2 text-sm text-dark-300">
                      <svg
                        className="w-4 h-4 text-primary-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Coming Soon ── */}
        <div>
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Coming Soon</h3>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Products on our roadmap &mdash; built on the same stablecoin infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProducts.map((product, i) => (
              <motion.div
                key={product.name}
                className="card p-6 group hover:border-accent-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 bg-accent-500/10 border border-accent-500/20 rounded-lg flex items-center justify-center mb-4 text-accent-400 group-hover:bg-accent-500/20 transition-colors duration-300">
                  {product.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{product.name}</h4>
                <p className="text-dark-300 text-sm leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
