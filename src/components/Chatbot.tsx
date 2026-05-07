import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { cn } from '../lib/utils';

export default function Chatbot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Hello! I am your WAHTEM AI assistant. How can I help you with your biodigester or engineering project today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => scrollToBottom(), [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `You are WAHTEM AI, a consultant for WAHTEM EPOXY & BIOTECH ENGINEERING, an engineering firm in Cameroon.
          Expertise: Biodigesters, Biogas, Waste management, Epoxy flooring, Biotech engineering.
          Tone: Professional, helpful, expert, African branding.
          Location: Based in Cameroon, servicing Africa.
          Current Language: ${language}.
          Contact: +237 6 77 54 22 40, fwahtem@gmail.com.
          Answer this user query accurately: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are a professional assistant for WAHTEM engineering. Be concise and technical but approachable. Always mention that a consultation can be booked on the website if relevant."
        }
      });

      const botContent = response.text || "I'm sorry, I encountered an error. Please contact us directly at +237 6 77 54 22 40.";
      setMessages(prev => [...prev, { role: 'bot', content: botContent }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', content: "Our AI is currently undergoing maintenance. Please reach out via WhatsApp at +237 6 77 54 22 40 for immediate assistance." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass shadow-2xl rounded-[32px] overflow-hidden flex flex-col flex-nowrap"
          >
            {/* Header */}
            <div className="bg-brand-forest p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center text-brand-forest">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">WAHTEM Assistant</h4>
                  <p className="text-[10px] opacity-70 tracking-widest uppercase">AI Engineering Agent</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 flex flex-col flex-nowrap overflow-x-hidden">
              {messages.map((m, i) => (
                <div key={i} className={cn(
                  "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed",
                  m.role === 'user' ? "bg-brand-forest text-white self-end rounded-tr-none" : "bg-slate-100 text-slate-800 self-start rounded-tl-none prose prose-slate"
                )}>
                  {m.role === 'bot' ? (
                    <div className="markdown-body">
                      <Markdown>{m.content}</Markdown>
                    </div>
                  ) : m.content}
                </div>
              ))}
              {isTyping && (
                <div className="bg-slate-100 text-slate-800 self-start p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-forest" />
                  <span className="text-xs font-medium">Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 glass border-t border-brand-forest/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about biodigesters..."
                className="flex-1 bg-white px-4 py-2 rounded-full text-sm outline-none border border-slate-200 focus:border-brand-lime"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="w-10 h-10 bg-brand-forest text-white rounded-full flex items-center justify-center hover:bg-brand-deep disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-forest text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7 group-hover:rotate-12" />}
      </button>
    </div>
  );
}
