
import React from 'react';
import { SparklesIcon } from './icons';

export const Header = () => {
  return (
    <header className="bg-white shadow-md w-full p-4">
      <div className="container mx-auto flex items-center gap-3">
        <SparklesIcon className="w-8 h-8 text-brand-teal"/>
        <div>
            <h1 className="text-xl md:text-2xl font-bold text-brand-dark-blue">
            Desafio Terapeuta Estrategista
            </h1>
            <p className="text-sm text-gray-500">Transforme sua prática em 30 dias</p>
        </div>
      </div>
    </header>
  );
};
