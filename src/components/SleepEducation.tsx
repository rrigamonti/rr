import React from 'react';
import { Book, Moon, Wind, HelpCircle } from 'lucide-react';

export function SleepEducation() {
  const guides = [
    {
      title: "Le Fasi del Sonno",
      content: "Il sonno è composto da cicli di 90 minuti che includono sonno leggero, profondo e REM.",
      link: "/sleep-phases"
    },
    {
      title: "L'Importanza del Ritmo Circadiano",
      content: "Il nostro orologio biologico regola il ciclo sonno-veglia.",
      link: "/circadian-rhythm"
    },
    {
      title: "Ambiente Ideale",
      content: "La temperatura ottimale per dormire è tra 18-22°C.",
      link: "/sleep-environment"
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <Book className="w-6 h-6" />
        Guida al Sonno
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {guides.map((guide, index) => (
          <a
            key={index}
            href={guide.link}
            className="bg-white/5 p-6 rounded-xl transition-all duration-300 hover:bg-white/10 text-left block"
          >
            <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
            <p className="text-purple-200">{guide.content}</p>
            <p className="text-purple-400 mt-4 text-sm">Clicca per approfondire →</p>
          </a>
        ))}
      </div>
    </div>
  );
}