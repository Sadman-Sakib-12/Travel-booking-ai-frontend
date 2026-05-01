'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

const INITIAL_MESSAGE: Message = {
  id: '1',
  sender: 'bot',
  text: 'Hi there! 👋 I am your AI Travel Assistant. Ask me anything about your next trip, like "Best places in Bangladesh" or "Suggest a budget trip".',
};

export default function FloatingAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponseText = "I can help you plan your trip! Try our AI Trip Planner for a complete itinerary.";
      const lowerInput = userMsg.text.toLowerCase();

      if (lowerInput.includes('best places') || lowerInput.includes('bangladesh')) {
        botResponseText = "Here are some of the best places to visit in Bangladesh:\n\n🏖️ Cox's Bazar (Longest sea beach)\n🐅 Sundarbans (Mangrove forest)\n🍃 Sylhet (Tea gardens & waterfalls)\n⛰️ Bandarban (Hills & tribal culture)";
      } else if (lowerInput.includes('budget') || lowerInput.includes('cheap')) {
        botResponseText = "For a budget-friendly trip, I recommend Bandarban or Sreemangal! Both offer amazing natural beauty with very affordable accommodation and food.";
      } else if (lowerInput.includes('cox')) {
        botResponseText = "Cox's Bazar is an excellent choice! I can generate a 3-day itinerary for you in our AI Trip Planner.";
      }

      setMessages((prev) => [...prev, { id: Date.now().toString(), sender: 'bot', text: botResponseText }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-[#3554D1] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#2a43b0] transition-transform hover:scale-110 z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#3554D1] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">TripBooking AI Assistant</h3>
                  <p className="text-[11px] text-white/80">Online & ready to help</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-[#051036] text-white' : 'bg-[#3554D1]/10 text-[#3554D1]'}`}>
                      {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${msg.sender === 'user' ? 'bg-[#051036] text-white rounded-tr-none' : 'bg-white border border-gray-200 text-[#051036] rounded-tl-none shadow-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%] flex-row">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#3554D1]/10 text-[#3554D1]">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-gray-200 text-[#051036] rounded-tl-none shadow-sm flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about destinations, budget..."
                  className="w-full bg-gray-100 border-transparent rounded-full pl-4 pr-12 py-3 text-sm focus:bg-white focus:border-[#3554D1] focus:ring-1 focus:ring-[#3554D1] outline-none transition-all text-[#051036]"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1 w-10 h-10 flex items-center justify-center bg-[#3554D1] text-white rounded-full hover:bg-[#2a43b0] disabled:opacity-50 disabled:hover:bg-[#3554D1] transition-colors"
                >
                  <Send className="w-4 h-4 -ml-0.5" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-gray-400">Powered by TripBooking AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
