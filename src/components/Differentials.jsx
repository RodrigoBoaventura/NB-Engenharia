import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Users, Clock, ShieldCheck } from 'lucide-react';

function Differentials() {
  const differentials = [
    {
      icon: Medal,
      title: 'Experiência Comprovada',
      description: 'Anos de atuação no mercado entregando projetos de alta complexidade.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Foco total nas necessidades específicas de cada cliente e projeto.'
    },
    {
      icon: Clock,
      title: 'Cumprimento de Prazos',
      description: 'Rigor absoluto com o cronograma estabelecido para sua obra.'
    },
    {
      icon: ShieldCheck,
      title: 'Qualidade Técnica',
      description: 'Utilização das melhores práticas e normas técnicas vigentes.'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-[#FFC107]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Por que escolher a NB Engenharia?
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto">
            Nosso compromisso vai além da entrega do projeto, focamos na excelência e na satisfação total.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 rounded-lg border border-black/10 hover:bg-black/5 transition-colors"
              >
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-[#FFC107]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-black/80 font-medium">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Differentials;