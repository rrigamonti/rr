import React, { useEffect } from 'react';
import { Thermometer, Volume2, Moon, Wind, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BackButton } from './BackButton';
import { TableOfContents } from './TableOfContents';

export function SleepEnvironment() {
  const sections = [
    {
      id: 'intro',
      title: 'L\'Importanza dell\'Ambiente'
    },
    {
      id: 'factors',
      title: 'Fattori Ambientali',
      subsections: [
        { id: 'temperature', title: 'Temperatura Ottimale' },
        { id: 'light', title: 'Illuminazione' },
        { id: 'noise', title: 'Gestione del Rumore' },
        { id: 'air-quality', title: 'Qualità dell\'Aria' }
      ]
    },
    {
      id: 'bedroom',
      title: 'Organizzazione della Camera'
    },
    {
      id: 'technology',
      title: 'Tecnologia e Sonno'
    }
  ];

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Z07VCDZXYQ');

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Z07VCDZXYQ';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white p-8">
      <Helmet>
        <title>Ambiente Ideale per Dormire | Calcolatore Sonno Online</title>
        <meta name="description" content="Scopri come creare l'ambiente perfetto per dormire: temperatura, illuminazione, rumore e ventilazione ottimali per un sonno ristoratore." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Come Creare l'Ambiente Ideale per Dormire",
            "description": "Guida all'ottimizzazione dell'ambiente per un sonno migliore",
            "image": "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&auto=format&fit=crop",
            "author": {
              "@type": "Organization",
              "name": "Calcolatore Sonno Online"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Calcolatore Sonno Online",
              "logo": {
                "@type": "ImageObject",
                "url": "https://calcolatore-sonno.netlify.app/favicon.svg"
              }
            },
            "datePublished": "2024-03-19",
            "dateModified": "2024-03-19"
          })}
        </script>
      </Helmet>

      <BackButton onClick={() => window.location.href = '/'} />

      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Ambiente Ideale per Dormire</h1>
        
        <TableOfContents sections={sections} />

        <div className="space-y-12">
          <section id="intro" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">L'Importanza dell'Ambiente</h2>
            <p className="text-purple-200 leading-relaxed">
              L'ambiente in cui dormiamo ha un impatto significativo sulla qualità del nostro sonno. 
              Un ambiente ottimale può migliorare sia l'addormentamento che la continuità del riposo.
            </p>
          </section>

          <section id="factors" className="space-y-8">
            <h2 className="text-2xl font-semibold">Fattori Ambientali</h2>
            
            <div id="temperature" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-red-400" />
                Temperatura Ottimale
              </h3>
              <p className="text-purple-200 leading-relaxed">
                La temperatura ideale per dormire è tra 18-22°C. Il corpo ha bisogno di 
                raffreddarsi leggermente per iniziare il processo del sonno.
              </p>
            </div>

            <div id="light" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Moon className="w-5 h-5 text-yellow-400" />
                Illuminazione
              </h3>
              <p className="text-purple-200 leading-relaxed">
                L'oscurità stimola la produzione di melatonina. Usa tende oscuranti o 
                mascherine per gli occhi per creare un ambiente buio ottimale.
              </p>
            </div>

            <div id="noise" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-purple-300" />
                Gestione del Rumore
              </h3>
              <p className="text-purple-200 leading-relaxed">
                Minimizza i rumori disturbanti. Se necessario, usa tappi per le orecchie o 
                un rumore bianco di sottofondo.
              </p>
            </div>

            <div id="air-quality" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Wind className="w-5 h-5 text-blue-400" />
                Qualità dell'Aria
              </h3>
              <p className="text-purple-200 leading-relaxed">
                Mantieni una buona ventilazione nella camera da letto. L'aria fresca migliora 
                la qualità del sonno e riduce l'accumulo di CO2.
              </p>
            </div>
          </section>

          <section id="bedroom" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Organizzazione della Camera</h2>
            <ul className="space-y-4 text-purple-200">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Mantieni la camera ordinata e libera dal disordine
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Scegli colori rilassanti per le pareti
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Usa materasso e cuscini confortevoli
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Mantieni una disposizione funzionale dei mobili
              </li>
            </ul>
          </section>

          <section id="technology" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Tecnologia e Sonno</h2>
            <p className="text-purple-200 leading-relaxed">
              Limita l'uso di dispositivi elettronici prima di dormire. La luce blu emessa 
              dagli schermi può interferire con la produzione di melatonina. Se necessario, 
              usa filtri per la luce blu o modalità notturna.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}