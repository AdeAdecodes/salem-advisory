import React from 'react'
import { Building2, Rocket, Shield, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Building2 size={28} />,
      title: 'Operating Model Blueprint',
      subtitle: 'Stage 1: Foundation',
      description: 'We design the complete operational architecture for your new venture—from organizational structure to core processes.',
      features: [
        'Organizational & governance design',
        'Process architecture & workflows',
        'Technology infrastructure planning',
        'Resource & capability mapping'
      ]
    },
    {
      icon: <Rocket size={28} />,
      title: 'Build & Launch PMO',
      subtitle: 'Stage 2: Execution',
      description: 'We establish and run the project management office that turns your blueprint into reality.',
      features: [
        'Project planning & execution',
        'Vendor & partner coordination',
        'Progress tracking & reporting',
        'Risk management & mitigation'
      ]
    },
    {
      icon: <Shield size={28} />,
      title: 'General Management Leadership',
      subtitle: 'Stage 3: Stabilization',
      description: 'We provide interim executive leadership to stabilize operations and guide your business through its critical early phase.',
      features: [
        'Interim CEO/COO leadership',
        'Team building & development',
        'Operations optimization',
        'Transition to permanent team'
      ]
    }
  ]

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
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
            Our Services
          </p>
          <h2>A Complete Company-Building Framework</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Three integrated stages designed to take your venture from concept to stable, 
            thriving business.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Stage Number Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                {index + 1}
              </div>

              {/* Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'rgba(61, 90, 128, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                {service.icon}
              </div>

              {/* Content */}
              <p style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.375rem'
              }}>
                {service.subtitle}
              </p>
              
              <h3 style={{ 
                fontSize: '1.25rem',
                marginBottom: '0.75rem',
                color: 'var(--text-primary)'
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                fontSize: '0.9375rem',
                marginBottom: '1.5rem',
                flex: 1
              }}>
                {service.description}
              </p>

              {/* Features List */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {service.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <ArrowRight size={14} style={{ color: 'var(--primary)' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="#contact" className="btn btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services