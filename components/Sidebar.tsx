
import React from 'react';
import { type DayData } from '../types';

interface SidebarProps {
  challengeData: DayData[];
  currentDay: number;
  setCurrentDay: (day: number) => void;
}

export const Sidebar = ({ challengeData, currentDay, setCurrentDay }: SidebarProps) => {
  const weeks = [...new Set(challengeData.map(d => d.week))];

  return (
    <aside className="w-full md:w-64 lg:w-72 bg-white border-r border-gray-200 p-4 md:p-6 overflow-y-auto h-full">
      <h2 className="text-lg font-bold text-brand-dark-blue mb-4">Sua Jornada</h2>
      <nav className="space-y-4">
        {weeks.map(week => (
          <div key={week}>
            <h3 className="text-sm font-semibold text-brand-blue uppercase mb-2">Semana {week}</h3>
            <ul className="space-y-1">
              {challengeData
                .filter(d => d.week === week)
                .map(day => (
                  <li key={day.day}>
                    <button
                      onClick={() => setCurrentDay(day.day)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-md transition-all duration-200 flex items-center gap-3 ${
                        currentDay === day.day
                          ? 'bg-brand-teal text-white shadow'
                          : 'text-gray-600 hover:bg-brand-light-teal hover:text-brand-dark-blue'
                      }`}
                    >
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentDay === day.day ? 'bg-white text-brand-teal' : 'bg-gray-200'}`}>
                        {day.day}
                      </span>
                      <span className="flex-grow">{day.title}</span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
