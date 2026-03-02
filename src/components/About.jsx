import React from 'react'
import { Target, Layers, Users } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: 'Hands-On Execution',
      description: 'We don\'t just advise—we roll up our sleeves and build alongside you.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Three-Stage Integration',
      description: 'From blueprint to launch to stabilization—a seamless, integrated approach.'
    },
    {
      icon: <Users size={24} />,
      title: 'Experienced Leadership',
      description: 'Decades of experience building and scaling businesses across industries.'
    }
  ]

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="about-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem',
          alignItems: 'center'
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
              About Us
            </p>
            <h2 style={{ marginBottom: '1.5rem' }}>
              Turning Vision Into Operational Reality
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Salem Advisory was founded on the belief that great ideas deserve expert execution. 
              Too many promising ventures fail not because the idea was wrong, but because the 
              operational foundation was weak.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              We bridge the gap between vision and reality, providing the structured approach, 
              experienced leadership, and disciplined execution that transforms ideas into 
              thriving businesses.
            </p>

            {/* Mission Box */}
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: '12px',
              borderLeft: '4px solid var(--primary)'
            }}>
              <h4 style={{ 
                fontSize: '1rem', 
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>
                Our Mission
              </h4>
              <p style={{ margin: 0, fontSize: '0.9375rem' }}>
                To be the trusted partner that turns entrepreneurial vision into operational 
                reality, ensuring new ventures not just launch, but stabilize and thrive.
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-white)',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(25, 41, 56, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '0.375rem',
                    color: 'var(--text-primary)'
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div style={{ marginTop: '5rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.75rem' }}>Who We Serve</h3>
          </div>
          
          <div className="who-we-serve-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '1.5rem' 
          }}>
            {[
              { title: 'Entrepreneurs & Founders', desc: 'Clear ideas that need operational execution' },
              { title: 'Institutional Sponsors', desc: 'Corporates and firms launching new ventures' },
              { title: 'Boards & Investors', desc: 'Protecting and stabilizing early investments' },
              { title: 'Leadership Teams', desc: 'Interim management for critical phases' }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ 
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)'
                }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About