import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ChevronRight } from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import AnimatedText from '../components/ui/AnimatedText';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4 pt-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 border border-[#FFC107]/50 bg-[#FFC107]/10 backdrop-blur-sm rounded-full text-[#FFC107] text-sm font-bold tracking-widest mb-6">
              ENGENHARIA CIVIL
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              NB <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] to-[#FFD54F]">Engenharia</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 font-light max-w-lg mx-auto md:mx-0 min-h-[4rem]">
              <AnimatedText 
                text="Transformando projetos em estruturas sólidas e funcionais com excelência técnica." 
                type="typing"
                delay={0.5}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="relative overflow-hidden bg-[#FFC107] text-black font-bold px-8 py-6 text-lg rounded shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all duration-300 group"
            >
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contato')}
              variant="outline"
              className="border-2 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10 px-8 py-6 text-lg rounded bg-transparent transition-all duration-300 backdrop-blur-sm"
            >
              Entrar em Contato
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: 90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
          className="md:w-1/2 relative hidden md:block perspective-1000"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-[#FFC107]/30 shadow-2xl shadow-[#FFC107]/10 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-20 pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2662&auto=format&fit=crop"
              alt="Projeto de Engenharia"
              className="w-full h-auto object-cover opacity-90"
            />
            
            {/* Tech overlay lines */}
            <div className="absolute inset-0 z-30 border-2 border-white/5 m-4 rounded-xl" />
            <div className="absolute bottom-8 right-8 z-30 flex flex-col items-end">
              <div className="w-16 h-1 bg-[#FFC107] mb-2" />
              <div className="w-8 h-1 bg-[#FFC107]/50" />
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-[#FFC107]/40 rounded-br-3xl" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-[#FFC107]/40 rounded-tl-3xl" 
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Role para baixo</span>
          <ChevronRight className="w-5 h-5 rotate-90 text-[#FFC107]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;