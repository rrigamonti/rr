import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BackButton } from '../education/BackButton';
import { Footer } from '../Footer';

export function Disclaimer() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Z07VCDZXYQ');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>Disclaimer | Calcolatore Sonno Online</title>
        <meta name="description" content="Disclaimer e limitazioni di responsabilità di Calcolatore Sonno Online." />
      </Helmet>

      <BackButton onClick={() => window.location.href = '/'} />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Disclaimer</h1>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-6 text-purple-200">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Scopo Informativo</h2>
              <p>
                Le informazioni fornite su questo sito hanno esclusivamente scopo informativo e non costituiscono in alcun modo consulenza medica o professionale.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Non Sostituisce Consulenza Medica</h3>
              <p>
                Il calcolatore del sonno e le informazioni fornite non sostituiscono la consulenza, la diagnosi o il trattamento medico professionale. Consultare sempre un medico qualificato per questioni relative al sonno e alla salute.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Accuratezza delle Informazioni</h3>
              <p>
                Nonostante i nostri sforzi per fornire informazioni accurate e aggiornate, non garantiamo la completezza, l'affidabilità o l'accuratezza delle informazioni presenti sul sito.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Limitazione di Responsabilità</h3>
              <p>
                Non ci assumiamo alcuna responsabilità per decisioni prese sulla base delle informazioni fornite su questo sito. L'utilizzo del calcolatore e delle informazioni è a proprio rischio.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Collegamenti Esterni</h3>
              <p>
                Il sito può contenere collegamenti a siti esterni. Non siamo responsabili per il contenuto o le pratiche sulla privacy di tali siti.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}