import React from 'react'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Salem Advisory transformed our vision into a fully operational business. Their structured approach and hands-on leadership were exactly what we needed during our critical launch phase. I couldn't have asked for a better partner.",
      author: 'Olatunde Odeyale',
      position: 'CEO',
      company: 'Procuris International'
    }
  ]

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <p style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.75rem'
          }}>
            Client Success
          </p>
          <h2>What Our Clients Say</h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--bg-white)',
                borderRadius: '16px',
                padding: '3rem',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '3rem',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <Quote size={24} />
              </div>

              {/* Quote Text */}
              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.8',
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                marginBottom: '2rem',
                marginTop: '0.5rem'
              }}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '1.0625rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.author}
                  </h4>
                  <p style={{ 
                    margin: 0,
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div style={{ 
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            marginBottom: '1.5rem'
          }}>
            Trusted by ambitious entrepreneurs and forward-thinking organizations
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            opacity: 0.6
          }}>
            {['Startups', 'Corporates', 'Investors', 'Boards'].map((item, index) => (
              <span 
                key={index}
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-secondary)'
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials