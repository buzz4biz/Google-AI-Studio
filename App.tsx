import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DailyTaskView } from './components/DailyTaskView';
import { Chatbot } from './components/Chatbot';
import { CoverScreen } from './components/CoverScreen';
import { challengeData } from './data/challengeData';

function App() {
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [currentDay, setCurrentDay] = useState<number>(1);
  const dayData = challengeData.find(d => d.day === currentDay) || challengeData[0];

  if (!challengeStarted) {
    return <CoverScreen onStart={() => setChallengeStarted(true)} />;
  }

  return (
    <div className="flex flex-col h-screen font-sans bg-brand-bg text-brand-dark-blue">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">
            {/* Sidebar for larger screens */}
            <div className="hidden md:flex md:flex-shrink-0 h-full">
                <Sidebar 
                    challengeData={challengeData}
                    currentDay={currentDay}
                    setCurrentDay={setCurrentDay}
                />
            </div>

            {/* Dropdown for smaller screens */}
            <div className="md:hidden p-4 bg-white border-b">
                 <label htmlFor="day-select" className="block text-sm font-medium text-gray-700 mb-1">Selecione o Dia:</label>
                 <select 
                    id="day-select"
                    value={currentDay}
                    onChange={(e) => setCurrentDay(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-teal focus:border-brand-teal"
                 >
                    {challengeData.map(day => (
                        <option key={day.day} value={day.day}>
                            Dia {day.day}: {day.title}
                        </option>
                    ))}
                 </select>
            </div>
            
            <DailyTaskView dayData={dayData} />
        </div>
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
