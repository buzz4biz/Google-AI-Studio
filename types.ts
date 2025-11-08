
export enum GeminiActionType {
  ANALYZE_REFLECTION = 'ANALYZE_REFLECTION',
  GENERATE_AVATAR_QUESTIONS = 'GENERATE_AVATAR_QUESTIONS',
  DRAFT_BIO = 'DRAFT_BIO',
  DRAFT_MESSAGE_TEMPLATE = 'DRAFT_MESSAGE_TEMPLATE',
  ANALYZE_PACKAGE_VALUE = 'ANALYZE_PACKAGE_VALUE',
}

export interface Task {
  description: string;
  subtasks?: string[];
  geminiAction?: {
    type: GeminiActionType;
    label: string;
    promptContext: string;
  };
}

export interface DayData {
  week: number;
  day: number;
  title: string;
  objective: string;
  tasks: Task[];
  reflectionPrompt: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
