import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'

interface ContactForm {
  firstName: string
  lastName: string
  email: string
  company: string
  message: string
}

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>()

  const onSubmit = (data: ContactForm) => {
    const subject = encodeURIComponent(`Project Inquiry from ${data.firstName} ${data.lastName}`)
    const body = encodeURIComponent(`Name: ${data.firstName} ${data.lastName}\nCompany: ${data.company}\nEmail: ${data.email}\n\n${data.message}`)
    window.location.href = `mailto:hello@phodata.xyz?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 bg-dark-800/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="section-subtext">
            Have a project in mind? Let&apos;s talk about how we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark-300 mb-2 text-sm">First Name</label>
                  <input
                    {...register('firstName', { required: true })}
                    className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-dark-300 mb-2 text-sm">Last Name</label>
                  <input
                    {...register('lastName', { required: true })}
                    className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-dark-300 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-dark-300 mb-2 text-sm">Company</label>
                <input
                  {...register('company')}
                  className="input-field"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-dark-300 mb-2 text-sm">Message</label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-dark-300">hello@phodata.xyz</p>
                    <p className="text-dark-400 text-sm">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                    <p className="text-dark-300">Albuquerque, New Mexico</p>
                    <p className="text-dark-400 text-sm">United States</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Schedule a Call</h4>
                    <p className="text-dark-300">Book a free 30-min consultation</p>
                    <p className="text-dark-400 text-sm">Available Mon-Fri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-white">Phodata LLC</h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                Registered technology consulting company in New Mexico, USA. We specialize in custom
                software development, cloud infrastructure, fintech solutions, and data analytics
                for businesses of all sizes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
