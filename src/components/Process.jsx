import React from 'react';

const Process = () => {
  return (
    <section className="section-padding" id="como-funciona" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header animate-fade-in">
          <span className="section-tag">Processo Simples</span>
          <h2 className="section-title">Como funciona para ter seu site?</h2>
          <p className="section-subtitle">
            Criamos uma jornada rápida, transparente e intuitiva desenvolvida especialmente para empresários focarem no que realmente importa: suas vendas.
          </p>
        </div>

        <div className="process-grid">
          
          <div className="process-step animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="step-number">01</span>
            <div className="step-icon">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="step-title">Escolha o Layout</h3>
            <p className="step-description">
              Selecione o modelo base ideal para seu segmento de atuação (Joias, Roupas, Tênis, Acessórios) por apenas R$ 450,00 fixo.
            </p>
          </div>

          <div className="process-step animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="step-number">02</span>
            <div className="step-icon">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="step-title">Escolha o Banco de Dados</h3>
            <p className="step-description">
              Adicione suporte dinâmico a banco de dados por + R$ 400,00 adicionais para obter controle de estoque, produtos e área de login.
            </p>
          </div>

          <div className="process-step animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="step-number">03</span>
            <div className="step-icon">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="step-title">Site no Ar em 7 Dias</h3>
            <p className="step-description">
              Personalizamos o site com sua marca, logotipo e contatos, publicando tudo no seu domínio de forma rápida e segura!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
