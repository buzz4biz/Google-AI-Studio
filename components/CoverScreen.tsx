import React from 'react';
import { SparklesIcon } from './icons';

interface CoverScreenProps {
  onStart: () => void;
}

export const CoverScreen = ({ onStart }: CoverScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-brand-teal to-brand-blue text-white p-8 text-center animate-fade-in">
      <div className="max-w-3xl">
        <SparklesIcon className="w-16 h-16 mx-auto mb-6 opacity-80" />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
          Desafio Terapeuta Estrategista
        </h1>
        <p className="text-xl md:text-2xl mb-6 opacity-90 font-light">
          Protocolo de 30 Dias Para Transformar Sua Prática e Dobrar Sua Renda Enquanto Reduz Sua Carga Horária
        </p>
        <div className="my-8">
            <p className="text-md md:text-lg opacity-90 bg-black bg-opacity-20 rounded-xl p-4 inline-block max-w-xl">
            Para você, Terapeuta Holística que atende em domicílio e sente que está trabalhando muito e ganhando pouco.
            </p>
        </div>
        <button
          onClick={onStart}
          className="bg-brand-orange text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-brand-light-orange transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Iniciar Desafio
        </button>
      </div>
    </div>
  );
};
