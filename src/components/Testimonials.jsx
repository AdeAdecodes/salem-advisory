import React from 'react'
import octagramLogo from '../assets/Octagram logo.jpeg'
import procurisLogo from '../assets/Procuris logo.png'

const Testimonials = () => {
  const clients = [
    { name: 'Procuris', src: procurisLogo, alt: 'Procuris' },
    { name: 'Octagram', src: octagramLogo, alt: 'Octagram', className: 'special-hover', style: { maxHeight: 180 } },
    { name: 'Amaanah', src: 'https://amaanahfinance.com/wp-content/uploads/2025/12/amaanah-logo.svg', alt: 'Amaanah' }
  ]

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <p style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.75rem'
          }}>
          </p>
          <h2>Our Clients</h2>
        </div>

        <div className="client-logo-grid">
          {clients.map((c) => (
            <a key={c.name} href="mailto:hello@salemadvisory.org" className="client-logo-link">
              <img 
                src={c.src} 
                alt={c.alt} 
                className={`client-logo-img ${c.className || ''}`}
                style={c.style}
              />
            </a>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Testimonials