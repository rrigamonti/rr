import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BackButton } from '../education/BackButton';
import { Footer } from '../Footer';

export function Terms() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Z07VCDZXYQ');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>Termini e Condizioni | Calcolatore Sonno Online</title>
        <meta name="description" content="Termini e condizioni di utilizzo di Calcolatore Sonno Online." />
      </Helmet>

      <BackButton onClick={() => window.location.href = '/'} />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Termini e Condizioni</h1>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-6 text-purple-200">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Accettazione dei Termini</h2>
              <p>
                Utilizzando questo sito web, l'utente accetta di essere vincolato dai presenti termini e condizioni di utilizzo.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Utilizzo del Servizio</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Il servizio è fornito "così com'è" senza garanzie di alcun tipo</li>
                <li>L'utente si impegna a utilizzare il servizio in modo lecito</li>
                <li>Non è consentito utilizzare il servizio per scopi illegali</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Proprietà Intellettuale</h3>
              <p>
                Tutti i contenuti presenti sul sito sono protetti da copyright e altre leggi sulla proprietà intellettuale.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Limitazione di Responsabilità</h3>
              <p>
                Il sito non è responsabile per eventuali danni diretti o indiretti derivanti dall'utilizzo del servizio.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Modifiche ai Termini</h3>
              <p>
                Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche saranno effettive immediatamente dopo la pubblicazione sul sito.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}