import React from 'react';
import { List } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  subsections?: Section[];
}

interface TableOfContentsProps {
  sections: Section[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-purple-300" />
        <h2 className="text-lg font-semibold">Indice dei Contenuti</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="text-purple-200 hover:text-purple-100 transition-colors duration-300 text-left w-full"
              >
                {section.title}
              </button>
              {section.subsections && (
                <ul className="ml-4 mt-1 space-y-1">
                  {section.subsections.map((subsection) => (
                    <li key={subsection.id}>
                      <button
                        onClick={() => scrollToSection(subsection.id)}
                        className="text-purple-300 hover:text-purple-200 transition-colors duration-300 text-sm text-left w-full"
                      >
                        {subsection.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}