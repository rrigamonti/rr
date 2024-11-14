import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BackButton } from '../education/BackButton';
import { Footer } from '../Footer';

export function PrivacyPolicy() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Z07VCDZXYQ');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>Privacy Policy | Calcolatore Sonno Online</title>
        <meta name="description" content="Informativa sulla privacy di Calcolatore Sonno Online. Scopri come trattiamo i tuoi dati personali." />
      </Helmet>

      <BackButton onClick={() => window.location.href = '/'} />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-6 text-purple-200">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Informativa sulla Privacy</h2>
              <p>
                La presente informativa descrive le modalità di gestione del sito web in riferimento al trattamento dei dati personali degli utenti che lo consultano.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Tipologie di Dati Raccolti</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dati di utilizzo (es. pagine visitate, tempo di permanenza)</li>
                <li>Cookie tecnici necessari al funzionamento del sito</li>
                <li>Cookie analitici per statistiche aggregate</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Finalità del Trattamento</h3>
              <p>I dati vengono raccolti per:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Migliorare l'esperienza di navigazione</li>
                <li>Analizzare l'utilizzo del sito in forma aggregata</li>
                <li>Garantire il corretto funzionamento del servizio</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Base Giuridica del Trattamento</h3>
              <p>
                Il trattamento dei dati personali si basa sul legittimo interesse del titolare e sul consenso dell'utente.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Diritti dell'Utente</h3>
              <p>Gli utenti hanno il diritto di:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Accedere ai propri dati personali</li>
                <li>Richiedere la rettifica o la cancellazione</li>
                <li>Limitare il trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}