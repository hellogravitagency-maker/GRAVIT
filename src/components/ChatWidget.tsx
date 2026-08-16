import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GRAVIT_SYSTEM_PROMPT } from '../lib/ai-training';

// Dummy edit to trigger Vite HMR
interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial', role: 'model', text: 'Initialize GRAVIT Support Protocol. How may I direct your inquiry today?' }
  ]);
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
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    
    const newMessages = [...messages, { id: Date.now().toString(), role: 'user' as const, text: userMsg }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      // Format history for the Gemini API
      const history = messages
        .filter(m => m.id !== 'initial') // Skip initial greeting as it's not strictly part of the training memory loop
        .map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        }));

      // Call Gemini API directly via fetch to avoid SDK browser build issues
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error("Missing API Key");

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            ...history,
            { role: 'user', parts: [{ text: userMsg }] }
          ],
          systemInstruction: {
            parts: [{ text: GRAVIT_SYSTEM_PROMPT }]
          },
          generationConfig: {
            temperature: 0.3
          }
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Connection interrupted. Please try again.";
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "System fault: Communication array offline. Please email hellogravit.agency@gmail.com directly."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ffffff] animate-pulse"></div>
                <span className="text-white font-bold tracking-widest text-xs uppercase font-mono">GRAVIT AI</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              className="flex-1 overflow-y-auto overscroll-contain p-6 space-y-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              data-lenis-prevent="true"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-2">
                    {msg.role === 'user' ? 'CLIENT' : 'SYSTEM'}
                  </span>
                  <div 
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'bg-[#ffffff] text-black rounded-tr-sm' 
                        : 'bg-white/5 border border-white/10 text-white rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-2">SYSTEM</span>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                    <Loader2 size={16} className="text-[#ffffff] animate-spin" />
                    <span className="text-white/50 text-xs font-mono uppercase tracking-widest">Processing</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-black/40">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Transmit query..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-5 pr-12 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors font-mono"
                  disabled={isTyping}
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 p-2 bg-white text-black rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                  aria-label="Send Message"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform relative"
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-[#ffffff] rounded-full border-2 border-black"></span>
        )}
      </button>
    </div>
  );
}
