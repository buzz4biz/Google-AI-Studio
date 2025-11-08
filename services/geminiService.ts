import { GoogleGenAI } from "@google/genai";
import { type ChatMessage, GeminiActionType } from '../types';
import { challengeData } from '../data/challengeData';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const getModel = (type: 'pro' | 'flash') => {
    return type === 'pro' ? 'gemini-2.5-pro' : 'gemini-2.5-flash';
}

const formattedChallengeData = challengeData.map(day => {
    const tasks = day.tasks.map(task => `- ${task.description}`).join('\n');
    return `
---
Dia ${day.day}: ${day.title}
Semana: ${day.week}
Objetivo: ${day.objective}
Tarefas:
${tasks}
Prompt de Reflexão: ${day.reflectionPrompt}
---
    `;
}).join('');

const systemInstruction = `Você é EstrategIA, uma assistente IA para terapeutas holísticas participando do 'Desafio Terapeuta Estrategista'. Seu objetivo é fornecer insights, responder perguntas sobre negócios para terapeutas, e oferecer encorajamento.

### Tom e Estilo ###
Seja sempre amigável, concisa, prática e inspiradora. Use um tom encorajador e pessoal, como uma parceira de negócios. Use a terminologia do desafio (Zonas Douradas, Cliente Ideal, etc.) quando apropriado.

### Regras de Formatação ###
- **Use Espaçamento:** Separe parágrafos e ideias com linhas em branco para facilitar a leitura. NUNCA retorne um único bloco de texto.
- **Use Listas com Hífens:** Para listar itens (como tarefas), use um hífen (-) seguido de um espaço no início de cada item. Cada item da lista DEVE estar em uma nova linha.
- **NÃO USE MARKDOWN:** Não use asteriscos para negrito (**texto**), itálico (*texto*) ou listas (* item). A interface de chat não renderiza esses formatos. Apenas use texto simples com quebras de linha e listas com hífens.

### Base de Conhecimento do Desafio ###
Você DEVE usar as informações a seguir como sua ÚNICA base de conhecimento sobre a estrutura do desafio. Ao responder perguntas sobre tarefas, objetivos ou qualquer conteúdo de um dia específico, consulte estritamente os dados abaixo. Não invente informações sobre o desafio.
${formattedChallengeData}
`;


export const generateChatResponse = async (history: ChatMessage[], newMessage: string): Promise<string> => {
    try {
        const model = getModel('flash');
        const contents = [
            ...history.map(msg => ({
                role: msg.role,
                parts: [{ text: msg.text }]
            })),
            { role: 'user', parts: [{ text: newMessage }] }
        ];

        const response = await ai.models.generateContent({
            model: model,
            contents: contents,
            config: {
                systemInstruction: systemInstruction,
            },
        });

        return response.text;
    } catch (error) {
        console.error("Error generating chat response:", error);
        return "Desculpe, ocorreu um erro ao conectar com a IA. Por favor, tente novamente mais tarde.";
    }
};

const TASK_PROMPT_INSTRUCTIONS = `

### Regras de Resposta ###
- **Tom:** Seja uma coach de negócios especialista: direta, objetiva, clara e focada em gerar valor prático.
- **Formatação:** 
  - Use títulos simples (ex: "Insights Chave:") seguidos de dois-pontos.
  - Separe parágrafos e ideias com linhas em branco.
  - Para listas, use hífens (-).
  - **NÃO USE MARKDOWN:** Sem asteriscos para negrito ou itálico, sem hashtags para títulos. Apenas texto limpo.
`;

const PROMPTS: Record<GeminiActionType, (context: string, userInput: string) => string> = {
    [GeminiActionType.ANALYZE_REFLECTION]: (context, userInput) => `Analise a seguinte reflexão de uma terapeuta: "${userInput}". Contexto: ${context}. Forneça de forma objetiva: 3 insights-chave, 1 pergunta poderosa para aprofundar a reflexão, e 1 sugestão prática e acionável. ${TASK_PROMPT_INSTRUCTIONS}`,
    [GeminiActionType.GENERATE_AVATAR_QUESTIONS]: (context, userInput) => `Baseado nesta descrição de cliente ideal de uma terapeuta: "${userInput}", gere 5 perguntas investigativas e profundas para ajudar a detalhar o perfil psicográfico. Contexto: ${context}. ${TASK_PROMPT_INSTRUCTIONS}`,
    [GeminiActionType.DRAFT_BIO]: (context, userInput) => `Com base nas informações da terapeuta: "${userInput}", escreva 3 versões de uma bio para o Instagram (curta, média, longa), focando no cliente ideal e em uma chamada para ação clara. Contexto: ${context}. ${TASK_PROMPT_INSTRUCTIONS}`,
    [GeminiActionType.DRAFT_MESSAGE_TEMPLATE]: (context, userInput) => `Crie um template de mensagem profissional e empático para uma terapeuta holística usar na seguinte situação: "${userInput}". Contexto: ${context}. ${TASK_PROMPT_INSTRUCTIONS}`,
    [GeminiActionType.ANALYZE_PACKAGE_VALUE]: (context, userInput) => `Analise a estrutura de pacote de serviços da terapeuta: "${userInput}". Sugira 3 formas de aumentar o valor percebido sem aumentar custos significativamente. Contexto: ${context}. ${TASK_PROMPT_INSTRUCTIONS}`
};

export const performGeminiTask = async (actionType: GeminiActionType, promptContext: string, userInput: string): Promise<string> => {
    if (!userInput.trim()) {
        return "Por favor, escreva algo para que a IA possa analisar.";
    }

    try {
        const model = getModel('pro');
        const prompt = PROMPTS[actionType](promptContext, userInput);
        
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error(`Error performing Gemini task (${actionType}):`, error);
        return "Desculpe, ocorreu um erro ao processar sua solicitação com a IA. Por favor, tente novamente.";
    }
};