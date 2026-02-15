import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/Abaut';
import Services from '../components/Services';
import Portfolio from '../components/Portifolio';
import Differentials from '../components/Differentials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>NB Engenharia - Projetos e Consultoria em Engenharia Civil</title>
        <meta 
          name="description" 
          content="NB Engenharia oferece serviços de projetos estruturais, regularização de imóveis, gerenciamento de obras e consultoria técnica com excelência e qualidade." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Differentials />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default HomePage;