'use client'

import { useEffect } from 'react'
import Image from 'next/image'

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
          <div className="hero-content">
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
            <h1 className="hero-title">Turn Your Daily Commute Into Cash</h1>
            <p className="hero-subtitle">
              Connect with local businesses. Apply a minimal ad to your vehicle. Get paid monthly. It's that simple.
            </p>
            <div className="hero-cta-group">
              <button onClick={scrollToForm} className="cta-button-primary">
                Apply Now
              </button>
              <button onClick={scrollToForm} className="cta-button-secondary">
                Learn More
              </button>
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
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="social-proof-container">
          <div className="proof-stats-single">
            <div className="proof-stat-card">
              <div className="stat-number">Up to 50%</div>
              <div className="stat-label">of our fuel costs*</div>
            </div>
          </div>

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

