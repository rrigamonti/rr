import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface SleepCycleVisualizationProps {
  cycles: number;
  duration: number;
  isActive: boolean;
  mode: 'sleep' | 'wake';
}

export function SleepCycleVisualization({ 
  cycles, 
  duration, 
  isActive,
  mode 
}: SleepCycleVisualizationProps) {
  const segments = Array.from({ length: cycles }, (_, i) => i);
  const radius = 40;
  const center = radius + 10;
  const totalSize = (center + 10) * 2;

  return (
    <div className={`relative w-${totalSize} h-${totalSize} transition-opacity duration-300 ${
      isActive ? 'opacity-100' : 'opacity-80'
    }`}>
      <svg width={totalSize} height={totalSize} className="transform -rotate-90">
        {segments.map((_, i) => {
          const angle = (360 / cycles) * i;
          const startAngle = (angle * Math.PI) / 180;
          const endAngle = ((angle + (360 / cycles)) * Math.PI) / 180;
          
          const x1 = center + radius * Math.cos(startAngle);
          const y1 = center + radius * Math.sin(startAngle);
          const x2 = center + radius * Math.cos(endAngle);
          const y2 = center + radius * Math.sin(endAngle);
          
          return (
            <g key={i}>
              <path
                d={`M ${center},${center} L ${x1},${y1} A ${radius},${radius} 0 0,1 ${x2},${y2} Z`}
                className={`${
                  isActive 
                    ? 'fill-purple-500/30 stroke-purple-400/50' 
                    : 'fill-white/10 stroke-white/20'
                } transition-opacity duration-300`}
                strokeWidth="1"
              />
            </g>
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {mode === 'sleep' ? (
            <Sun className="w-4 h-4 mx-auto mb-1 text-yellow-400" />
          ) : (
            <Moon className="w-4 h-4 mx-auto mb-1 text-purple-400" />
          )}
          <div className="text-sm font-bold">{cycles}</div>
          <div className="text-xs text-purple-200">{duration.toFixed(1)}h</div>
        </div>
      </div>
    </div>
  );
}