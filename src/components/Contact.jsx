import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd6da63a2-cbe7-4ae6-8bab-09b731467057',
          to_email: 'hello@salemadvisory.org',
          from_name: formData.name,
          subject: `New Contact Form Submission from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We will be in touch soon.' 
        })
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or email us directly at hello@salemadvisory.org' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'hello@salemadvisory.org',
      link: 'mailto:hello@salemadvisory.org'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+234 806 754 3206',
      link: 'tel:+2348067543206'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Lagos, Nigeria',
      link: null
    }
  ]

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left Column */}
          <div>
            <p style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem'
            }}>
              Get In Touch
            </p>
            <h2 style={{ marginBottom: '1rem' }}>
              Ready to Build Your Vision?
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              Whether you're launching a new venture or need experienced leadership for a 
              critical phase, we're here to help. Let's discuss how Salem Advisory can 
              turn your vision into reality.
            </p>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(25, 41, 56, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ 
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.125rem'
                    }}>
                      {item.label}
                    </p>
                    {item.link ? (
                      <a 
                        href={item.link}
                        style={{
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: 'var(--text-primary)',
                          textDecoration: 'none'
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: 'var(--text-primary)'
                      }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: '12px'
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                color: 'var(--text-primary)'
              }}>
                Quick Actions
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a 
                  href="#services" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9375rem',
                    color: 'var(--primary)',
                    textDecoration: 'none'
                  }}
                >
                  <ArrowRight size={16} />
                  View Our Services
                </a>
                <a 
                  href="#about" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9375rem',
                    color: 'var(--primary)',
                    textDecoration: 'none'
                  }}
                >
                  <ArrowRight size={16} />
                  Learn About Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{
            backgroundColor: 'var(--bg-subtle)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label 
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-white)',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-white)',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="company"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-white)',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project or how we can help..."
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-white)',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: `1px solid ${status.type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                }}>
                  {status.type === 'success' ? (
                    <CheckCircle size={20} style={{ color: '#22c55e', flexShrink: 0 }} />
                  ) : (
                    <AlertCircle size={20} style={{ color: '#ef4444', flexShrink: 0 }} />
                  )}
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.9375rem',
                    color: status.type === 'success' ? '#166534' : '#991b1b'
                  }}>
                    {status.message}
                  </p>
                </div>
              )}

              <button 
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%',
                  marginTop: '0.5rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact