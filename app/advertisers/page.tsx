import Link from 'next/link'
import Image from 'next/image'

export default function AdvertisersPage() {
  return (
    <div className="advertisers-page">
      {/* Hero Section */}
      <section className="advertisers-hero">
        <div className="advertisers-hero-container">
          <div className="advertisers-hero-content">
            <Link href="/" className="back-link">
              ← Back to Home
            </Link>
            <div className="advertisers-logo">
              <Image
                src="/boot-ads-nobg.png"
                alt="Boot Ads Logo"
                width={200}
                height={80}
                priority
                className="logo-image"
              />
            </div>
            <h1 className="advertisers-title">Become an Advertiser</h1>
            <p className="advertisers-subtitle">
              Reach local customers where they live, work, and drive. Put your brand on vehicles in your community.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="advertisers-benefits">
        <div className="benefits-container">
          <h2 className="benefits-title">Why Boot Ads?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚗</div>
              <h3 className="benefit-heading">Local Reach</h3>
              <p className="benefit-text">
                Your ads travel through your target neighborhoods, reaching customers where they live and work.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3 className="benefit-heading">Cost Effective</h3>
              <p className="benefit-text">
                Get more visibility for less cost than traditional advertising methods.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3 className="benefit-heading">Targeted</h3>
              <p className="benefit-text">
                Choose specific areas and routes to reach your ideal customers.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✨</div>
              <h3 className="benefit-heading">Minimal & Tasteful</h3>
              <p className="benefit-text">
                Small, professional ads that don't compromise vehicle aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="pricing-comparison">
        <div className="pricing-container">
          <h2 className="pricing-title">The Smart Choice</h2>
          <div className="comparison-grid">
            <div className="comparison-card traditional">
              <div className="comparison-header">
                <h3 className="comparison-heading">Traditional Vehicle Wrap</h3>
                <div className="comparison-price">$6,000 - $12,000</div>
                <div className="comparison-subtitle">per vehicle</div>
              </div>
              <ul className="comparison-features">
                <li className="comparison-item">❌ High upfront cost</li>
                <li className="comparison-item">❌ Limited to one vehicle</li>
                <li className="comparison-item">❌ Pay regardless of visibility</li>
                <li className="comparison-item">❌ Long-term commitment</li>
              </ul>
            </div>
            <div className="comparison-card boot-ads">
              <div className="comparison-badge">Better Value</div>
              <div className="comparison-header">
                <h3 className="comparison-heading">Boot Ads</h3>
                <div className="comparison-price">A Fraction of the Cost</div>
                <div className="comparison-subtitle">rent space on multiple vehicles</div>
              </div>
              <ul className="comparison-features">
                <li className="comparison-item">✅ Rent eye-catching space on as many cars as you want</li>
                <li className="comparison-item">✅ Only pay if cars are on the road catching eyeballs</li>
                <li className="comparison-item">✅ Scale up or down easily</li>
                <li className="comparison-item">✅ No long-term commitment</li>
              </ul>
            </div>
          </div>
          <div className="pricing-highlight">
            <p className="pricing-highlight-text">
              Boot Ads lets you rent the most eye-catching space on as many cars as you want for a fraction of the price.
            </p>
            <p className="pricing-highlight-text-bold">
              And you only pay if the cars are on the road catching eyeballs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="advertisers-cta">
        <div className="advertisers-cta-container">
          <h2 className="advertisers-cta-title">Ready to Get Started?</h2>
          <p className="advertisers-cta-text">
            Contact us to learn more about advertising opportunities in your area.
          </p>
          <a href="mailto:hello@bootads.com" className="cta-button-primary">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

