import React from 'react';
import { Moon, Stars, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <Stars className="absolute top-10 left-10 w-6 h-6 text-purple-300/30 animate-pulse" />
        <Moon className="absolute top-20 right-20 w-8 h-8 text-purple-300/20 animate-float" />
        <Sparkles className="absolute bottom-10 left-1/4 w-5 h-5 text-purple-300/30 animate-pulse" />
      </div>

      {/* Main content */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-block">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent animate-gradient">
            Calcolatore Sonno Online
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6"></div>
        </div>

        <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Il calcolatore sonno ti aiuta a pianificare i tuoi orari di riposo in modo scientifico, 
          basandosi sui naturali cicli del sonno di 90 minuti.
        </p>

        <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl max-w-2xl mx-auto">
          <h2 className="font-semibold mb-6 text-xl text-white flex items-center justify-center gap-2">
            <Moon className="w-5 h-5 text-purple-300" />
            Come usare il calcolatore sonno:
          </h2>
          
          <ol className="space-y-4 text-left">
            <li className="flex items-start gap-4 text-purple-200">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-semibold">
                1
              </span>
              <span>Scegli se vuoi calcolare l'ora di andare a dormire o di svegliarti</span>
            </li>
            <li className="flex items-start gap-4 text-purple-200">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-semibold">
                2
              </span>
              <span>Inserisci l'orario desiderato usando il formato 24 ore</span>
            </li>
            <li className="flex items-start gap-4 text-purple-200">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-semibold">
                3
              </span>
              <span>Il calcolatore sonno mostrerà gli orari ottimali basati sui cicli completi del sonno</span>
            </li>
            <li className="flex items-start gap-4 text-purple-200">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-semibold">
                4
              </span>
              <span>Scegli l'orario che meglio si adatta alla tua routine</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}