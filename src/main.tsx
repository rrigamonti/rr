import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const helmetContext = {};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Calcolatore Sonno Online | Calcola i Cicli del Sonno</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <App />
    </HelmetProvider>
  </StrictMode>
);