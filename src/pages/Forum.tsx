import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Users, Hash, Flame, Plus, Bell, Search, Star } from 'lucide-react';
import SEO from '../components/SEO';

const CATEGORIES = [
  { id: 'c1', name: 'Announcements', icon: Bell, unread: 2, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { id: 'c2', name: 'General Chat', icon: Hash, unread: 0, color: 'text-gray-400', bg: 'bg-gray-400/10' },
  { id: 'c3', name: 'Showcase', icon: Star, unread: 15, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { id: 'c4', name: 'Help & Support', icon: Users, unread: 0, color: 'text-blue-400', bg: 'bg-blue-400/10' },
];

const THREADS = [
  {
    title: "Best practices for Next.js App Router caching?",
    author: "frontend_ninja",
    avatar: "https://i.pravatar.cc/150?u=frontend_ninja",
    replies: 42,
    views: "1.2k",
    lastActive: "2m ago",
    tags: ["React", "Performance"],
    hot: true,
  },
  {
    title: "How I migrated 100k users to Supabase",
    author: "db_architect",
    avatar: "https://i.pravatar.cc/150?u=db_architect",
    replies: 128,
    views: "5.4k",
    lastActive: "15m ago",
    tags: ["Database", "Migration", "Case Study"],
    hot: true,
  },
  {
    title: "Framer Motion vs React Spring in 2026",
    author: "animation_freak",
    avatar: "https://i.pravatar.cc/150?u=animation_freak",
    replies: 15,
    views: "340",
    lastActive: "1h ago",
    tags: ["UI", "Animation"],
    hot: false,
  },
  {
    title: "Need help debugging this weird WebGL glitch",
    author: "graphics_guy",
    avatar: "https://i.pravatar.cc/150?u=graphics_guy",
    replies: 3,
    views: "42",
    lastActive: "4h ago",
    tags: ["Help", "WebGL"],
    hot: false,
  }
];

export default function Forum() {
  return (
    <div className="w-full bg-[#171821] text-[#c8c9ce] min-h-screen overflow-x-hidden font-sans selection:bg-[#5865F2] selection:text-white pt-24 pb-12">
      <SEO 
        title="Community Forum — GRAVIT" 
        description="Join the discussion with thousands of developers and designers." 
        path="/forum" 
      />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR (CATEGORIES) */}
        <motion.aside 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-64 flex-shrink-0"
        >
          <div className="bg-[#21222c] rounded-2xl p-4 sticky top-32 border border-[#2a2b36]">
            <button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl py-3 px-4 font-bold flex items-center justify-center gap-2 mb-6 transition-colors shadow-lg shadow-[#5865F2]/20">
              <Plus className="w-5 h-5" /> New Thread
            </button>

            <div className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#797b86] px-4 mb-3">Categories</h3>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-[#2a2b36] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cat.bg} ${cat.color}`}>
                      <cat.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-[#f8f8f2] group-hover:text-white">{cat.name}</span>
                  </div>
                  {cat.unread > 0 && (
                    <span className="bg-[#ed4245] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {cat.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-8 border-t border-[#2a2b36] pt-6">
              <div className="flex items-center gap-3 px-4">
                <div className="relative">
                  <img src="https://i.pravatar.cc/150?u=current_user" alt="User" className="w-10 h-10 rounded-full border-2 border-[#21222c]" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#3ba55c] border-2 border-[#21222c] rounded-full"></div>
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="font-bold text-[#f8f8f2] truncate text-sm">Guest_1337</div>
                  <div className="text-xs text-[#797b86] truncate">Online</div>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* MAIN FEED */}
        <main className="flex-1 min-w-0">
          
          {/* TOP BAR */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#21222c] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border border-[#2a2b36]"
          >
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-[#5865F2]" /> All Discussions
            </h1>
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-[#797b86]" />
              </div>
              <input 
                type="text" 
                placeholder="Search forum..."
                className="w-full bg-[#171821] text-[#f8f8f2] rounded-xl py-2 pl-9 pr-4 text-sm border border-transparent focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none transition-all placeholder:text-[#797b86]"
              />
            </div>
          </motion.div>

          {/* THREAD LIST */}
          <div className="space-y-3">
            {THREADS.map((thread, i) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                key={i}
                className="bg-[#21222c] rounded-2xl p-5 hover:bg-[#2a2b36] border border-[#2a2b36] transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <img src={thread.avatar} alt={thread.author} className="w-12 h-12 rounded-xl object-cover" />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-bold text-[#f8f8f2] group-hover:text-[#5865F2] transition-colors truncate">
                        {thread.title}
                      </h2>
                      {thread.hot && (
                        <Flame className="w-4 h-4 text-[#fee75c] flex-shrink-0 animate-pulse" />
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#797b86] mb-3">
                      <span className="font-medium text-[#99aab5]">@{thread.author}</span>
                      <span>•</span>
                      <span>{thread.lastActive}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {thread.tags.map(tag => (
                        <span key={tag} className="bg-[#171821] text-[#99aab5] px-2.5 py-1 rounded-lg text-xs font-medium border border-[#2a2b36]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end gap-2 text-sm text-[#797b86]">
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4" /> {thread.replies}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" /> {thread.views}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button className="text-[#5865F2] hover:text-white font-medium hover:underline">
              Load more threads...
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}
