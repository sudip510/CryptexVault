'use client'

import { motion } from 'framer-motion'
import { 
  Lock, 
  Cloud, 
  LinkIcon, 
  Coins, 
  Share2, 
  Store, 
  Wallet, 
  Brain, 
  Layers 
} from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: 'End-to-End Encrypted Uploads',
    description: 'Your files are encrypted before they leave your device, ensuring complete privacy.',
    gradient: 'from-cyan to-cyan/50',
  },
  {
    icon: Cloud,
    title: 'Decentralized Storage with IPFS/Filecoin',
    description: 'Files are distributed across a global network of nodes for maximum redundancy.',
    gradient: 'from-purple to-purple/50',
  },
  {
    icon: LinkIcon,
    title: 'Blockchain-Based Ownership',
    description: 'Cryptographic proof of ownership secured on the blockchain.',
    gradient: 'from-emerald to-emerald/50',
  },
  {
    icon: Coins,
    title: 'Token Incentive Rewards',
    description: 'Earn tokens for contributing storage space and network participation.',
    gradient: 'from-pink to-pink/50',
  },
  {
    icon: Share2,
    title: 'Secure File Sharing',
    description: 'Share files with granular permissions and time-limited access links.',
    gradient: 'from-cyan to-purple',
  },
  {
    icon: Store,
    title: 'Storage Marketplace',
    description: 'Buy, sell, or rent storage space in our decentralized marketplace.',
    gradient: 'from-purple to-emerald',
  },
  {
    icon: Wallet,
    title: 'Wallet Authentication',
    description: 'Secure, passwordless authentication using your Web3 wallet.',
    gradient: 'from-emerald to-cyan',
  },
  {
    icon: Brain,
    title: 'AI-Powered Organization',
    description: 'Smart file categorization and search powered by machine learning.',
    gradient: 'from-pink to-purple',
  },
  {
    icon: Layers,
    title: 'Multi-Chain Support',
    description: 'Compatible with Ethereum, Polygon, Arbitrum, and more chains.',
    gradient: 'from-cyan to-pink',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-sm text-cyan mb-4"
          >
            Features
          </motion.span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Everything You Need for</span>
            <br />
            <span className="gradient-text">Secure Decentralized Storage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Built with cutting-edge Web3 technology to give you complete control over your data.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 transition-all duration-300 hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/10 hover:-translate-y-1">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/0 to-purple/0 group-hover:from-cyan/5 group-hover:to-purple/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
