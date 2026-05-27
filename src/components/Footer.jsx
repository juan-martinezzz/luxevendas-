import React from 'react';

const Footer = ({ phoneNumber = '5511999999999' }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand animate-fade-in">
            <a href="#" className="logo">
              <img src="/pixelluxe_logo.png" alt="PixelLuxe Logo" style={{ height: '32px', width: 'auto', borderRadius: '6px' }} />
              <span>Pixel</span>Luxe
            </a>
            <p className="footer-about">
              Desenvolvendo presença digital premium de forma altamente acessível, formal e transparente para negócios de todos os nichos comerciais.
            </p>
          </div>
          
          <div>
            <h3 className="footer-title">Navegação</h3>
            <ul className="footer-links">
              <li><a href="#home">Início</a></li>
              <li><a href="#templates">Modelos de Sites</a></li>
              <li><a href="#como-funciona">Como Funciona</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">Canais de Contato</h3>
            <ul className="footer-links">
              <li>
                <span style={{ fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  WhatsApp: (11) 92543-1961
                </span>
              </li>
              <li>
                <span style={{ fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  E-mail: contato@pixelluxe.com.br
                </span>
              </li>
              <li>
                <span style={{ fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  Atendimento: Seg. a Sex. das 9h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} PixelLuxe. Todos os direitos reservados.
          </p>
          
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="Instagram">IG</a>
            <a href="#" className="social-link" aria-label="Facebook">FB</a>
            <a href="#" className="social-link" aria-label="LinkedIn">LN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
