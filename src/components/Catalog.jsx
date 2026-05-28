import React, { useState } from 'react';
import TemplateCard from './TemplateCard';

const Catalog = ({ onOrder }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const templatesData = [
    {
      id: 1,
      name: "Site de Joias",
      categoryKey: "joias",
      category: "Joias & Semijoias",
      image: "/assets/site_joias.png",
      description: "Visual de luxo e extremo requinte. Destaca a sofisticação de anéis, colares e pedras preciosas com fundos limpos e tipografia fina.",
      features: ["Design Responsivo", "Carregamento Rápido", "Alta Conversão"],
      price: 450
    },
    {
      id: 2,
      name: "Site de Roupas",
      categoryKey: "roupas",
      category: "Roupas & Moda",
      image: "/assets/site_roupas.png",
      description: "Design contemporâneo, focado em imagens e estilo. Excelente para lojas de vestuário que desejam transmitir identidade forte e elegância.",
      features: ["Cores Customizáveis", "Mobile-First", "Navegação Fluida"],
      price: 450
    },
    {
      id: 3,
      name: "Site de Tênis",
      categoryKey: "tenis",
      category: "Tênis & Calçados",
      image: "/assets/site_tenis.png",
      description: "Esportivo de alto impacto com contrastes modernos e paletas energéticas. Ideal para calçados esportivos e marcas focadas em performance.",
      features: ["Design Moderno", "Fácil Edição", "Otimizado para SEO"],
      price: 450
    },
    {
      id: 4,
      name: "Site de Acessórios",
      categoryKey: "acessorios",
      category: "Acessórios",
      image: "/assets/site_acessorios.png",
      description: "Minimalista e clean, desenvolvido especialmente para ressaltar relógios, óculos de sol e carteiras de couro premium.",
      features: ["Layout Premium", "Foco em Detalhes", "WhatsApp Integrado"],
      price: 450
    },
    {
      id: 5,
      name: "Automação n8n",
      categoryKey: "automacao",
      category: "Automação Inteligente",
      image: "/assets/autoflow.png",
      description: "Plataforma profissional para automação de processos inteligentes. Desenvolvimento completo de WhatsApp Bot de atendimento e qualquer outro tipo de automação de fluxo de trabalho automatizado utilizando a poderosa ferramenta n8n.",
      features: ["WhatsApp Bot n8n", "Fluxos de Trabalho", "Processamento Inteligente"],
      price: 1500
    },
    {
      id: 6,
      name: "Sistema de Gestão Empresarial",
      categoryKey: "gestao",
      category: "Sistema de Gestão",
      image: "/assets/site_gestao.svg",
      description: "Sistema de gestão empresarial completo com controle de clientes, projetos, financeiro e relatórios avançados em tempo real.",
      features: ["Dashboard Integrado", "Gestão Financeira", "Relatórios Gerenciais"],
      price: 2500
    },
    {
      id: 7,
      name: "Controle de Estoque",
      categoryKey: "estoque",
      category: "Controle de Estoque",
      image: "/assets/site_estoque.svg",
      description: "Sistema de controle de estoque em tempo real com alertas automáticos, código de barras e gerenciamento de múltiplos armazéns.",
      features: ["Rastreamento Completo", "Alertas Automáticos", "Multi-Armazém"],
      price: 1800
    }
  ];

  const filterButtons = [
    { label: "Todos os Modelos", value: "all" },
    { label: "Joias & Semijoias", value: "joias" },
    { label: "Roupas & Moda", value: "roupas" },
    { label: "Tênis & Calçados", value: "tenis" },
    { label: "Acessórios", value: "acessorios" },
    { label: "Automação", value: "automacao" },
    { label: "Sistema de Gestão", value: "gestao" },
    { label: "Controle de Estoque", value: "estoque" }
  ];

  const filteredTemplates = activeFilter === 'all' 
    ? templatesData 
    : templatesData.filter(t => t.categoryKey === activeFilter);

  return (
    <section className="section-padding" id="templates">
      <div className="container">
        
        <div className="section-header animate-fade-in">
          <span className="section-tag">Catálogo Exclusivo</span>
          <h2 className="section-title">Soluções Digitais para Seu Negócio</h2>
          <p className="section-subtitle">
            Sites profissionais, sistemas de gestão e automação inteligente. Clique abaixo para filtrar entre templates e-commerce, soluções empresariais e sistemas de controle.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="filter-container animate-fade-in">
          {filterButtons.map((btn, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeFilter === btn.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid of Template Cards */}
        <div className="templates-grid">
          {filteredTemplates.map(template => (
            <TemplateCard 
              key={template.id} 
              template={template} 
              onOrder={onOrder} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Catalog;
