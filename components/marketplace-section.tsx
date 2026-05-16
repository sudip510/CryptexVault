'use client'

import { motion } from 'framer-motion'
import { HardDrive, Coins, Zap, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const marketplaceListings = [
  {
    provider: 'Node Alpha',
    storage: '500 GB',
    price: '0.002 ETH/month',
    uptime: '99.99%',
    rewards: '+5% bonus',
    status: 'Premium',
  },
  {
    provider: 'DataVault Pro',
    storage: '1 TB',
    price: '0.004 ETH/month',
    uptime: '99.95%',
    rewards: '+8% bonus',
    status: 'Verified',
  },
  {
    provider: 'CloudNode X',
    storage: '2 TB',
    price: '0.007 ETH/month',
    uptime: '99.98%',
    rewards: '+12% bonus',
    status: 'Elite',
  },
  {
    provider: 'SecureStore',
    storage: '250 GB',
    price: '0.001 ETH/month',
    uptime: '99.90%',
    rewards: '+3% bonus',
    status: 'Standard',
  },
]

export function MarketplaceSection() {
  return (
    <section id="marketplace" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple mb-4">
            Storage Marketplace
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Buy, Sell & Earn with</span>
            <br />
            <span className="gradient-text">Decentralized Storage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join the peer-to-peer storage economy. Rent unused space, buy capacity, or earn tokens.
          </p>
        </motion.div>

        {/* Marketplace stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: HardDrive, label: 'Total Storage', value: '50 PB+' },
            { icon: Coins, label: 'Tokens Earned', value: '2.5M NVT' },
            { icon: Zap, label: 'Active Nodes', value: '12,500+' },
            { icon: TrendingUp, label: 'Avg. APY', value: '12.5%' },
          ].map((stat, index) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <stat.icon className="w-6 h-6 text-purple mx-auto mb-2" />
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Marketplace listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketplaceListings.map((listing, index) => (
            <motion.div
              key={listing.provider}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:border-purple/30 hover:shadow-lg hover:shadow-purple/10 hover:-translate-y-1 relative overflow-hidden">
                {/* Status badge */}
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${
                  listing.status === 'Elite' ? 'bg-emerald/20 text-emerald' :
                  listing.status === 'Premium' ? 'bg-cyan/20 text-cyan' :
                  listing.status === 'Verified' ? 'bg-purple/20 text-purple' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {listing.status}
                </div>

                {/* Provider */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-cyan flex items-center justify-center">
                    <HardDrive className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{listing.provider}</p>
                    <p className="text-xs text-muted-foreground">Uptime: {listing.uptime}</p>
                  </div>
                </div>

                {/* Storage & Price */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Storage</span>
                    <span className="font-semibold">{listing.storage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price</span>
                    <span className="font-semibold text-cyan">{listing.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Rewards</span>
                    <span className="font-semibold text-emerald">{listing.rewards}</span>
                  </div>
                </div>

                {/* Action button */}
                <Button 
                  variant="outline" 
                  className="w-full border-purple/30 hover:bg-purple/10 hover:border-purple text-sm"
                >
                  Rent Storage
                </Button>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1), transparent 70%)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-gradient-to-r from-purple to-cyan text-white glow-purple">
            Explore Full Marketplace
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
