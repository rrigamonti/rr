import React, { useState } from 'react';
import { Moon, Sun, Clock, Star } from 'lucide-react';
import { SleepCycleVisualization } from './SleepCycleVisualization';

interface CalculatorProps {
  mode: 'sleep' | 'wake';
  time: string;
  setMode: (mode: 'sleep' | 'wake') => void;
  setTime: (time: string) => void;
  times: Array<{ time: Date; cycles: number; duration: number; quality: string }>;
  formatTime: (date: Date) => string;
  quality: number;
  setQuality: (quality: number) => void;
}

export function Calculator({ 
  mode, 
  time, 
  setMode, 
  setTime, 
  times, 
  formatTime,
  quality,
  setQuality 
}: CalculatorProps) {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const formatDuration = (duration: number) => {
    const hours = Math.floor(duration);
    const minutes = Math.round((duration - hours) * 60);
    if (minutes === 0) {
      return `${hours} ore`;
    }
    return `${hours} ore e ${minutes} min`;
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'Ottimale':
        return 'text-green-400';
      case 'Buono':
        return 'text-yellow-400';
      default:
        return 'text-red-400';
    }
  };

  const getQualityBadge = (quality: string) => {
    return quality;
  };

  return (
    <div className="space-y-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={() => setMode('sleep')}
            className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
              mode === 'sleep'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white/5 hover:bg-white/20'
            }`}
          >
            <Moon size={20} className="transition-transform group-hover:rotate-12" />
            <span>Se vado a letto alle...</span>
          </button>
          <button
            onClick={() => setMode('wake')}
            className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
              mode === 'wake'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white/5 hover:bg-white/20'
            }`}
          >
            <Sun size={20} className="transition-transform group-hover:rotate-12" />
            <span>Voglio svegliarmi alle...</span>
          </button>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-xs">
            <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-white/10 border-2 border-purple-400/30 rounded-xl px-12 py-3 focus:outline-none focus:border-purple-400 transition-all duration-300"
            />
          </div>
        </div>

        {time && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-xl font-semibold text-center mb-6">
              {mode === 'sleep' 
                ? 'Orari migliori per svegliarti:'
                : 'Orari migliori per andare a dormire:'}
            </h2>
            
            {/* Cycles visualization - fixed layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {times.map((t, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center justify-center"
                  onMouseEnter={() => setSelectedTime(i)}
                  onMouseLeave={() => setSelectedTime(null)}
                >
                  <SleepCycleVisualization
                    cycles={t.cycles}
                    duration={t.duration}
                    isActive={selectedTime === i}
                    mode={mode}
                  />
                  <div className="mt-4 text-center">
                    <div className="text-lg font-bold">{formatTime(t.time)}</div>
                    <div className={`text-sm ${getQualityColor(t.quality)}`}>
                      {getQualityBadge(t.quality)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Time boxes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {times.map((t, i) => (
                <div 
                  key={i} 
                  className={`bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 text-center border border-white/10 ${
                    selectedTime === i ? 'ring-2 ring-purple-400' : ''
                  }`}
                  onMouseEnter={() => setSelectedTime(i)}
                  onMouseLeave={() => setSelectedTime(null)}
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {mode === 'sleep' ? <Sun size={16} /> : <Moon size={16} />}
                    <span className="text-xl font-semibold">{formatTime(t.time)}</span>
                  </div>
                  <div className="text-sm text-purple-200">
                    {formatDuration(t.duration)}
                  </div>
                  <div className="mt-2 flex items-center justify-center space-x-1">
                    <Star size={14} className={getQualityColor(t.quality)} />
                    <span className={`text-sm ${getQualityColor(t.quality)}`}>
                      {getQualityBadge(t.quality)}
                    </span>
                  </div>
                  <div className="text-xs text-purple-200 mt-1">
                    {t.cycles} cicli
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-purple-200 text-sm">
          <p>Un ciclo di sonno dura circa 90 minuti.</p>
          <p>Si aggiungono 15 minuti per addormentarsi.</p>
        </div>
      </div>
    </div>
  );
}