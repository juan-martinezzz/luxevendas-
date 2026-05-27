import React, { useState } from 'react';

const Faq = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const faqData = [
    {
      question: "O que está incluso no valor de R$ 450,00?",
      answer: "Você recebe o arquivo completo do site (frontend) totalmente estruturado, responsivo e adaptado com o logotipo da sua marca, paleta de cores corporativa e suas informações de contato primárias. O site é leve, veloz e otimizado de ponta a ponta."
    },
    {
      question: "Como funciona o opcional de Banco de Dados (+ R$ 400,00)?",
      answer: "Caso queira gerenciar seu site de forma dinâmica (cadastrando produtos, atualizando estoque, modificando preços de forma fácil em um painel administrativo seguro ou permitindo login de clientes), nós integramos um banco de dados robusto e um painel de controle administrativo simplificado."
    },
    {
      question: "Eu preciso pagar mensalidades pelo uso do site?",
      answer: "Não! Após a entrega do código-fonte e dos arquivos, o site é integralmente seu. Não cobramos mensalidades, licenças ou taxas de manutenção recorrentes. Seus únicos custos fixos de internet serão com o registro anual do seu domínio (.com.br) e o servidor de hospedagem que escolher."
    },
    {
      question: "Vocês ajudam a colocar o site no ar?",
      answer: "Sim! Damos total suporte na contratação do melhor servidor de hospedagem e no registro do seu domínio oficial. Configuramos as chaves de DNS e publicamos o site na web para que ele fique ativo no seu endereço próprio."
    }
  ];

  const handleToggle = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <section className="section-padding" id="faq" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header animate-fade-in">
          <span className="section-tag">Dúvidas Frequentes</span>
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Respostas formais e diretas para as principais dúvidas sobre o processo de aquisição e publicação do seu site.
          </p>
        </div>

        <div className="faq-container">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeFaqIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question-btn" 
                onClick={() => handleToggle(index)}
              >
                {item.question}
                <span className="faq-icon-arrow">▼</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
