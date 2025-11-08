import React, { useState, useRef, useEffect } from 'react';
import { type ChatMessage } from '../types';
import { generateChatResponse } from '../services/geminiService';
import { ChatBubbleIcon, CloseIcon, SendIcon, LoadingSpinner, SparklesIcon } from './icons';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a EstrategIA. Como posso te ajudar a transformar sua prática hoje?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await generateChatResponse(newMessages, userInput);
      setMessages([...newMessages, { role: 'model', text: response }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'model', text: 'Desculpe, ocorreu um erro.' }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-brand-orange text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-light-orange transition-transform transform hover:scale-110"
        aria-label="Abrir chat de ajuda"
      >
        <ChatBubbleIcon className="w-8 h-8" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[90vw] h-[70vh] max-w-sm max-h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 ease-out">
      <header className="flex items-center justify-between p-4 bg-brand-teal text-white rounded-t-2xl">
        <div className="flex items-center gap-2">
            <SparklesIcon className="w-6 h-6"/>
            <h3 className="font-bold">EstrategIA</h3>
        </div>
        <button onClick={() => setIsOpen(false)} aria-label="Fechar chat">
          <CloseIcon className="w-6 h-6" />
        </button>
      </header>
      
      <div className="flex-1 p-4 overflow-y-auto bg-brand-bg">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.role === 'user' ? 'bg-brand-orange text-white rounded-br-none' : 'bg-white text-brand-dark-blue rounded-bl-none shadow-sm'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="max-w-[80%] p-3 rounded-2xl bg-white text-brand-dark-blue rounded-bl-none shadow-sm flex items-center gap-2">
                    <LoadingSpinner className="w-4 h-4 text-brand-teal"/>
                    <span className="text-sm text-gray-500 italic">pensando...</span>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="relative">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua pergunta..."
            className="w-full pr-12 p-3 bg-white text-brand-dark-blue border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-teal text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-brand-blue transition"
            aria-label="Enviar mensagem"
            disabled={isLoading}
          >
            <SendIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};