import React from 'react';
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="https://horizons-cdn.hostinger.com/d8dc04e3-73ce-41b1-ab31-717e0da1ee36/9af56d58647c7f0a773d1bd4557bf621.jpg"
              alt="NB Engenharia Logo"
              className="w-10 h-10 object-contain rounded opacity-80"
            />
            <span className="text-lg font-bold text-white">
              NB <span className="text-[#FFC107]">Engenharia</span>
            </span>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p className="mb-2">© 2026 NB Engenharia. Todos os direitos reservados.</p>
            <p className="flex items-center justify-center md:justify-end gap-1 text-xs text-gray-600">
              Feito com <Heart className="w-3 h-3 text-[#FFC107] fill-[#FFC107]" /> para você.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;