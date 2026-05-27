import React, { useState, useEffect } from 'react';

const CheckoutModal = ({ isOpen, onClose, selectedTemplate, phoneNumber = '5511999999999' }) => {
  const [clientName, setClientName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [domainOption, setDomainOption] = useState('Sim, já possuo domínio próprio');
  const [wantsDb, setWantsDb] = useState(false);
  const [totalPrice, setTotalPrice] = useState(450);

  const BASE_PRICE = 450;
  const ADDON_PRICE = 400;

  useEffect(() => {
    if (wantsDb) {
      setTotalPrice(BASE_PRICE + ADDON_PRICE);
    } else {
      setTotalPrice(BASE_PRICE);
    }
  }, [wantsDb]);

  // Reset inputs when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setClientName('');
      setBrandName('');
      setDomainOption('Sim, já possuo domínio próprio');
      setWantsDb(false);
      setTotalPrice(BASE_PRICE);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clientName || !brandName) return;

    const dbText = wantsDb 
      ? "Sim (Com Banco de Dados e Registro de Produtos [+R$400])" 
      : "Não (Apenas o arquivo/layout do site)";

    const message = `Olá! Gostaria de encomendar meu site profissional na *PixelLuxe*.

*Resumo do Pedido:*
• *Modelo Escolhido:* ${selectedTemplate.name} (${selectedTemplate.category})
• *Nome do Cliente:* ${clientName}
• *Nome da Marca:* ${brandName}
• *Status do Domínio:* ${domainOption}
• *Integração com Banco de Dados:* ${dbText}

*Valor Total:* R$ ${totalPrice},00

Fico no aguardo para darmos início ao desenvolvimento do meu site!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={(e) => e.target.className === 'modal-overlay active' && onClose()}>
      <div className="modal-card">
        <div className="modal-header">
          <h3 className="modal-title">Garantir Layout: {selectedTemplate.name}</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fechar Modal">
            &times;
          </button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label className="form-label" htmlFor="clientName">Seu Nome Completo</label>
              <input 
                type="text" 
                className="form-input" 
                id="clientName" 
                placeholder="Ex: João Silva" 
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="brandName">Nome da sua Marca / Empresa</label>
              <input 
                type="text" 
                className="form-input" 
                id="brandName" 
                placeholder="Ex: Minha Loja Store" 
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="domainOption">Já possui um Domínio (Ex: sualoja.com.br)?</label>
              <select 
                className="form-input" 
                id="domainOption"
                value={domainOption}
                onChange={(e) => setDomainOption(e.target.value)}
              >
                <option value="Sim, já possuo domínio próprio">Sim, já possuo domínio próprio</option>
                <option value="Não, preciso de ajuda para registrar">Não, preciso de ajuda para registrar</option>
              </select>
            </div>
            
            {/* DATABASE UPSELL SWITCH */}
            <div className="addon-box">
              <div className="addon-info">
                <div className="addon-title">
                  Banco de Dados & Produtos
                  <span className="addon-badge">+ R$ 400</span>
                </div>
                <p className="addon-desc">Adiciona cadastro/controle dinâmico de produtos e painel de estoque.</p>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  id="dbAddonToggle" 
                  checked={wantsDb}
                  onChange={(e) => setWantsDb(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
            
            {/* DYNAMIC PRICE CALCULATION SUMMARY */}
            <div className="checkout-summary">
              <span className="summary-label">Valor Total Estimado:</span>
              <span className="summary-total">
                R$ {totalPrice.toFixed(0)}
                <small>,00</small>
              </span>
            </div>
            
            <button type="submit" className="btn btn-whatsapp" style={{ width: '100%' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.117-2.875-6.976C16.602 1.866 14.12 1.05 11.48 1.05 6.046 1.05 1.62 5.47 1.616 10.913c-.001 1.702.453 3.361 1.314 4.816L1.97 21.037l5.677-1.488zm12.357-6.666c-.302-.151-1.787-.882-2.063-.982-.277-.1-.478-.151-.68.151-.201.302-.781.982-.956 1.183-.175.201-.351.226-.653.076-.302-.151-1.274-.469-2.426-1.496-.897-.8-1.502-1.788-1.678-2.089-.175-.302-.019-.465.132-.615.136-.135.302-.351.453-.527.151-.176.201-.302.302-.503.101-.201.05-.377-.025-.527-.076-.151-.68-1.637-.932-2.247-.245-.591-.493-.51-.68-.52-.175-.01-.377-.01-.578-.01-.201 0-.527.076-.804.377-.277.302-1.057 1.03-1.057 2.512 0 1.483 1.082 2.915 1.232 3.116.151.2 2.13 3.251 5.16 4.561.721.311 1.282.497 1.721.637.724.23 1.383.197 1.903.12.58-.088 1.787-.73 2.038-1.432.252-.703.252-1.307.176-1.432-.076-.126-.277-.201-.579-.352z"/>
              </svg>
              Finalizar e Enviar no WhatsApp
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
