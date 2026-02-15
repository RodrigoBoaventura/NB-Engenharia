import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import GlassmorphicCard from './ui/GlassmorphicCard';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      if (!formData.name || !formData.email || !formData.message) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFC107]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#FFC107] font-semibold uppercase tracking-widest text-sm mb-2 block">Fale Conosco</span>
            <h2 className="text-4xl font-bold mb-8">
              Vamos tirar seu projeto do papel?
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Entre em contato para solicitar um orçamento ou agendar uma consultoria técnica. Estamos prontos para atender você.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: 'Telefone / WhatsApp', text: '(11) 99999-9999' },
                { icon: Mail, title: 'Email', text: 'contato@nbengenharia.com.br' },
                { icon: MapPin, title: 'Localização', text: 'São Paulo - SP' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-black transition-colors duration-300 shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 group-hover:text-[#FFC107] transition-colors">{item.title}</h3>
                      <p className="text-gray-400">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12">
              <h4 className="font-bold mb-4 text-gray-300">Siga-nos nas redes sociais</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    className="bg-zinc-900 border border-zinc-800 hover:bg-[#FFC107] hover:text-black p-3 rounded-lg transition-all duration-300 shadow-md"
                    whileHover={{ y: -5, rotate: 5 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassmorphicCard className="p-8 md:p-12 !bg-zinc-900/60 !border-zinc-800">
              <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-zinc-900/95 z-20 flex flex-col items-center justify-center text-center rounded-lg"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h4>
                      <p className="text-gray-400">Retornaremos em breve.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {[
                  { label: 'Nome Completo', name: 'name', type: 'text', placeholder: 'Seu nome' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'seu@email.com' }
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-[#FFC107]">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-zinc-700 rounded focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] outline-none transition-all text-white peer"
                      placeholder={field.placeholder}
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-[#FFC107] w-0 peer-focus:w-full transition-all duration-500" />
                  </div>
                ))}

                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-[#FFC107]">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 rounded focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] outline-none transition-all resize-none text-white peer"
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                  <div className="absolute bottom-1.5 left-0 h-0.5 bg-[#FFC107] w-0 peer-focus:w-full transition-all duration-500" />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full font-bold py-6 text-lg rounded shadow-lg transition-all duration-300 relative overflow-hidden group
                    ${status === 'error' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-[#FFC107] hover:bg-[#FFD54F] text-black'}
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'submitting' ? 'Enviando...' : status === 'error' ? 'Erro ao enviar' : 'Enviar Mensagem'}
                    {status !== 'submitting' && status !== 'error' && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    {status === 'error' && <AlertCircle className="w-5 h-5" />}
                  </span>
                  
                  {/* Ripple Effect Container */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </form>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;