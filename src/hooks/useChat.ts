import { useState, useCallback } from 'react';
import { Message, ChatSession, AIMode } from '../types';

export const useChat = () => {
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: '1',
      title: 'Welcome Chat',
      timestamp: 'Just now',
      messages: []
    }
  ]);
  const [currentChatId, setCurrentChatId] = useState('1');
  const [currentMode, setCurrentMode] = useState<AIMode>('general');
  const [isTyping, setIsTyping] = useState(false);

  const currentChat = chatSessions.find(session => session.id === currentChatId);

  const generateResponse = (userMessage: string, mode: AIMode): string => {
    // Simulate different AI responses based on mode
    const responses = {
      general: [
        "That's an interesting question! Let me help you with that.",
        "I understand what you're asking. Here's what I think...",
        "Great question! Based on my knowledge, I can tell you that...",
        "I'm happy to help you with that. Let me break it down for you."
      ],
      support: [
        "I understand your concern and I'm here to help resolve this issue.",
        "Thank you for reaching out. Let me assist you with this problem.",
        "I can definitely help you with that. Let me guide you through the solution.",
        "I appreciate you contacting support. Here's how we can fix this..."
      ],
      assistant: [
        "I'd be happy to help you stay organized with that task.",
        "Let me help you manage that efficiently.",
        "I can assist you with planning and organizing this.",
        "Great! I'll help you structure this in a way that works best for you."
      ],
      expert: [
        "Based on current research and best practices, here's what I can tell you...",
        "From an expert perspective, this is a complex topic that involves...",
        "Let me provide you with some detailed insights on this subject...",
        "This is an excellent question that touches on several important aspects..."
      ]
    };

    const modeResponses = responses[mode];
    const randomResponse = modeResponses[Math.floor(Math.random() * modeResponses.length)];
    
    return `${randomResponse} (This is a demo response. In a real implementation, this would connect to your chosen AI API like Hugging Face, Rasa, or a custom backend.)`;
  };

  const sendMessage = useCallback(async (content: string) => {
    if (!currentChat) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatSessions(prev => prev.map(session => 
      session.id === currentChatId 
        ? {
            ...session,
            messages: [...session.messages, userMessage],
            title: session.messages.length === 0 ? content.slice(0, 50) + (content.length > 50 ? '...' : '') : session.title,
            timestamp: 'Just now'
          }
        : session
    ));

    // Simulate typing
    setIsTyping(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Add AI response
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: generateResponse(content, currentMode),
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatSessions(prev => prev.map(session => 
      session.id === currentChatId 
        ? {
            ...session,
            messages: [...session.messages, aiMessage]
          }
        : session
    ));

    setIsTyping(false);
  }, [currentChatId, currentChat, currentMode]);

  const createNewChat = useCallback(() => {
    const newChat: ChatSession = {
      id: Date.now().toString(),
      title: 'New Chat',
      timestamp: 'Just now',
      messages: []
    };

    setChatSessions(prev => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
  }, []);

  const selectChat = useCallback((chatId: string) => {
    setCurrentChatId(chatId);
  }, []);

  const changeMode = useCallback((mode: AIMode) => {
    setCurrentMode(mode);
  }, []);

  return {
    chatSessions,
    currentChat,
    currentChatId,
    currentMode,
    isTyping,
    sendMessage,
    createNewChat,
    selectChat,
    changeMode
  };
};