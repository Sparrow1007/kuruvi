import React from 'react';
import { Bot, Sparkles, MessageCircle, Zap } from 'lucide-react';

interface EmptyStateProps {
  currentMode: string;
  onSampleQuestion: (question: string) => void;
}

const sampleQuestions = {
  general: [
    "What's the weather like today?",
    "Explain quantum computing in simple terms",
    "Help me write a professional email",
    "What are some healthy breakfast ideas?"
  ],
  support: [
    "I need help with my account",
    "How do I reset my password?",
    "I'm having trouble with billing",
    "Can you guide me through setup?"
  ],
  assistant: [
    "Schedule a meeting for tomorrow",
    "Create a to-do list for this week",
    "Set a reminder for 3 PM",
    "Help me plan my day"
  ],
  expert: [
    "Explain machine learning basics",
    "Best practices for web development",
    "Investment strategies for beginners",
    "Latest trends in AI research"
  ]
};

const modeInfo = {
  general: {
    title: "General Q&A Assistant",
    description: "I'm here to help with any questions or conversations you'd like to have.",
    icon: MessageCircle
  },
  support: {
    title: "Customer Support Agent",
    description: "I can help you with account issues, troubleshooting, and general support questions.",
    icon: Sparkles
  },
  assistant: {
    title: "Your Personal Assistant",
    description: "Let me help you stay organized and productive with tasks, reminders, and planning.",
    icon: Zap
  },
  expert: {
    title: "Domain Expert",
    description: "I specialize in providing detailed insights and expert knowledge in various fields.",
    icon: Bot
  }
};

export const EmptyState: React.FC<EmptyStateProps> = ({ currentMode, onSampleQuestion }) => {
  const info = modeInfo[currentMode as keyof typeof modeInfo];
  const Icon = info.icon;
  const questions = sampleQuestions[currentMode as keyof typeof sampleQuestions];

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{info.title}</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">{info.description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => onSampleQuestion(question)}
              className="p-4 text-left bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-sm"
            >
              <p className="text-sm text-gray-700">{question}</p>
            </button>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Bot className="w-3 h-3" />
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Lightweight</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3" />
            <span>Fast Response</span>
          </div>
        </div>
      </div>
    </div>
  );
};