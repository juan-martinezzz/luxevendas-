import React, { useState, useEffect } from 'react';
import './App.css';

// Component imports
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Catalog from './components/Catalog';
import CustomCta from './components/CustomCta';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const WHATSAPP_NUMBER = '5511925431961'; // Centralized contact number

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.add('light-theme');
    } else {
      setIsDarkMode(true);
      document.body.classList.remove('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const nextDarkState = !isDarkMode;
    setIsDarkMode(nextDarkState);
    if (nextDarkState) {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleOrder = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  return (
    <>
      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsapp phoneNumber={WHATSAPP_NUMBER} />

      {/* Navigation Header */}
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        phoneNumber={WHATSAPP_NUMBER}
      />

      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Informative Process Section */}
        <Process />

        {/* Filterable Catalog Section */}
        <Catalog onOrder={handleOrder} />

        {/* Custom Project CTA Banner */}
        <CustomCta phoneNumber={WHATSAPP_NUMBER} />

        {/* Collapsible FAQ Section */}
        <Faq />
      </main>

      {/* Structured Footer */}
      <Footer phoneNumber={WHATSAPP_NUMBER} />

      {/* Interactive Form Modal */}
      {selectedTemplate && (
        <CheckoutModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedTemplate={selectedTemplate}
          phoneNumber={WHATSAPP_NUMBER}
        />
      )}
    </>
  );
}

export default App;
