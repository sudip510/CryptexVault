'use client'

import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Free',
    description: 'Perfect for getting started with decentralized storage.',
    price: '0',
    period: 'forever',
    storage: '5 GB',
    features: [
      '5 GB Decentralized Storage',
      'Basic Encryption',
      'Community Support',
      '3 File Shares/month',
      'Web Dashboard Access',
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-muted to-muted/50',
  },
  {
    name: 'Pro',
    description: 'For power users who need more storage and features.',
    price: '9.99',
    period: '/month',
    storage: '100 GB',
    features: [
      '100 GB Decentralized Storage',
      'AES-256 Encryption',
      'Priority Support',
      'Unlimited File Shares',
      'API Access',
      'Token Rewards (2x)',
      'Advanced Analytics',
    ],
    cta: 'Upgrade to Pro',
    popular: true,
    gradient: 'from-cyan to-purple',
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for teams and organizations.',
    price: 'Custom',
    period: '',
    storage: 'Unlimited',
    features: [
      'Unlimited Storage',
      'Military-Grade Encryption',
      'Dedicated Support',
      'Custom Integrations',
      'White-Label Solutions',
      'Token Rewards (5x)',
      'SLA Guarantee',
      'Team Management',
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-purple to-emerald',
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-cyan mb-4">
            Pricing
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Simple, Transparent</span>
            <br />
            <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your needs. All plans include decentralized storage and basic encryption.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan to-purple text-primary-foreground text-sm font-semibold">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`h-full glass rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-cyan/30 shadow-lg shadow-cyan/10' 
                  : 'hover:border-muted-foreground/30'
              }`}>
                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    {plan.price !== 'Custom' && <span className="text-2xl text-muted-foreground">$</span>}
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50">
                    <span className="text-sm font-medium">{plan.storage}</span>
                    <span className="text-xs text-muted-foreground">Storage</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.popular ? 'bg-cyan/20 text-cyan' : 'bg-muted text-muted-foreground'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan to-purple text-white glow-cyan hover:opacity-90'
                      : 'border-border hover:border-cyan/30 hover:bg-cyan/5'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          All plans include 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  )
}
