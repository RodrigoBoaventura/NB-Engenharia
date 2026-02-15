import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Sobre', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Portfólio', id: 'portfolio' },
    { name: 'Diferenciais', id: 'diferenciais' },
    { name: 'Contato', id: 'contato' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 shadow-2xl backdrop-blur-lg ' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Enhanced Branding Section */}
          <div 
            className="flex items-center gap-4 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <img
                src="https://horizons-cdn.hostinger.com/d8dc04e3-73ce-41b1-ab31-717e0da1ee36/9af56d58647c7f0a773d1bd4557bf621.jpg"
                alt="NB Engenharia Logo"
                className={`object-contain border-black/10 transition-all duration-500 ${
                  isScrolled ? 'w-16 h-9' : 'w-16 h-9'
                } group-hover:border-[#FFC107] group-hover:shadow-[0_0_15px_rgba(255,193,7,0.5)]`}
              />
              <div className="absolute inset-0 bg-[#FFC107]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="flex flex-col">
              <span className={`font-black tracking-tighter text-white transition-all duration-500 leading-none ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>
                NB <span className="text-[#FFC107]">ENGENHARIA</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-white/90 hover:text-white font-bold transition-colors duration-300 text-sm uppercase tracking-[0.15em] group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFC107] transition-all duration-300 group-hover:w-full box-shadow-[0_0_8px_#FFC107]" />
              </button>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              onClick={() => scrollToSection('contato')}
              className="relative overflow-hidden bg-[#FFC107] text-black font-black px-8 py-6 rounded-md shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[#FFC107]/40 uppercase tracking-wider text-sm group"
            >
              <span className="relative z-10">Entrar em Contato</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-3 text-[#FFC107] hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden fixed inset-0 top-[80px] z-40 bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <nav className="flex flex-col gap-6 p-8">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-[#FFC107] font-black text-left py-4 border-b border-white/5 text-2xl uppercase tracking-widest"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <Button
                  onClick={() => scrollToSection('contato')}
                  className="bg-[#FFC107] hover:bg-[#FFD54F] text-black font-black px-6 py-6 rounded-md mt-6 w-full text-xl shadow-2xl"
                >
                  Falar com Especialista
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;