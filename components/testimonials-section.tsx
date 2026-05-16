'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Blockchain Developer',
    avatar: 'AC',
    content: 'NebulaVault has completely changed how I think about cloud storage. The decentralized approach means I truly own my data, and the token rewards are a nice bonus!',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Digital Artist',
    avatar: 'SM',
    content: 'As an artist, protecting my work is crucial. The encryption and blockchain verification give me peace of mind that my creations are secure and traceable.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Startup Founder',
    avatar: 'DP',
    content: 'We migrated our entire company to NebulaVault. The cost savings compared to traditional cloud providers are incredible, plus we love the privacy-first approach.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Security Researcher',
    avatar: 'ER',
    content: 'From a security perspective, NebulaVault does everything right. Zero-knowledge encryption, decentralized storage, and audited smart contracts. This is how cloud storage should be.',
    rating: 5,
  },
  {
    name: 'Michael Foster',
    role: 'Crypto Enthusiast',
    avatar: 'MF',
    content: 'The staking rewards are amazing! I earn passive income just by participating in the network. Plus, my files are safer than ever.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-purple/5 to-cyan/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Loved by</span>{' '}
            <span className="gradient-text">Developers & Users</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our community has to say about their experience with NebulaVault.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="glass-strong rounded-3xl p-8 lg:p-12"
              >
                <Quote className="w-12 h-12 text-purple/30 mb-6" />
                
                <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan to-purple flex items-center justify-center text-lg font-bold">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                      <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-cyan/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-cyan to-purple'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-cyan/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
