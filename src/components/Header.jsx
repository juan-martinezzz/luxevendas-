import React, { useState, useEffect } from 'react';

const Header = ({ isDarkMode, toggleTheme, onOpenCustomCta, phoneNumber = '5511999999999' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const headerWhatsappUrl = `https://wa.me/${phoneNumber}?text=Olá!%20Visitei%20o%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20site%20profissional!`;

  return (
    <header className={`header-glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={closeMobileMenu}>
          <img src="/pixelluxe_logo.png" alt="PixelLuxe Logo" style={{ height: '36px', width: 'auto', borderRadius: '8px' }} />
          <span>Pixel</span>Luxe
        </a>

        <nav className="nav-links">
          <a href="#templates">Modelos</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#faq">FAQ</a>
          <a href="#custom-cta" className="btn btn-secondary" style={{ padding: '8px 16px' }}>
            Personalizado
          </a>
        </nav>

        <div className="header-actions">
          {/* Theme Toggle Switch */}
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro"
          >
            <svg viewBox="0 0 24 24">
              {isDarkMode ? (
                // Moon Icon
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              ) : (
                // Sun Icon
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              )}
            </svg>
          </button>

          {/* Quick Action Button */}
          <a 
            href={headerWhatsappUrl} 
            className="btn btn-primary" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            Chamar no WhatsApp
          </a>

          {/* Mobile Menu Icon */}
          <button 
            className="mobile-menu-btn" 
            onClick={handleMobileMenuToggle} 
            aria-label="Abrir menu de navegação"
          >
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <a href="#templates" onClick={closeMobileMenu}>Modelos de Sites</a>
          <a href="#como-funciona" onClick={closeMobileMenu}>Como Funciona</a>
          <a href="#faq" onClick={closeMobileMenu}>Perguntas Frequentes</a>
          <a 
            href="#custom-cta" 
            className="btn btn-secondary" 
            style={{ width: '100%' }} 
            onClick={closeMobileMenu}
          >
            Orçamento Personalizado
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
