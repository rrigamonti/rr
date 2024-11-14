import React from 'react';
import { Brain, Moon, Battery, Sparkles } from 'lucide-react';

export function SleepInfo() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Perché Usare il Calcolatore del Sonno?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Brain className="w-5 h-5 mt-1 text-purple-300 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Cicli del Sonno</h3>
              <p className="text-purple-200">
                Il sonno è organizzato in cicli di circa 90 minuti. Durante ogni ciclo, 
                attraversiamo diverse fasi essenziali per il recupero fisico e mentale.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Moon className="w-5 h-5 mt-1 text-purple-300 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Sonno Ottimale</h3>
              <p className="text-purple-200">
                Svegliarsi durante la fase leggera del sonno è più naturale e ci fa 
                sentire più riposati. Questo calcolatore ti aiuta a pianificare il 
                momento migliore per addormentarti o svegliarti.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Battery className="w-5 h-5 mt-1 text-purple-300 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Benefici</h3>
              <p className="text-purple-200">
                Un sonno di qualità migliora la memoria, rafforza il sistema immunitario, 
                aumenta la creatività e riduce lo stress. Dormire rispettando i cicli 
                naturali ottimizza questi benefici.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Sparkles className="w-5 h-5 mt-1 text-purple-300 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Consigli per un Sonno Migliore</h3>
              <p className="text-purple-200">
                Mantieni una temperatura confortevole nella camera da letto, evita 
                schermi luminosi prima di dormire e segui una routine serale regolare 
                per migliorare la qualità del tuo riposo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}