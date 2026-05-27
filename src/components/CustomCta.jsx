import React from 'react';

const CustomCta = ({ phoneNumber = '5511999999999' }) => {
  const customOrderUrl = `https://wa.me/${phoneNumber}?text=Olá!%20Visitei%20o%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20projeto%20de%20site%20personalizado%20para%20o%20meu%20nicho%20de%20negócio!`;

  return (
    <section className="section-padding" id="custom-cta" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="custom-cta-card animate-fade-in">
          <div className="cta-text-content">
            <span className="cta-badge">Site Personalizado</span>
            <h2 className="cta-title">Não encontrou o seu segmento na lista?</h2>
            <p className="cta-description">
              Sem problemas! Nós desenvolvemos layouts sob medida e exclusivos para o seu nicho comercial específico. Converse conosco no WhatsApp para criarmos um projeto premium sob demanda.
            </p>
            <div className="cta-buttons">
              <a 
                href={customOrderUrl} 
                className="btn btn-whatsapp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Falar no WhatsApp e Criar Site Sob Medida
              </a>
            </div>
          </div>
          
          <div className="cta-visual">
            <div className="cta-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCta;
