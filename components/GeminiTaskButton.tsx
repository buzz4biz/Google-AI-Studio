
import React, { useState } from 'react';
import { LoadingSpinner, SparklesIcon } from './icons';

interface GeminiTaskButtonProps {
    label: string;
    onClick: () => Promise<void>;
}

export const GeminiTaskButton = ({ label, onClick }: GeminiTaskButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-light-orange rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <>
          <LoadingSpinner className="w-4 h-4" />
          <span>Processando...</span>
        </>
      ) : (
        <>
          <SparklesIcon className="w-4 h-4" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
