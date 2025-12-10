'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    // Load Tally embed script
    const loadTallyScript = () => {
      const d = document
      const w = 'https://tally.so/widgets/embed.js'
      
      const initializeTally = () => {
        // Try to load embeds using Tally API
        if (typeof (window as any).Tally !== 'undefined' && (window as any).Tally.loadEmbeds) {
          (window as any).Tally.loadEmbeds()
        } else {
          // Fallback: manually set iframe src
          d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e) => {
            const iframe = e as HTMLIFrameElement
            const src = iframe.dataset.tallySrc
            if (src && !iframe.src) {
              iframe.src = src
            }
          })
        }
      }
      
      // Check if Tally is already loaded
      if (typeof (window as any).Tally !== 'undefined') {
        initializeTally()
      } else {
        // Check if script is already being loaded
        const existingScript = d.querySelector(`script[src="${w}"]`)
        if (!existingScript) {
          const s = d.createElement('script')
          s.src = w
          s.async = true
          s.onload = () => {
            // Wait a bit for Tally to initialize
            setTimeout(initializeTally, 100)
          }
          s.onerror = () => {
            // If script fails, use fallback
            initializeTally()
          }
          d.head.appendChild(s)
        } else {
          // Script exists, wait for it to load
          existingScript.addEventListener('load', initializeTally)
        }
      }
    }
    
    // Load immediately
    loadTallyScript()
    
    // Also try again after a short delay to catch any timing issues
    const timeoutId = setTimeout(loadTallyScript, 500)
    
    // Use IntersectionObserver to load form when it comes into view
    const formSection = document.getElementById('apply-form')
    if (formSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadTallyScript()
              observer.disconnect()
            }
          })
        },
        { rootMargin: '100px' }
      )
      observer.observe(formSection)
      
      return () => {
        clearTimeout(timeoutId)
        observer.disconnect()
      }
    }
    
    return () => clearTimeout(timeoutId)
  }, [])

  const scrollToForm = () => {
    const formSection = document.getElementById('apply-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-logo">
            <Image
              src="/boot-ads-nobg.png"
              alt="Boot Ads Logo"
              width={200}
              height={80}
              priority
              className="logo-image"
            />
          </div>
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">Let Local Businesses Pay Your Fuel Costs!</h1>
            <p className="hero-subtitle">
              A simple, minimal ad on your vehicle helps local businesses. You get paid monthly. It's that simple.
            </p>
            <div className="hero-cta-group">
              <button onClick={scrollToForm} className="cta-button-primary">
                Start Getting Paid
              </button>
              <Link href="/advertisers" className="cta-button-secondary">
                Become an Advertiser
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <Image
                src="/honda-hero-placeholder.jpg"
                alt="Car with Boot Ads sponsorship"
                width={1200}
                height={800}
                priority
                className="hero-car-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
            <div className="hero-trust-indicators">
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No contracts</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Easy removal</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Monthly payments</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="two-column-section">
        <div className="two-column-container">
          <div className="two-column-left">
            <h2 className="two-column-heading">A minimal ad on your boot</h2>
            <div className="minimal-features">
              <div className="feature-visual">
                <div className="feature-icon-wrapper">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-label">Small & Discreet</div>
              </div>
              <div className="feature-visual">
                <div className="feature-icon-wrapper">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-label">Easy Removal</div>
              </div>
              <div className="feature-visual">
                <div className="feature-icon-wrapper">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-label">Tasteful Design</div>
              </div>
            </div>
          </div>
          <div className="two-column-right">
            <div className="two-column-image">
              <Image
                src="/honda-hero-placeholder.jpg"
                alt="Car with Boot Ads sponsorship"
                width={1200}
                height={800}
                className="car-image-small"
              />
            </div>
            <h2 className="two-column-heading">Get paid up to 50% of your fuel costs*</h2>
            <div className="payment-process">
              <div className="process-step">
                <div className="process-icon-wrapper camera-flash">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 10H20C20.5304 10 21.0391 10.2107 21.4142 10.5858C21.7893 10.9609 22 11.4696 22 12V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="18" cy="8" r="1.5" fill="currentColor" opacity="0.9"/>
                    <path d="M18 6.5L19.5 5L18 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                  </svg>
                </div>
                <div className="process-label">Snap receipt</div>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="process-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="process-label">Send to us</div>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="process-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="process-label">Get reimbursed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="social-proof-container">
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">"</div>
            <p className="testimonial-text">
              I've been doing this for 6 months and it's covered half my fuel costs. Super easy!
            </p>
            <div className="testimonial-author">
              <div className="testimonial-author-name">Bianca</div>
              <div className="testimonial-author-location">Ku-Ring-Gai area</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply-form" className="form-section">
        <div className="form-section-header">
          <h2 className="form-section-title">Ready to Get Started?</h2>
          <p className="form-section-subtitle">Fill out the form below and we'll match you with local businesses in your area</p>
        </div>
        <div className="form-container">
          <div className="tally-form-wrapper">
            <iframe
              src="https://tally.so/embed/q4Ljd2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              data-tally-src="https://tally.so/embed/q4Ljd2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="1858"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Get Sponsored with Boot Ads"
            />
          </div>
        </div>
      </section>
    </>
  )
}

