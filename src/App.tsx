import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Calculator } from './components/Calculator';
import { PersonalizedSleep } from './components/PersonalizedSleep';
import { SleepEducation } from './components/SleepEducation';
import { Tips } from './components/Tips';
import { SleepInfo } from './components/SleepInfo';
import { ThemeToggle } from './components/ThemeToggle';
import { Footer } from './components/Footer';
import { useLocalStorage } from './hooks/useLocalStorage';
import { SleepPhases } from './components/education/SleepPhases';
import { CircadianRhythm } from './components/education/CircadianRhythm';
import { SleepEnvironment } from './components/education/SleepEnvironment';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { Terms } from './components/legal/Terms';
import { Disclaimer } from './components/legal/Disclaimer';

interface PersonalSettings {
  age: string;
  sleepLatency: number;
  preferredDuration: number;
}

function App() {
  const [mode, setMode] = useLocalStorage<'sleep' | 'wake'>('sleepMode', 'sleep');
  const [time, setTime] = useLocalStorage<string>('sleepTime', '');
  const [quality, setQuality] = useState<number>(0);
  const [theme, setTheme] = useLocalStorage<'dark' | 'light'>('theme', 'dark');
  const [personalSettings, setPersonalSettings] = useLocalStorage<PersonalSettings>('personalSettings', {
    age: '18-25',
    sleepLatency: 15,
    preferredDuration: 8
  });

  useEffect(() => {
    // Load the ad script
    const script = document.createElement('script');
    script.src = '//pl25005860.profitablecpmrate.com/eef74d20b32a1228b42e4cab707029ff/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);
  }, []);

  const calculateTimes = (inputTime: string, mode: 'sleep' | 'wake') => {
    if (!inputTime) return [];
    
    const [hours, minutes] = inputTime.split(':').map(Number);
    const baseDate = new Date();
    baseDate.setHours(hours, minutes, 0, 0);
    
    const times: Array<{ time: Date; cycles: number; duration: number; quality: string }> = [];
    
    for (let i = 1; i <= 6; i++) {
      const cycleMinutes = i * 90 + personalSettings.sleepLatency;
      let qualityScore = '';

      if (i >= 4 && i <= 6) {
        qualityScore = 'Ottimale';
      } else if (i === 3) {
        qualityScore = 'Buono';
      } else {
        qualityScore = 'Minimo';
      }

      if (mode === 'sleep') {
        const newDate = new Date(baseDate.getTime());
        newDate.setMinutes(newDate.getMinutes() + cycleMinutes);
        times.push({ 
          time: newDate, 
          cycles: i,
          duration: cycleMinutes / 60,
          quality: qualityScore 
        });
      } else {
        const newDate = new Date(baseDate.getTime());
        newDate.setMinutes(newDate.getMinutes() - cycleMinutes);
        times.push({ 
          time: newDate, 
          cycles: i,
          duration: cycleMinutes / 60,
          quality: qualityScore 
        });
      }
    }
    
    return mode === 'wake' ? times.reverse() : times;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('it-IT', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  // Get the current path
  const path = window.location.pathname;

  // Render different pages based on path
  if (path === '/privacy-policy') {
    return <PrivacyPolicy />;
  }
  if (path === '/terms') {
    return <Terms />;
  }
  if (path === '/disclaimer') {
    return <Disclaimer />;
  }
  if (path === '/sleep-phases') {
    return <SleepPhases />;
  }
  if (path === '/circadian-rhythm') {
    return <CircadianRhythm />;
  }
  if (path === '/sleep-environment') {
    return <SleepEnvironment />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white' 
        : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-100 text-gray-900'
    } overflow-x-hidden`}>
      <div className={`fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600&auto=format&fit=crop&q=80')] ${
        theme === 'dark' ? 'opacity-10' : 'opacity-5'
      } bg-cover bg-center mix-blend-overlay transition-opacity duration-300`} />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
        <div className="container mx-auto px-4 py-8 md:py-12 relative">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <div className="max-w-4xl mx-auto space-y-8">
            <Header />
            <PersonalizedSleep 
              settings={personalSettings}
              setSettings={setPersonalSettings}
            />
            <Calculator 
              mode={mode}
              time={time}
              setMode={setMode}
              setTime={setTime}
              times={calculateTimes(time, mode)}
              formatTime={formatTime}
              quality={quality}
              setQuality={setQuality}
              personalSettings={personalSettings}
            />
            
            {/* Middle page ad */}
            <div className="my-8 flex justify-center">
              <div id="container-eef74d20b32a1228b42e4cab707029ff"></div>
            </div>
            
            <SleepEducation />
            <Tips />
            <SleepInfo />
            
            {/* Bottom page ad */}
            <div className="mt-12 flex justify-center">
              <div id="container-eef74d20b32a1228b42e4cab707029ff-bottom"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;