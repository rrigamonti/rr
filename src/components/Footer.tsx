import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-lg mt-12 py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center justify-center space-x-2 text-purple-200">
            <span>Creato con</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>per il tuo benessere</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-purple-300">
            <a 
              href="/privacy-policy" 
              className="hover:text-purple-200 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="hover:text-purple-200 transition-colors duration-300"
            >
              Termini e Condizioni
            </a>
            <a 
              href="/disclaimer" 
              className="hover:text-purple-200 transition-colors duration-300"
            >
              Disclaimer
            </a>
          </nav>

          <div className="text-sm text-purple-400">
            © {new Date().getFullYear()} Calcolatore Sonno Online. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
}