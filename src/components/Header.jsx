import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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
    backgroundColor: isScrolled || isMenuOpen ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
    backdropFilter: isScrolled || isMenuOpen ? 'blur(12px)' : 'none',
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
    transition: 'all 0.2s ease',
    width: 'auto',
    textAlign: 'left'
  }

  const mobileLinkStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    transition: 'all 0.2s ease',
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    borderBottom: '1px solid var(--border)',
    width: '100%',
    textAlign: 'left'
  }

  return (
    <header style={navStyle}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={logo} alt="Salem Advisory" style={{ height: 36, width: 'auto', display: 'block' }} />
          <div style={{ 
            fontSize: '1.375rem', 
            fontWeight: '600', 
            color: 'var(--primary)',
            letterSpacing: '-0.02em'
          }}>
            Salem Advisory
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem'
        }}>
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

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--text-primary)'
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav 
        className="mobile-nav"
        style={{
          display: isMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderBottom: '1px solid var(--border)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <button onClick={() => scrollToSection('hero')} style={mobileLinkStyle}>
          Home
        </button>
        <button onClick={() => scrollToSection('about')} style={mobileLinkStyle}>
          About
        </button>
        <button onClick={() => scrollToSection('services')} style={mobileLinkStyle}>
          Services
        </button>
        <button onClick={() => scrollToSection('benefits')} style={mobileLinkStyle}>
          Why Us
        </button>
        <button onClick={() => scrollToSection('testimonials')} style={mobileLinkStyle}>
          Testimonials
        </button>
        <div style={{ padding: '1rem 1.5rem' }}>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header