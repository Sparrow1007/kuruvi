import React from 'react';
import { Menu, Bot, MoreVertical } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  currentMode: string;
}

const modeDisplayNames = {
  general: 'General Q&A',
  support: 'Customer Support',
  assistant: 'Personal Assistant',
  expert: 'Domain Expert'
};

export const Header: React.FC<HeaderProps> = ({ onMenuClick, currentMode }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 lg:hidden"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center lg:hidden">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">Kuruvi AI</h1>
              <p className="text-xs text-gray-500">{modeDisplayNames[currentMode as keyof typeof modeDisplayNames]}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-green-700">Online</span>
          </div>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};