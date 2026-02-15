import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      review: 'Adorei o trabalho de maquiagem! A profissional é extremamente talentosa e atenciosa. Me senti linda e confiante no meu casamento.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      review: 'O design de sobrancelhas é perfeito! Finalmente encontrei um lugar que entende exatamente o que eu preciso. Super recomendo!',
      rating: 5
    },
    {
      name: 'Juliana Santos',
      review: 'A extensão de cílios ficou maravilhosa e muito natural. Já faz 3 semanas e ainda está perfeita. Atendimento impecável!',
      rating: 5
    },
    {
      name: 'Carla Oliveira',
      review: 'O tratamento de skincare superou minhas expectativas. Minha pele nunca esteve tão bonita e saudável. Produtos de altíssima qualidade!',
      rating: 5
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 justify-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section id="depoimentos" className="py-16 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            O que nossas clientes dizem sobre nós
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-white mb-4 leading-relaxed italic">
                "{testimonial.review}"
              </p>
              <p className="text-white font-bold text-center">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;