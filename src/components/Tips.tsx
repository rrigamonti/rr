import React from 'react';
import { Moon, Sun, Coffee, Wine, Bed, Smartphone } from 'lucide-react';

export function Tips() {
  const eveningTips = [
    {
      icon: <Coffee className="w-5 h-5" />,
      text: "Evita caffeina 6 ore prima di dormire"
    },
    {
      icon: <Wine className="w-5 h-5" />,
      text: "Limita alcol e pasti pesanti la sera"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      text: "Spegni dispositivi elettronici 1 ora prima"
    },
    {
      icon: <Bed className="w-5 h-5" />,
      text: "Mantieni la camera fresca e buia"
    }
  ];

  const morningTips = [
    {
      icon: <Sun className="w-5 h-5" />,
      text: "Esponiti alla luce naturale appena sveglio"
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      text: "Fai colazione entro un'ora dal risveglio"
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <Moon className="w-6 h-6" />
        Consigli per un Sonno Migliore
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">La Sera</h3>
          <div className="space-y-4">
            {eveningTips.map((tip, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                <div className="text-purple-300">
                  {tip.icon}
                </div>
                <p className="text-purple-200">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Il Mattino</h3>
          <div className="space-y-4">
            {morningTips.map((tip, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                <div className="text-purple-300">
                  {tip.icon}
                </div>
                <p className="text-purple-200">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}