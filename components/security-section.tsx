'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Server, FileCheck, Code, Eye } from 'lucide-react'

const securityFeatures = [
  {
    icon: Lock,
    title: 'AES-256 Encryption',
    description: 'Military-grade encryption protects your files before they leave your device.',
  },
  {
    icon: Server,
    title: 'Decentralized Nodes',
    description: 'No single point of failure. Your data is distributed across thousands of nodes.',
  },
  {
    icon: FileCheck,
    title: 'Blockchain Verification',
    description: 'Immutable proof of ownership and file integrity on the blockchain.',
  },
  {
    icon: Eye,
    title: 'Zero-Knowledge Privacy',
    description: 'We never see your data. Only you hold the decryption keys.',
  },
  {
    icon: Code,
    title: 'Smart Contract Security',
    description: 'Audited smart contracts ensure trustless and transparent operations.',
  },
  {
    icon: Shield,
    title: 'Privacy-First Architecture',
    description: 'Built from the ground up with privacy as the core principle.',
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-purple/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central shield */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
              >
                <div className="w-full h-full bg-gradient-to-br from-cyan to-purple rounded-3xl flex items-center justify-center glow-cyan">
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </motion.div>

              {/* Orbiting security badges */}
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i * 60) * (Math.PI / 180)
                const radius = 140
                return (
                  <motion.div
                    key={i}
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: radius * 2,
                      height: radius * 2,
                      marginLeft: -radius,
                      marginTop: -radius,
                    }}
                  >
                    <motion.div
                      className="absolute glass rounded-xl p-2"
                      style={{
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      {i === 0 && <Lock className="w-5 h-5 text-cyan" />}
                      {i === 1 && <Shield className="w-5 h-5 text-purple" />}
                      {i === 2 && <Server className="w-5 h-5 text-emerald" />}
                      {i === 3 && <FileCheck className="w-5 h-5 text-pink" />}
                      {i === 4 && <Code className="w-5 h-5 text-cyan" />}
                      {i === 5 && <Eye className="w-5 h-5 text-purple" />}
                    </motion.div>
                  </motion.div>
                )
              })}

              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full border border-cyan/20" />
              <div className="absolute inset-8 rounded-full border border-purple/20" />
              <div className="absolute inset-16 rounded-full border border-emerald/20" />

              {/* Pulse effect */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-cyan/30"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm text-emerald mb-4">
                Security
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Enterprise-Grade</span>
                <br />
                <span className="gradient-text">Security & Privacy</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Your data is protected by multiple layers of cutting-edge security protocols and decentralized infrastructure.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-4 group hover:border-emerald/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0 group-hover:bg-emerald/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
