import { AnimatedBackground } from '@/components/animated-background'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { SecuritySection } from '@/components/security-section'
import { MarketplaceSection } from '@/components/marketplace-section'
import { DashboardPreviewSection } from '@/components/dashboard-preview-section'
import { TokenEconomySection } from '@/components/token-economy-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PricingSection } from '@/components/pricing-section'
import { FAQSection } from '@/components/faq-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden grid-bg noise">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <MarketplaceSection />
      <DashboardPreviewSection />
      <TokenEconomySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
