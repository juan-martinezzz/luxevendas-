import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { img: '/assets/site_joias.png', alt: 'Template Aura Joias Mockup' },
    { img: '/assets/site_roupas.png', alt: 'Template Urban Thread Mockup' },
    { img: '/assets/site_tenis.png', alt: 'Template Sprint Sneakers Mockup' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000); // Roda automaticamente a cada 4 segundos

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        
        <div className="hero-content animate-fade-in">
          <span className="hero-tag">Design Exclusivo & Pronto Para Vender</span>
          <h1 className="hero-title">
            Seu negócio não é amador. <span className="highlight-text">Por que o seu site seria?</span>
          </h1>
          <p className="hero-description">
            Destaque-se no mercado com layouts modernos, ultra velozes e mobile-first. A solução definitiva para marcas de roupas, joias, calçados e acessórios que buscam um design que converte cliques em vendas.
          </p>
          <div className="hero-buttons">
            <a href="#templates" className="btn btn-primary">
              Ver Modelos Disponíveis
            </a>
            <a href="#custom-cta" className="btn btn-secondary">
              Criar Site Personalizado
            </a>
          </div>
          
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="trust-text">Sem Mensalidades</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="trust-text">Entrega em 7 Dias</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="trust-text">Suporte WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-carousel-container">
            <div className="hero-card-stack">
              {/* Layout 3D rotativo de demonstrações de templates premium */}
              {cards.map((card, i) => {
                const pos = (i - activeIndex + cards.length) % cards.length;
                return (
                  <div key={i} className={`hero-mockup-card pos-${pos}`}>
                    <img src={card.img} alt={card.alt} />
                  </div>
                );
              })}
            </div>
            
            <div className="hero-carousel-dots">
              {cards.map((_, i) => (
                <button 
                  key={i} 
                  className={`carousel-dot ${activeIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Ir para o slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
