import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import GlassmorphicCard from './ui/GlassmorphicCard';

function Portfolio() {
  const projects = [
    {
      url: 'https://images.unsplash.com/photo-1586423951975-ba24e359efc0',
      title: 'Residência Alphaville',
      type: 'Projeto Estrutural'
    },
    {
      url: 'https://images.unsplash.com/photo-1568201635633-989f64b31c57',
      title: 'Edifício Comercial',
      type: 'Gerenciamento'
    },
    {
      url: 'https://images.unsplash.com/photo-1552705906-b71478b161c6',
      title: 'Reforma Industrial',
      type: 'Consultoria'
    },
    {
      url: 'https://images.unsplash.com/photo-1587881699513-cc00ae764f52',
      title: 'Complexo Esportivo',
      type: 'Projeto Completo'
    },
    {
      url: 'https://images.unsplash.com/photo-1579895117575-57114c2f208a',
      title: 'Casa de Campo',
      type: 'Regularização'
    },
    {
      url: 'https://images.unsplash.com/photo-1614058427323-4959d1ddfe0b',
      title: 'Loft Urbano',
      type: 'Reforma'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFC107] font-semibold uppercase tracking-widest text-sm mb-2 block">Nosso Trabalho</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos Recentes
          </h2>
          <div className="w-20 h-1 bg-[#FFC107] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassmorphicCard className="h-80 !p-0 !rounded-2xl !bg-transparent group" hoverEffect={false}>
                <div className="relative w-full h-full overflow-hidden">
                  <motion.img
                    src={project.url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 filter brightness-75 group-hover:brightness-100"
                    whileHover={{ scale: 1.15 }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }} // This actually triggers on component view, ideally strictly on hover for these inner elements would be css based or AnimatePresence, but simple CSS transforms work best for hover states inside motion cards
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <div className="w-14 h-14 bg-[#FFC107] rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-[#FFC107]/30 hover:scale-110 transition-transform">
                        <Plus className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                        {project.title}
                      </h3>
                      <p className="text-[#FFC107] font-medium tracking-wide uppercase text-sm">
                        {project.type}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border-2 border-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;