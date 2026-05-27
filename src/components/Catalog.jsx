import React, { useState } from 'react';
import TemplateCard from './TemplateCard';

const Catalog = ({ onOrder }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const templatesData = [
    {
      id: 1,
      name: "Aura Joias",
      categoryKey: "joias",
      category: "Joias & Semijoias",
      image: "/assets/site_joias.png",
      description: "Visual de luxo e extremo requinte. Destaca a sofisticação de anéis, colares e pedras preciosas com fundos limpos e tipografia fina.",
      features: ["📱 Responsivo", "⚡ Carregamento Veloz", "⭐ Alta Conversão"],
      price: 450
    },
    {
      id: 2,
      name: "Urban Thread",
      categoryKey: "roupas",
      category: "Roupas & Moda",
      image: "/assets/site_roupas.png",
      description: "Design contemporâneo, focado em imagens e estilo. Excelente para lojas de vestuário que desejam transmitir identidade forte e elegância.",
      features: ["🎨 Cores Customizáveis", "📱 Mobile-First", "🛒 Prático e Limpo"],
      price: 450
    },
    {
      id: 3,
      name: "Sprint Sneakers",
      categoryKey: "tenis",
      category: "Tênis & Calçados",
      image: "/assets/site_tenis.png",
      description: "Esportivo de alto impacto com contrastes modernos e paletas energéticas. Ideal para calçados esportivos e marcas focadas em performance.",
      features: ["🔥 Design Fluido", "⚙️ Fácil Edição", "⚡ Otimizado SEO"],
      price: 450
    },
    {
      id: 4,
      name: "Luxor Acessórios",
      categoryKey: "acessorios",
      category: "Acessórios",
      image: "/assets/site_acessorios.png",
      description: "Minimalista e clean, desenvolvido especialmente para ressaltar relógios, óculos de sol e carteiras de couro premium.",
      features: ["💼 Visual Premium", "🔍 Foco em Detalhes", "✉️ WhatsApp Integrado"],
      price: 450
    }
  ];

  const filterButtons = [
    { label: "Todos os Modelos", value: "all" },
    { label: "Joias & Semijoias", value: "joias" },
    { label: "Roupas & Moda", value: "roupas" },
    { label: "Tênis & Calçados", value: "tenis" },
    { label: "Acessórios", value: "acessorios" }
  ];

  const filteredTemplates = activeFilter === 'all' 
    ? templatesData 
    : templatesData.filter(t => t.categoryKey === activeFilter);

  return (
    <section className="section-padding" id="templates">
      <div className="container">
        
        <div className="section-header animate-fade-in">
          <span className="section-tag">Catálogo Exclusivo</span>
          <h2 className="section-title">Encontre o design ideal para o seu negócio</h2>
          <p className="section-subtitle">
            Sites velozes, responsivos e com visualização limpa e focada. Clique abaixo para filtrar e garantir o seu modelo profissional.
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
