import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
    borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  }

  const linkStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9375rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'all 0.2s ease'
  }

  return (
    <header style={navStyle}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ 
          fontSize: '1.375rem', 
          fontWeight: '600', 
          color: 'var(--primary)',
          letterSpacing: '-0.02em'
        }}>
          Salem Advisory
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button onClick={() => scrollToSection('hero')} style={linkStyle}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} style={linkStyle}>
            About
          </button>
          <button onClick={() => scrollToSection('services')} style={linkStyle}>
            Services
          </button>
          <button onClick={() => scrollToSection('benefits')} style={linkStyle}>
            Why Us
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-primary"
            style={{ marginLeft: '0.5rem', padding: '0.625rem 1.25rem', fontSize: '0.9375rem' }}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header