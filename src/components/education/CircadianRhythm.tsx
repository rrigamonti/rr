import React, { useEffect } from 'react';
import { Clock, Sun, Moon, Coffee, Utensils, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BackButton } from './BackButton';
import { TableOfContents } from './TableOfContents';

export function CircadianRhythm() {
  const sections = [
    {
      id: 'intro',
      title: 'Cos\'è il Ritmo Circadiano'
    },
    {
      id: 'mechanism',
      title: 'Come Funziona',
      subsections: [
        { id: 'light-exposure', title: 'Il Ruolo della Luce' },
        { id: 'hormones', title: 'Ormoni e Ritmo Circadiano' },
        { id: 'body-temp', title: 'Temperatura Corporea' }
      ]
    },
    {
      id: 'optimization',
      title: 'Ottimizzare il Ritmo Circadiano'
    },
    {
      id: 'lifestyle',
      title: 'Stile di Vita e Ritmo Circadiano'
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
        <title>Il Ritmo Circadiano | Calcolatore Sonno Online</title>
        <meta name="description" content="Comprendi il tuo orologio biologico e come il ritmo circadiano influenza il ciclo sonno-veglia. Ottimizza i tuoi orari per un sonno migliore." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "L'Importanza del Ritmo Circadiano",
            "description": "Guida al ritmo circadiano e al suo impatto sul sonno",
            "image": "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200&auto=format&fit=crop",
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
        <h1 className="text-4xl font-bold mb-8 text-center">Il Ritmo Circadiano</h1>
        
        <TableOfContents sections={sections} />

        <div className="space-y-12">
          <section id="intro" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Cos'è il Ritmo Circadiano</h2>
            <p className="text-purple-200 leading-relaxed">
              Il ritmo circadiano è il nostro orologio biologico interno che regola il ciclo 
              sonno-veglia nell'arco delle 24 ore. Questo sistema influenza non solo il sonno, 
              ma anche la temperatura corporea, la produzione ormonale e molte altre funzioni 
              fisiologiche.
            </p>
          </section>

          <section id="mechanism" className="space-y-8">
            <h2 className="text-2xl font-semibold">Come Funziona</h2>
            
            <div id="light-exposure" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-yellow-400" />
                Il Ruolo della Luce
              </h3>
              <p className="text-purple-200 leading-relaxed">
                La luce naturale è il principale regolatore del ritmo circadiano. 
                L'esposizione alla luce del sole al mattino aiuta a sincronizzare il nostro 
                orologio interno e a mantenere un ciclo sonno-veglia regolare.
              </p>
            </div>

            <div id="hormones" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-300" />
                Ormoni e Ritmo Circadiano
              </h3>
              <p className="text-purple-200 leading-relaxed">
                La melatonina, l'ormone del sonno, viene prodotta quando diminuisce la luce. 
                Il cortisolo, l'ormone dello stress, aumenta al mattino per prepararci al risveglio.
              </p>
            </div>

            <div id="body-temp" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Temperatura Corporea</h3>
              <p className="text-purple-200 leading-relaxed">
                La temperatura corporea segue un ritmo circadiano, diminuendo durante la notte 
                per favorire il sonno e aumentando durante il giorno per mantenerci attivi.
              </p>
            </div>
          </section>

          <section id="optimization" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Ottimizzare il Ritmo Circadiano</h2>
            <ul className="space-y-4 text-purple-200">
              <li className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-yellow-400" />
                Esposizione alla luce naturale al mattino
              </li>
              <li className="flex items-center gap-2">
                <Moon className="w-4 h-4 text-purple-300" />
                Riduzione della luce blu la sera
              </li>
              <li className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Evitare caffeina nelle ore serali
              </li>
              <li className="flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                Pasti regolari durante il giorno
              </li>
            </ul>
          </section>

          <section id="lifestyle" className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Stile di Vita e Ritmo Circadiano</h2>
            <p className="text-purple-200 leading-relaxed">
              Mantenere orari regolari per sonno, pasti e attività fisica aiuta a sincronizzare 
              il ritmo circadiano. Un ritmo regolare migliora la qualità del sonno, l'energia 
              diurna e il benessere generale.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}