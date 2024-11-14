import React from 'react';
import { User, Clock, Brain, AlertCircle } from 'lucide-react';

interface PersonalSettings {
  age: string;
  sleepLatency: number;
  preferredDuration: number;
}

interface PersonalizedSleepProps {
  settings: PersonalSettings;
  setSettings: (settings: PersonalSettings) => void;
}

export function PersonalizedSleep({ settings, setSettings }: PersonalizedSleepProps) {
  const ageGroups = [
    { value: '13-14', label: 'Adolescenti (13-14 anni)', hours: '9-11', min: 9, max: 11 },
    { value: '15-17', label: 'Adolescenti (15-17 anni)', hours: '8-10', min: 8, max: 10 },
    { value: '18-25', label: 'Giovani adulti (18-25 anni)', hours: '7-9', min: 7, max: 9 },
    { value: '26-40', label: 'Adulti (26-40 anni)', hours: '7-9', min: 7, max: 9 },
    { value: '41-64', label: 'Adulti maturi (41-64 anni)', hours: '7-8', min: 7, max: 8 },
    { value: '65-75', label: 'Anziani (65-75 anni)', hours: '7-8', min: 7, max: 8 },
    { value: '75+', label: 'Anziani over 75', hours: '6-8', min: 6, max: 8 }
  ];

  const currentAgeGroup = ageGroups.find(g => g.value === settings.age);
  const isWithinRecommendedRange = currentAgeGroup && 
    settings.preferredDuration >= currentAgeGroup.min && 
    settings.preferredDuration <= currentAgeGroup.max;

  const getRecommendation = (age: string) => {
    const group = ageGroups.find(g => g.value === age);
    if (!group) return '';

    switch (age) {
      case '13-14':
      case '15-17':
        return `Gli adolescenti di questa età necessitano di ${group.hours} ore di sonno per supportare la crescita fisica, lo sviluppo cognitivo e le prestazioni scolastiche.`;
      case '18-25':
        return `I giovani adulti dovrebbero dormire ${group.hours} ore per ottimizzare l'apprendimento, mantenere alti livelli di energia e supportare un sano sviluppo.`;
      case '26-40':
        return `In questa fascia d'età sono raccomandate ${group.hours} ore di sonno per mantenere produttività, concentrazione e benessere generale.`;
      case '41-64':
        return `Gli adulti maturi necessitano di ${group.hours} ore di sonno regolare per preservare la salute cardiovascolare e le funzioni cognitive.`;
      case '65-75':
        return `Per gli anziani sono consigliate ${group.hours} ore di sonno, prestando attenzione alla qualità e regolarità del riposo.`;
      case '75+':
        return `Over 75: ${group.hours} ore di sonno, con particolare attenzione ai risvegli notturni e alla qualità complessiva del riposo.`;
      default:
        return '';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 justify-center">
        <User className="w-6 h-6" />
        Personalizza il Tuo Sonno
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Fascia d'Età</label>
            <select
              value={settings.age}
              onChange={(e) => setSettings({ ...settings, age: e.target.value })}
              className="w-full bg-white/10 border-2 border-purple-400/30 rounded-xl px-4 py-2 focus:outline-none focus:border-purple-400 text-white"
            >
              {ageGroups.map((group) => (
                <option 
                  key={group.value} 
                  value={group.value}
                  className="bg-gray-800 text-white"
                >
                  {group.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Tempo per Addormentarsi (minuti)
            </label>
            <input
              type="range"
              min="5"
              max="30"
              step="5"
              value={settings.sleepLatency}
              onChange={(e) => setSettings({ ...settings, sleepLatency: Number(e.target.value) })}
              className="w-full accent-purple-400"
            />
            <div className="text-center mt-2">{settings.sleepLatency} minuti</div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">
                Durata Preferita del Sonno (ore)
              </label>
              {currentAgeGroup && (
                <span className={`text-sm flex items-center gap-1 ${
                  isWithinRecommendedRange ? 'text-green-400' : 'text-yellow-400'
                }`}>
                  <AlertCircle className="w-4 h-4" />
                  {isWithinRecommendedRange 
                    ? 'Durata ottimale'
                    : `Consigliato: ${currentAgeGroup.hours} ore`}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type="range"
                min="6"
                max="10"
                step="0.5"
                value={settings.preferredDuration}
                onChange={(e) => setSettings({ ...settings, preferredDuration: Number(e.target.value) })}
                className={`w-full ${
                  isWithinRecommendedRange ? 'accent-green-400' : 'accent-purple-400'
                }`}
                style={{
                  background: currentAgeGroup 
                    ? `linear-gradient(to right, 
                        rgba(255,255,255,0.1) ${(currentAgeGroup.min - 6) * 25}%, 
                        rgba(74,222,128,0.2) ${(currentAgeGroup.min - 6) * 25}%, 
                        rgba(74,222,128,0.2) ${(currentAgeGroup.max - 6) * 25}%, 
                        rgba(255,255,255,0.1) ${(currentAgeGroup.max - 6) * 25}%)`
                    : ''
                }}
              />
              <div className="text-center mt-2">{settings.preferredDuration} ore</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur p-6 rounded-xl border border-white/10">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Raccomandazioni Personalizzate
          </h3>
          <div className="space-y-4 text-purple-200">
            <p>{getRecommendation(settings.age)}</p>
            <p>
              Con un tempo di {settings.sleepLatency} minuti per addormentarti, 
              pianifica di andare a letto circa {settings.sleepLatency + 15} minuti prima 
              dell'orario suggerito.
            </p>
            <p>
              La tua preferenza di {settings.preferredDuration} ore di sonno 
              corrisponde a {Math.round(settings.preferredDuration * 60 / 90)} cicli completi del sonno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}