'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Sparkles, Zap } from 'lucide-react';

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
        className={`fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 text-white rounded-full flex items-center justify-center shadow-[0_20px_60px_-12px_rgba(56,189,248,0.6)] hover:shadow-[0_25px_80px_-15px_rgba(56,189,248,0.8)] transition-all hover:scale-110 z-50 ${isOpen ? 'hidden' : 'flex'} border border-cyan-300/30`}
      >
        <Sparkles className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
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
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] bg-slate-900/95 rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] z-50 flex flex-col border border-white/10 overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">TripBooking AI Assistant</h3>
                  <p className="text-[11px] text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Online & ready to help
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-950/50 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-cyan-500 text-white' : 'bg-slate-800/80 text-cyan-300 border border-cyan-400/30'}`}>
                      {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${msg.sender === 'user' ? 'bg-cyan-500 text-white rounded-tr-none' : 'bg-slate-800/60 border border-white/10 text-slate-200 rounded-tl-none shadow-sm backdrop-blur-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%] flex-row">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-800/80 text-cyan-300 border border-cyan-400/30">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-800/60 border border-white/10 text-slate-200 rounded-tl-none shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900/80 border-t border-white/10 backdrop-blur-sm">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about destinations, budget..."
                  className="w-full bg-slate-800/60 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm focus:bg-slate-800 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all text-white placeholder:text-slate-400 backdrop-blur-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1 w-10 h-10 flex items-center justify-center bg-cyan-500 text-white rounded-full hover:bg-cyan-400 disabled:opacity-50 disabled:hover:bg-cyan-500 transition-colors"
                >
                  <Send className="w-4 h-4 -ml-0.5" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-400">Powered by TripBooking AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
