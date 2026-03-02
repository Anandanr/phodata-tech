import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const techCategories = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Terraform'],
  },
  {
    category: 'Integrations',
    items: ['Stripe', 'Supabase', 'Twilio', 'SendGrid', 'Plaid'],
  },
]

export default function TechStackSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="technology" className="py-20 bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="section-subtext">
            We use modern, battle-tested technologies to build reliable software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-primary-400 mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="badge-primary">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
