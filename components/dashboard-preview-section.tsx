'use client'

import { motion } from 'framer-motion'
import { 
  Folder, 
  Upload, 
  BarChart3, 
  Coins, 
  HardDrive,
  FileText,
  Image,
  Video,
  Music,
  Archive
} from 'lucide-react'

export function DashboardPreviewSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-background to-cyan/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-cyan mb-4">
            Dashboard Preview
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Powerful & Intuitive</span>
            <br />
            <span className="gradient-text">File Management</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A modern dashboard designed for seamless decentralized storage management.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Browser frame */}
          <div className="glass-strong rounded-2xl overflow-hidden border border-border/50">
            {/* Browser toolbar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-muted/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-muted/50 rounded-lg px-4 py-1.5 text-xs text-muted-foreground text-center">
                  app.nebulavault.io/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 bg-background/50">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="space-y-4">
                  {/* Storage usage */}
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Storage Used</span>
                      <span className="text-xs text-muted-foreground">75%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-cyan to-purple rounded-full"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">750 GB / 1 TB</p>
                  </div>

                  {/* Quick stats */}
                  <div className="glass rounded-xl p-4 space-y-3">
                    {[
                      { icon: FileText, label: 'Documents', count: '234' },
                      { icon: Image, label: 'Images', count: '1,892' },
                      { icon: Video, label: 'Videos', count: '56' },
                      { icon: Music, label: 'Audio', count: '423' },
                      { icon: Archive, label: 'Archives', count: '89' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-muted-foreground" />
                          <span>{item.label}</span>
                        </div>
                        <span className="text-muted-foreground">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main content area */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Folder, label: 'Total Files', value: '2,694', color: 'cyan' },
                      { icon: Coins, label: 'Tokens Earned', value: '1,250 NVT', color: 'purple' },
                      { icon: HardDrive, label: 'Storage Saved', value: '$45.80', color: 'emerald' },
                    ].map((stat) => (
                      <div key={stat.label} className="glass rounded-xl p-4">
                        <stat.icon 
                          className="w-5 h-5 mb-2" 
                          style={{ color: stat.color === 'cyan' ? '#00d4ff' : stat.color === 'purple' ? '#a855f7' : '#34d399' }}
                        />
                        <p className="text-xl font-bold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Upload area */}
                  <div className="glass rounded-xl p-6 border-2 border-dashed border-cyan/30 text-center">
                    <Upload className="w-10 h-10 text-cyan mx-auto mb-3" />
                    <p className="font-medium mb-1">Drop files to upload</p>
                    <p className="text-sm text-muted-foreground">or click to browse</p>
                  </div>

                  {/* Recent files */}
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Recent Files</h3>
                      <span className="text-xs text-cyan cursor-pointer">View all</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: 'presentation.pdf', size: '4.2 MB', time: '2 min ago', icon: FileText },
                        { name: 'vacation-photo.jpg', size: '2.8 MB', time: '15 min ago', icon: Image },
                        { name: 'project-backup.zip', size: '156 MB', time: '1 hour ago', icon: Archive },
                      ].map((file) => (
                        <div key={file.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                              <file.icon className="w-5 h-5 text-cyan" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">{file.size}</p>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{file.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass rounded-xl p-4 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald/20 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-emerald" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Monthly Savings</p>
                <p className="font-bold text-emerald">+23.5%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass rounded-xl p-4 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center">
                <Coins className="w-4 h-4 text-purple" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Rewards Pending</p>
                <p className="font-bold text-purple">250 NVT</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
