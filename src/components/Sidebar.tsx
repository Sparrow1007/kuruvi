import React from 'react';
import { 
  MessageCircle, 
  Settings, 
  Download, 
  Sun, 
  Moon, 
  HelpCircle,
  Bot,
  User,
  Briefcase,
  GraduationCap,
  Plus
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentMode: string;
  onModeChange: (mode: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  chatSessions: Array<{ id: string; title: string; timestamp: string }>;
  onNewChat: () => void;
  onSelectChat: (id: string) => void;
  currentChatId: string;
}

const modes = [
  { id: 'general', name: 'General Q&A', icon: MessageCircle, description: 'General questions and conversations' },
  { id: 'support', name: 'Customer Support', icon: HelpCircle, description: 'Customer service assistance' },
  { id: 'assistant', name: 'Personal Assistant', icon: User, description: 'Personal productivity help' },
  { id: 'expert', name: 'Domain Expert', icon: GraduationCap, description: 'Specialized knowledge areas' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  currentMode,
  onModeChange,
  isDarkMode,
  onThemeToggle,
  chatSessions,
  onNewChat,
  onSelectChat,
  currentChatId
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h1 className="font-semibold text-gray-900">Kuruvi AI</h1>
              </div>
              <button
                onClick={onNewChat}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <Plus className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Chat Sessions */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-6">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Recent Chats</h3>
              <div className="space-y-2">
                {chatSessions.map((session) => (
                  <button
                    key={session.id}
                    onClick={() => onSelectChat(session.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                      currentChatId === session.id 
                        ? 'bg-blue-50 border border-blue-200' 
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <div className="font-medium text-sm text-gray-900 truncate">{session.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{session.timestamp}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Modes */}
            <div className="mb-6">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">AI Modes</h3>
              <div className="space-y-2">
                {modes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => onModeChange(mode.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                        currentMode === mode.id 
                          ? 'bg-purple-50 border border-purple-200' 
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${
                          currentMode === mode.id ? 'text-purple-600' : 'text-gray-500'
                        }`} />
                        <div>
                          <div className="font-medium text-sm text-gray-900">{mode.name}</div>
                          <div className="text-xs text-gray-500">{mode.description}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-gray-200 space-y-2">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <Download className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Export Chat</span>
            </button>
            <button 
              onClick={onThemeToggle}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-gray-500" /> : <Moon className="w-4 h-4 text-gray-500" />}
              <span className="text-sm text-gray-700">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <Settings className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};