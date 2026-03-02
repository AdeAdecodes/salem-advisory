import React from 'react'
import { Mail, Phone, ArrowUp } from 'lucide-react'
import logname from '../assets/logname.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#benefits' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Operating Model Blueprint', href: '#services' },
    { name: 'Build & Launch PMO', href: '#services' },
    { name: 'General Management', href: '#services' }
  ]

  return (
    <footer style={{
      backgroundColor: 'var(--text-primary)',
      color: 'white',
      paddingTop: '4rem',
      paddingBottom: '1.5rem'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src={logname}
                alt="Salem Advisory Logo"
                style={{
                  height: '40px',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <p style={{
              fontSize: '0.9375rem',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '1.5rem',
              maxWidth: '280px'
            }}>
              Transforming entrepreneurial vision into operational reality.
              We build companies from the ground up.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="mailto:hello@salemadvisory.org"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9375rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
              >
                <Mail size={16} />
                hello@salemadvisory.org
              </a>
              <a
                href="tel:+2348067543206"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9375rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
              >
                <Phone size={16} />
                +234 806 754 3206
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1.25rem',
              color: 'white'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1.25rem',
              color: 'white'
            }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={service.href}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1.25rem',
              color: 'white'
            }}>
              Start Your Journey
            </h4>
            <p style={{
              fontSize: '0.9375rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}>
              Ready to turn your vision into reality?
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary)',
                color: 'white',
                borderRadius: '8px',
                fontSize: '0.9375rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease'
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.5rem'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 0
          }}>
            © {currentYear} Salem Advisory. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '6px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowUp size={16} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer