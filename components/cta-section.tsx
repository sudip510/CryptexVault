'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-purple/10 to-emerald/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Glowing border card */}
          <div className="relative">
            {/* Animated border gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan via-purple to-emerald rounded-3xl blur-sm opacity-75 animate-pulse" />
            
            <div className="relative glass-strong rounded-3xl p-12 lg:p-16">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  <span className="text-foreground">Take Back Control of</span>
                  <br />
                  <span className="gradient-text">Your Data</span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join thousands of users who have already made the switch to decentralized storage. 
                  Start with 5GB free, no credit card required.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan to-purple text-white glow-cyan hover:scale-105 transition-transform"
                  >
                    Start Storing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald/50 text-emerald hover:bg-emerald/10 hover:border-emerald"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Join Community
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                  {[
                    { label: 'Uptime', value: '99.99%' },
                    { label: 'Files Secured', value: '1M+' },
                    { label: 'Active Users', value: '25K+' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
