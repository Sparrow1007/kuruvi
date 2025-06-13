import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ChatBubble } from './components/ChatBubble';
import { ChatInput } from './components/ChatInput';
import { TypingIndicator } from './components/TypingIndicator';
import { EmptyState } from './components/EmptyState';
import { useChat } from './hooks/useChat';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    chatSessions,
    currentChat,
    currentChatId,
    currentMode,
    isTyping,
    sendMessage,
    createNewChat,
    selectChat,
    changeMode
  } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages, isTyping]);

  const handleSendMessage = (message: string) => {
    sendMessage(message);
    setSidebarOpen(false); // Close sidebar on mobile after sending
  };

  const handleSampleQuestion = (question: string) => {
    sendMessage(question);
  };

  return (
    <div className={`h-screen flex ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentMode={currentMode}
        onModeChange={changeMode}
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        chatSessions={chatSessions}
        onNewChat={createNewChat}
        onSelectChat={selectChat}
        currentChatId={currentChatId}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50 min-w-0">
        {/* Header */}
        <Header 
          onMenuClick={() => setSidebarOpen(true)}
          currentMode={currentMode}
        />

        {/* Chat Area */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {!currentChat?.messages.length ? (
              <EmptyState 
                currentMode={currentMode}
                onSampleQuestion={handleSampleQuestion}
              />
            ) : (
              <div className="p-4 space-y-4">
                {currentChat.messages.map((message) => (
                  <ChatBubble
                    key={message.id}
                    message={message.content}
                    isUser={message.isUser}
                    timestamp={message.timestamp}
                  />
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Chat Input */}
          <ChatInput 
            onSendMessage={handleSendMessage}
            isTyping={isTyping}
          />
        </div>
      </div>
    </div>
  );
}

export default App;