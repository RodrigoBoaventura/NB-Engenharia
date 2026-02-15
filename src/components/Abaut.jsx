import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Home, HardHat } from 'lucide-react';
import GlassmorphicCard from '../components/ui/GlassmorphicCard';
import AnimatedText from '../components/ui/AnimatedText';

function About() {
  const specializations = [
    {
      icon: Ruler,
      title: 'Estruturas',
      description: 'Cálculo e dimensionamento estrutural com precisão e segurança.'
    },
    {
      icon: Home,
      title: 'Projetos Residenciais',
      description: 'Planejamento completo para transformar sonhos em lares seguros.'
    },
    {
      icon: HardHat,
      title: 'Acompanhamento',
      description: 'Supervisão técnica rigorosa em todas as etapas da obra.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 1 }}
                className="h-1 bg-[#FFC107]"
              />
              <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Quem Somos</span>
            </div>
            
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Excelência e Inovação em <span className="text-[#FFC107] underline decoration-4 decoration-[#FFC107]/30 underline-offset-4">Engenharia Civil</span>
            </h2>
            
            <div className="text-lg text-gray-600 mb-6 leading-relaxed">
              <AnimatedText 
                text="A NB Engenharia destaca-se no mercado pela busca constante da excelência técnica e satisfação dos clientes. Com anos de experiência no setor, nossa missão é entregar soluções de engenharia que aliam segurança, funcionalidade e estética."
                type="fade"
              />
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa equipe é formada por profissionais altamente qualificados, prontos para atender desde pequenas reformas até grandes empreendimentos, sempre com o compromisso de qualidade e cumprimento de prazos.
            </p>
            
            <GlassmorphicCard className="!bg-white !border-gray-200 !shadow-lg p-6 hover:!bg-gray-50">
              <div className="border-l-4 border-[#FFC107] pl-4">
                <p className="italic text-gray-700 font-medium">
                  "Construir não é apenas erguer paredes, é materializar sonhos com responsabilidade e técnica apurada."
                </p>
              </div>
            </GlassmorphicCard>
          </motion.div>

          <div className="grid gap-6">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <GlassmorphicCard className="!bg-white !border-gray-100 hover:!border-[#FFC107]/30 flex items-center gap-6 p-6">
                    <div className="bg-black p-4 rounded-lg text-[#FFC107] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{spec.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{spec.description}</p>
                    </div>
                  </GlassmorphicCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;