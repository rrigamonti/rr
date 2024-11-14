import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`fixed top-4 right-4 p-2 rounded-full transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-white/10 hover:bg-white/20 text-yellow-300'
          : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-600'
      }`}
      aria-label={`Attiva tema ${theme === 'dark' ? 'chiaro' : 'scuro'}`}
    >
      {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}