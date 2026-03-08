import React from 'react'
import octagramLogo from '../assets/Octagram logo.jpeg'
import procurisLogo from '../assets/Procuris logo.png'

const Testimonials = () => {
  const clients = [
    { name: 'Procuris', src: procurisLogo, alt: 'Procuris' },
    { name: 'Octagram', src: octagramLogo, alt: 'Octagram', className: 'special-hover', style: { maxHeight: 80 } },
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

        <div className="client-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'center' }}>
          {clients.map((c) => (
            <a key={c.name} href="mailto:hello@salemadvisory.org" className="client-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-white)', borderRadius: 12, padding: '1rem', boxShadow: 'var(--shadow-sm)', textDecoration: 'none' }}>
              <img 
                src={c.src} 
                alt={c.alt} 
                className={c.className || ''}
                style={{ 
                  maxHeight: c.style?.maxHeight || 56, 
                  maxWidth: '100%', 
                  objectFit: 'contain', 
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
                }} 
              />
            </a>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Testimonials