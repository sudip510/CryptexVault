'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How does decentralized storage work?',
    answer: 'Decentralized storage distributes your files across multiple nodes in a global network. Instead of storing data in a single data center, your files are encrypted, split into pieces, and stored redundantly across thousands of independent nodes. This ensures high availability, censorship resistance, and eliminates single points of failure.',
  },
  {
    question: 'Is my data encrypted?',
    answer: 'Yes! All files are encrypted with AES-256 encryption before they leave your device. Only you hold the decryption keys, meaning even we cannot access your data. This zero-knowledge architecture ensures complete privacy and security.',
  },
  {
    question: 'What is IPFS/Filecoin?',
    answer: 'IPFS (InterPlanetary File System) is a peer-to-peer protocol for storing and sharing data in a distributed file system. Filecoin is a decentralized storage network built on top of IPFS that incentivizes storage providers with cryptocurrency. Together, they form the backbone of our decentralized storage infrastructure.',
  },
  {
    question: 'How do token rewards work?',
    answer: 'You earn NVT tokens by participating in the network. This includes storing files (you earn rewards for helping verify storage), providing storage space to others, staking your tokens, and referring new users. The more you participate, the more you earn!',
  },
  {
    question: 'Can I share files securely?',
    answer: 'Absolutely! You can share files with granular access controls. Create time-limited links, password-protected shares, or grant specific wallet addresses access to your files. All shares are tracked on the blockchain for transparency and can be revoked at any time.',
  },
  {
    question: 'What happens if a storage node goes offline?',
    answer: 'Your data is stored redundantly across multiple nodes. If one node goes offline, your files remain accessible from other nodes. Our network automatically replicates data to maintain redundancy levels, ensuring your files are always available.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply connect your Web3 wallet (MetaMask, WalletConnect, etc.), and you can start uploading files immediately. You get 5GB of free storage to try out the platform. No credit card required!',
  },
]

export function FAQSection() {
  return (
    <section id="docs" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple mb-4">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Frequently Asked</span>{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about NebulaVault.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* More help */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Still have questions?{' '}
              <a href="#" className="text-cyan hover:underline">
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
