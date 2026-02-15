import React from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1601396253987-5a184958a04b',
      alt: 'Maquiagem profissional aplicada em cliente'
    },
    {
      url: 'https://images.unsplash.com/photo-1634449862841-8c6e970117e5',
      alt: 'Design de sobrancelhas perfeito'
    },
    {
      url: 'https://images.unsplash.com/photo-1601352351431-f0943b44bc4f',
      alt: 'Extensão de cílios volumosa'
    },
    {
      url: 'https://images.unsplash.com/photo-1601352231474-2d2f53d42bc7',
      alt: 'Resultado de tratamento de skincare'
    },
    {
      url: 'https://images.unsplash.com/photo-1674049406179-d7bf2c263e71',
      alt: 'Maquiagem artística para eventos'
    },
    {
      url: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c',
      alt: 'Lash lifting natural'
    },
    {
      url: 'https://images.unsplash.com/photo-1600634999623-864991678406',
      alt: 'Resultado de consultoria de beleza'
    }
  ];

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galeria
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;