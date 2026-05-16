'use client'

import { motion } from 'framer-motion'
import { Coins, TrendingUp, Lock, ShoppingCart, Gift, Repeat } from 'lucide-react'

const tokenFeatures = [
  {
    icon: Gift,
    title: 'Reward Distribution',
    description: 'Earn NVT tokens for storing files, providing storage, and participating in the network.',
  },
  {
    icon: Lock,
    title: 'Staking Benefits',
    description: 'Stake your tokens to earn up to 15% APY and unlock premium platform features.',
  },
  {
    icon: ShoppingCart,
    title: 'Storage Incentives',
    description: 'Use tokens to purchase storage at discounted rates or sell excess capacity.',
  },
  {
    icon: Repeat,
    title: 'Marketplace Transactions',
    description: 'All marketplace operations use NVT tokens for seamless peer-to-peer exchanges.',
  },
]

export function TokenEconomySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald/5 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm text-emerald mb-4">
                Token Economy
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Powered by the</span>
                <br />
                <span className="gradient-text">NVT Token</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                The NebulaVault Token (NVT) powers our entire ecosystem, enabling rewards, governance, and seamless transactions.
              </p>
            </motion.div>

            {/* Token stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                { label: 'Total Supply', value: '100M NVT' },
                { label: 'Circulating', value: '42M NVT' },
                { label: 'Staking APY', value: 'Up to 15%' },
                { label: 'Market Cap', value: '$125M' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold gradient-text">{stat.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <div className="space-y-4">
              {tokenFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 glass rounded-xl p-4 group hover:border-emerald/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0 group-hover:bg-emerald/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central token */}
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald via-cyan to-purple flex items-center justify-center glow-emerald">
                  <div className="w-36 h-36 rounded-full bg-background flex items-center justify-center">
                    <div className="text-center">
                      <Coins className="w-12 h-12 text-emerald mx-auto mb-2" />
                      <span className="text-2xl font-bold gradient-text">NVT</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting elements */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15 + i * 5,
                    repeat: Infinity,
                    ease: 'linear',
                    direction: i % 2 === 0 ? 'normal' : 'reverse',
                  }}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: `${200 + i * 60}px`,
                    height: `${200 + i * 60}px`,
                    marginLeft: `-${100 + i * 30}px`,
                    marginTop: `-${100 + i * 30}px`,
                  }}
                >
                  <div
                    className={`absolute w-12 h-12 rounded-xl glass flex items-center justify-center ${
                      i === 0 ? 'bg-cyan/10' : i === 1 ? 'bg-purple/10' : 'bg-emerald/10'
                    }`}
                    style={{ top: '0%', left: '50%', transform: 'translateX(-50%)' }}
                  >
                    {i === 0 && <TrendingUp className="w-5 h-5 text-cyan" />}
                    {i === 1 && <Lock className="w-5 h-5 text-purple" />}
                    {i === 2 && <Gift className="w-5 h-5 text-emerald" />}
                  </div>
                </motion.div>
              ))}

              {/* Price chart mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 glass rounded-xl p-4 hidden lg:block"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">NVT/USD</span>
                  <span className="text-xs text-emerald">+5.23%</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="w-2 rounded-t bg-gradient-to-t from-emerald/50 to-emerald"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
