import React, { useState } from 'react';
import { AIBuilderState, PageContent } from './types';
import { PreviewEngine } from './PreviewEngine';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, MessageSquare, Plus, Sparkles, Send, Layout, Type, Palette } from 'lucide-react';

interface AIEditorProps {
  state: AIBuilderState;
  setState: (state: AIBuilderState) => void;
  onExit: () => void;
}

export function AIEditor({ state, setState, onExit }: AIEditorProps) {
  const [chatInput, setChatInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'ai', text: string}[]>([
    { role: 'ai', text: 'Studio initialized. What would you like to change?' }
  ]);

  const handlePageSelect = (pageId: string) => {
    setState({ ...state, currentPageId: pageId });
  };

  const handleAddPage = () => {
    const newId = `page-${Date.now()}`;
    const newPage: PageContent = {
      id: newId,
      name: `New Page ${state.pages.length + 1}`,
      headline: 'A Blank Canvas',
      subheadline: 'Ready for your ideas.',
    };
    setState({
      ...state,
      pages: [...state.pages, newPage],
      currentPageId: newId,
    });
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setChatInput('');
    setIsProcessing(true);

    // Simulate AI processing and updating the state
    setTimeout(() => {
      const currentPage = state.pages.find(p => p.id === state.currentPageId);
      if (currentPage) {
        // Simple mocked intelligence
        const newHeadline = userMessage.length > 20 ? 'Detailed Vision' : userMessage;
        
        const updatedPages = state.pages.map(p => {
          if (p.id === state.currentPageId) {
            return { ...p, headline: newHeadline, subheadline: 'Updated by gravit-engine based on your prompt.' };
          }
          return p;
        });

        setState({ ...state, pages: updatedPages });
        setMessages(prev => [...prev, { role: 'ai', text: `I've updated the headline on the ${currentPage.name} page to reflect your request.` }]);
      }
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background text-primary flex flex-col font-sans">
      
      {/* Top Navigation Bar */}
      <header className="h-14 border-b border-border flex items-center justify-between px-4 bg-background">
        <div className="flex items-center gap-4">
          <button onClick={onExit} className="text-secondary hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
            ← Exit
          </button>
          <div className="h-4 w-px bg-border" />
          <div className="font-mono text-xs text-secondary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Studio Server Connected
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary px-3 py-1">
            Preview
          </button>
          <button className="bg-primary text-background px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors">
            Publish
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar - Pages & Structure */}
        <aside className="w-64 border-r border-border bg-primary/[0.02] flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
              <Layers className="w-4 h-4" /> Site Structure
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-1">
              {state.pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => handlePageSelect(page.id)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-colors flex items-center justify-between group ${
                    state.currentPageId === page.id 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-secondary hover:bg-primary/5 hover:text-primary'
                  }`}
                >
                  <span className="truncate">{page.name}</span>
                  {state.currentPageId === page.id && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
              ))}
            </div>
            
            <button 
              onClick={handleAddPage}
              className="mt-4 w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary border border-dashed border-border hover:border-primary/50 transition-colors rounded-sm"
            >
              <Plus className="w-3 h-3" /> Add Page
            </button>
          </div>

          <div className="p-4 border-t border-border">
            <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Global Styles</h2>
            <div className="flex gap-2">
               <div className="flex-1 border border-border p-2 rounded-sm flex items-center justify-center text-xs gap-2 hover:bg-primary/5 cursor-pointer transition-colors"><Palette className="w-3 h-3"/> {state.palette}</div>
               <div className="flex-1 border border-border p-2 rounded-sm flex items-center justify-center text-xs gap-2 hover:bg-primary/5 cursor-pointer transition-colors"><Type className="w-3 h-3"/> {state.font}</div>
            </div>
          </div>
        </aside>

        {/* Central Canvas */}
        <main className="flex-1 bg-primary/5 relative overflow-hidden flex flex-col">
           {/* Canvas Toolbar */}
           <div className="h-10 border-b border-border bg-background flex items-center px-4 justify-center gap-4">
              <button className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-sm">Desktop</button>
              <button className="text-xs text-secondary hover:text-primary transition-colors px-2 py-1">Tablet</button>
              <button className="text-xs text-secondary hover:text-primary transition-colors px-2 py-1">Mobile</button>
           </div>
           
           <div className="flex-1 p-8 overflow-y-auto flex items-start justify-center">
             <div className="w-full max-w-5xl">
                <PreviewEngine state={state} isEditorMode={true} />
             </div>
           </div>
        </main>

        {/* Right Sidebar - AI Chat */}
        <aside className="w-80 border-l border-border bg-background flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-primary">
              <Sparkles className="w-4 h-4" /> gravit-engine
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-background rounded-tr-sm' 
                      : 'bg-primary/5 text-primary rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isProcessing && (
                 <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="flex justify-start"
               >
                 <div className="max-w-[85%] rounded-lg p-3 text-sm bg-primary/5 text-primary rounded-tl-sm flex items-center gap-2">
                   <div className="flex gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0ms' }}/>
                     <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '150ms' }}/>
                     <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '300ms' }}/>
                   </div>
                 </div>
               </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-4 border-t border-border">
            <form onSubmit={handleChatSubmit} className="relative">
              <input 
                type="text" 
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                placeholder="Ask AI to change something..." 
                className="w-full bg-primary/5 border border-border rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="submit" 
                disabled={!chatInput.trim() || isProcessing}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-primary hover:bg-primary/10 rounded-full transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-secondary text-center mt-2 uppercase tracking-widest font-mono">
              Press Enter to send
            </p>
          </div>
        </aside>

      </div>
    </div>
  );
}
