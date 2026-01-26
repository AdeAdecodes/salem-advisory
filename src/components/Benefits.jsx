import React from 'react'
import { CheckCircle, Clock, TrendingUp, Shield, Users, Lightbulb } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: <CheckCircle size={24} />,
      title: 'Reduced Execution Risk',
      description: 'Structured processes and experienced oversight dramatically reduce the chance of costly missteps.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Faster Time to Market',
      description: 'Our proven frameworks accelerate the journey from concept to operational business.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Scalable Foundation',
      description: 'Build on an operating model designed for growth, not just launch.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Protected Investment',
      description: 'Professional management ensures your capital is deployed wisely and monitored closely.'
    },
    {
      icon: <Users size={24} />,
      title: 'Knowledge Transfer',
      description: 'We build your team\'s capabilities, not just your company, for long-term independence.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Strategic Clarity',
      description: 'Clear governance and decision frameworks keep everyone aligned and moving forward.'
    }
  ]

  return (
    <section id="benefits" className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
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
            Why Salem Advisory
          </p>
          <h2>The Value We Deliver</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            When you partner with Salem Advisory, you gain more than consulting—you gain 
            a committed team invested in your success.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }}>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              style={{
                padding: '1.75rem',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: '12px',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: 'rgba(61, 90, 128, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1rem'
              }}>
                {benefit.icon}
              </div>
              
              <h4 style={{ 
                fontSize: '1.0625rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>
                {benefit.title}
              </h4>
              
              <p style={{ 
                margin: 0, 
                fontSize: '0.9375rem',
                lineHeight: '1.6'
              }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
          borderRadius: '16px',
          color: 'white'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            textAlign: 'center'
          }}>
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '20+', label: 'Years Experience' },
              { number: '15+', label: 'Industries Served' }
            ].map((stat, index) => (
              <div key={index}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  opacity: 0.9
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits