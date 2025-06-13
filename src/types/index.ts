export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  title: string;
  timestamp: string;
  messages: Message[];
}

export type AIMode = 'general' | 'support' | 'assistant' | 'expert';