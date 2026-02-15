import React from 'react';
import { motion } from 'framer-motion';
import { Component, ScrollText, Building2, ClipboardCheck } from 'lucide-react';
import GlassmorphicCard from './ui/GlassmorphicCard';

function Services() {
  const services = [
    {
      icon: Component,
      title: 'Projetos Estruturais',
      description: 'Desenvolvimento de projetos estruturais em concreto armado e metálicas, garantindo segurança e otimização de materiais.'
    },
    {
      icon: ScrollText,
      title: 'Regularização de Imóveis',
      description: 'Assessoria completa para regularização de obras e imóveis junto aos órgãos competentes e prefeituras.'
    },
    {
      icon: Building2,
      title: 'Gerenciamento de Obras',
      description: 'Planejamento e controle físico-financeiro de obras, garantindo o cumprimento de prazos e orçamentos.'
    },
    {
      icon: ClipboardCheck,
      title: 'Consultoria Técnica',
      description: 'Vistorias, laudos técnicos e consultoria especializada para identificar patologias e soluções construtivas.'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFC107]/5 -skew-x-12 transform translate-x-20" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FFC107]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFC107] font-semibold uppercase tracking-widest text-sm mb-2 block">O Que Fazemos</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-[#FFC107] mx-auto rounded-full shadow-[0_0_10px_#FFC107]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassmorphicCard className="h-full p-8 flex flex-col items-center text-center !bg-zinc-900/50 hover:!bg-zinc-900/80">
                  <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-[#FFC107] blur-lg opacity-20 rounded-full" />
                    <div className="bg-zinc-800 w-16 h-16 rounded-xl flex items-center justify-center relative border border-white/10 group-hover:border-[#FFC107] transition-colors">
                      <Icon className="w-8 h-8 text-[#FFC107]" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#FFC107] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Technical decorative lines */}
                  <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#FFC107]/50" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[#FFC107]/50" />
                </GlassmorphicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;