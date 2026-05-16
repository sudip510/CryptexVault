'use client'

import { motion } from 'framer-motion'
import { Wallet, Upload, Cloud, Gift } from 'lucide-react'

const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Connect Wallet',
    description: 'Link your Web3 wallet for secure, passwordless authentication.',
    color: 'cyan',
  },
  {
    icon: Upload,
    number: '02',
    title: 'Upload & Encrypt',
    description: 'Your files are encrypted locally before being uploaded to the network.',
    color: 'purple',
  },
  {
    icon: Cloud,
    number: '03',
    title: 'Store on IPFS/Filecoin',
    description: 'Files are distributed across the decentralized network for redundancy.',
    color: 'emerald',
  },
  {
    icon: Gift,
    number: '04',
    title: 'Share & Earn Rewards',
    description: 'Share files securely and earn tokens for network participation.',
    color: 'pink',
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/50 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-emerald mb-4">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Get Started in</span>{' '}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From wallet connection to earning rewards, experience seamless decentralized storage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan via-purple to-emerald opacity-30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step card */}
                <div className="glass rounded-2xl p-6 text-center relative z-10 h-full group hover:border-cyan/30 transition-all duration-300">
                  {/* Number badge */}
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-${step.color} text-primary-foreground text-sm font-bold`}
                    style={{
                      background: step.color === 'cyan' ? 'linear-gradient(135deg, #00d4ff, #0099cc)' :
                                 step.color === 'purple' ? 'linear-gradient(135deg, #a855f7, #7c3aed)' :
                                 step.color === 'emerald' ? 'linear-gradient(135deg, #34d399, #10b981)' :
                                 'linear-gradient(135deg, #f472b6, #ec4899)'
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-muted/50 group-hover:scale-110 transition-transform">
                    <step.icon 
                      className="w-8 h-8" 
                      style={{
                        color: step.color === 'cyan' ? '#00d4ff' :
                               step.color === 'purple' ? '#a855f7' :
                               step.color === 'emerald' ? '#34d399' :
                               '#f472b6'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
