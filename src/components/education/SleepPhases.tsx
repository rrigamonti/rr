import React, { useEffect } from 'react';
import { Brain, Activity, Eye, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BackButton } from './BackButton';
import { TableOfContents } from './TableOfContents';

export function SleepPhases() {
  const sections = [
    {
      id: 'intro',
      title: 'Introduzione ai Cicli del Sonno'
    },
    {
      id: 'phases',
      title: 'Le Fasi del Sonno',
      subsections: [
        { id: 'light-sleep', title: 'Sonno Leggero (N1 e N2)' },
        { id: 'deep-sleep', title: 'Sonno Profondo (N3)' },
        { id: 'rem-sleep', title: 'Fase REM' }
      ]
    },
    {
      id: 'cycles',
      title: 'Come Funzionano i Cicli'
    },
    {
      id: 'tips',
      title: 'Consigli per Ottimizzare i Cicli'
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
        <title>Le Fasi del Sonno | Calcolatore Sonno Online</title>
        <meta name="description" content="Scopri le diverse fasi del sonno: dal sonno leggero al sonno REM. Comprendi come funzionano i cicli del sonno per migliorare la qualità del tuo riposo." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Le Fasi del Sonno",
            "description": "Guida completa alle fasi del sonno e ai cicli del sonno",
            "image": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&auto=format&fit=crop",
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
        <h1 className="text-4xl font-bold mb-8 text-center">Le Fasi del Sonno</h1>
        
        <TableOfContents sections={sections} />

        <div className="space-y-12">
          <section id="intro" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Introduzione ai Cicli del Sonno</h2>
            <p className="text-purple-200 leading-relaxed">
              Il sonno è un processo complesso che si svolge in cicli di circa 90 minuti. 
              Durante ogni ciclo, il nostro corpo attraversa diverse fasi, ognuna con un ruolo 
              specifico nel recupero fisico e mentale.
            </p>
          </section>

          <section id="phases" className="space-y-8">
            <h2 className="text-2xl font-semibold">Le Fasi del Sonno</h2>
            
            <div id="light-sleep" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-300" />
                Sonno Leggero (N1 e N2)
              </h3>
              <p className="text-purple-200 leading-relaxed">
                Le prime fasi del sonno sono caratterizzate da un sonno leggero. 
                Nella fase N1, si può essere facilmente svegliati. 
                La fase N2 è più profonda e occupa circa il 50% del tempo totale di sonno.
              </p>
            </div>

            <div id="deep-sleep" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-300" />
                Sonno Profondo (N3)
              </h3>
              <p className="text-purple-200 leading-relaxed">
                Il sonno profondo è essenziale per il recupero fisico. 
                Durante questa fase, il corpo ripara i tessuti, rafforza il sistema immunitario 
                e consolida la memoria.
              </p>
            </div>

            <div id="rem-sleep" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-300" />
                Fase REM
              </h3>
              <p className="text-purple-200 leading-relaxed">
                La fase REM (Rapid Eye Movement) è caratterizzata da intensa attività cerebrale, 
                sogni vividi e paralisi muscolare temporanea. È fondamentale per il benessere 
                emotivo e cognitivo.
              </p>
            </div>
          </section>

          <section id="cycles" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Come Funzionano i Cicli</h2>
            <p className="text-purple-200 leading-relaxed">
              Un ciclo completo del sonno dura circa 90 minuti e si ripete 4-6 volte per notte. 
              La distribuzione delle fasi varia durante la notte: il sonno profondo è più 
              presente nei primi cicli, mentre la fase REM aumenta negli ultimi.
            </p>
          </section>

          <section id="tips" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Consigli per Ottimizzare i Cicli</h2>
            <ul className="space-y-4 text-purple-200">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Mantieni orari regolari di sonno
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Pianifica il sonno in multipli di 90 minuti
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Evita interruzioni durante i cicli
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Crea un ambiente ottimale per il riposo
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}