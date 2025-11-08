import React, { useState, useEffect } from 'react';
// FIX: Import `GeminiActionType` to use for calling `performGeminiTask`.
import { type DayData, type Task, GeminiActionType } from '../types';
import { performGeminiTask } from '../services/geminiService';
import { GeminiTaskButton } from './GeminiTaskButton';
import { CheckIcon } from './icons';

interface DailyTaskViewProps {
  dayData: DayData;
}

const CustomCheckbox = ({ id, checked, onChange, label }: { id: string, checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, label: React.ReactNode }) => (
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <label
        htmlFor={id}
        className={`flex-shrink-0 w-5 h-5 border-2 rounded-md cursor-pointer flex items-center justify-center transition-all duration-200 ${checked ? 'bg-brand-teal border-brand-teal' : 'bg-white border-gray-300'}`}
      >
        {checked && <CheckIcon className="w-4 h-4 text-white" />}
      </label>
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={id} className="text-gray-700 cursor-pointer">{label}</label>
    </div>
  </div>
);

export const DailyTaskView = ({ dayData }: DailyTaskViewProps) => {
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>(() => new Array(dayData.tasks.length).fill(false));
  const [reflection, setReflection] = useState('');
  const [geminiResult, setGeminiResult] = useState('');

  useEffect(() => {
    setCheckedTasks(new Array(dayData.tasks.length).fill(false));
    setReflection('');
    setGeminiResult('');
  }, [dayData]);

  const handleTaskToggle = (index: number) => {
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks[index] = !newCheckedTasks[index];
    setCheckedTasks(newCheckedTasks);
  };

  const handleGeminiAction = async (task: Task) => {
    if (task.geminiAction) {
        const userInput = task.geminiAction.type === 'ANALYZE_REFLECTION' ? reflection : prompt(`Para a IA te ajudar com "${task.geminiAction.label}", por favor forneça um contexto:`, '');
        if (userInput) {
            setGeminiResult(''); // Clear previous results
            const result = await performGeminiTask(task.geminiAction.type, task.geminiAction.promptContext, userInput);
            setGeminiResult(result);
        }
    }
  };

  const handleReflectionAnalysis = async () => {
    setGeminiResult('');
    // FIX: Use GeminiActionType enum instead of a raw string for the action type.
    const result = await performGeminiTask(GeminiActionType.ANALYZE_REFLECTION, dayData.reflectionPrompt, reflection);
    setGeminiResult(result);
  };

  return (
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <span className="text-sm font-semibold text-brand-orange uppercase">Dia {dayData.day}</span>
          <h1 className="text-3xl font-bold text-brand-dark-blue mt-1 mb-2">{dayData.title}</h1>
          <p className="text-gray-600">{dayData.objective}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">Tarefas do Dia</h2>
          <div className="space-y-4">
            {dayData.tasks.map((task, index) => (
              <div key={index}>
                <CustomCheckbox
                  id={`task-${index}`}
                  checked={checkedTasks[index]}
                  onChange={() => handleTaskToggle(index)}
                  label={<span className={checkedTasks[index] ? 'line-through text-gray-400' : ''}>{task.description}</span>}
                />
                 {task.subtasks && (
                    <ul className="ml-12 mt-2 space-y-1 list-disc list-inside text-gray-600 text-sm">
                        {task.subtasks.map((sub, i) => <li key={i}>{sub}</li>)}
                    </ul>
                 )}
                 {task.geminiAction && (
                    <div className="ml-8">
                        <GeminiTaskButton label={task.geminiAction.label} onClick={() => handleGeminiAction(task)} />
                    </div>
                 )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">Reflexão do Dia</h2>
          <p className="text-gray-600 mb-4">{dayData.reflectionPrompt}</p>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            rows={6}
            className="w-full p-3 bg-white text-brand-dark-blue border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition"
            placeholder="Escreva seus insights e descobertas aqui..."
          />
          <GeminiTaskButton label="Analisar Reflexão com IA" onClick={handleReflectionAnalysis} />

          {geminiResult && (
            <div className="mt-6 p-4 bg-brand-light-teal border-l-4 border-brand-teal rounded-r-lg">
                <h3 className="text-lg font-bold text-brand-blue mb-2">Análise da EstrategIA</h3>
                <div className="text-gray-800 whitespace-pre-wrap">{geminiResult}</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};