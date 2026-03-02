import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
      paddingBottom: '4rem',
      background: 'linear-gradient(180deg, var(--primary) 0%, var(--primary-dark) 100%)'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '720px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Headline */}
          <h1 style={{ marginBottom: '1.5rem', color: ' سفید', color: '#FFFFFF' }}>
            We Build, Launch & Lead{' '}
            <span style={{ color: 'var(--accent)' }}>Your Business</span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2.5rem',
            lineHeight: '1.7'
          }}>
            Salem Advisory partners with entrepreneurs and institutions once the idea is clear.
            We design the operational backbone, execute the launch, and guide through the
            critical early stages until the business stabilizes.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)', padding: '1rem 2rem', fontSize: '1rem' }}
            >
              Start Your Project
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="btn"
              style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '1rem 2rem', fontSize: '1rem' }}
            >
              View Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="hero-stats" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--accent-2)',
                marginBottom: '0.25rem'
              }}>
                3-Stage
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                Integrated Process
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--accent-2)',
                marginBottom: '0.25rem'
              }}>
                End-to-End
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                Solution Delivery
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--accent-2)',
                marginBottom: '0.25rem'
              }}>
                Expert
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                Leadership Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero