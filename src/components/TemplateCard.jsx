import React from 'react';

const TemplateCard = ({ template, onOrder }) => {
  const { name, category, image, description, features, price } = template;

  return (
    <div className="template-card animate-fade-in">
      <div className="template-media">
        <span className="template-badge">{category}</span>
        <img src={image} alt={`${name} Layout Mockup`} className="template-image" />
      </div>
      <div className="template-info">
        <h3 className="template-title">{name}</h3>
        <p className="template-description">{description}</p>
        
        <div className="template-features">
          {features.map((feature, idx) => (
            <span key={idx} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="template-price-container">
          <span className="price-label">Preço do Layout</span>
          <span className="price-value">
            R$ {price.toFixed(0)}
            <small>,00</small>
          </span>
        </div>
        
        <div className="template-actions">
          <a 
            href={image} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            Ver Mockup
          </a>
          <button 
            className="btn btn-primary"
            onClick={() => onOrder(template)}
          >
            Quero Este
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
