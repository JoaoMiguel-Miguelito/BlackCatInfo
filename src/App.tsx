import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // Update the document title
  useEffect(() => {
    document.title = 'BlackCatInfo - Soluções em Tecnologia';
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-montserrat">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;