import React, { useState, useEffect } from 'react';
import { BarChart3, Globe, Search, Sun, Moon, Bookmark } from 'lucide-react';

const TopNav = ({ onToggleTheme, theme, activeTab, onSearch, onBookmark }) => {
  const [q, setQ] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => onSearch?.(q), 300);
    return () => clearTimeout(handler);
  }, [q, onSearch]);

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/60 border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2 text-zinc-200">
          <BarChart3 className="w-5 h-5" />
          <span className="font-semibold">Exec Dash</span>
        </div>

        <div className="hidden md:flex items-center gap-1 ml-4 text-sm text-zinc-300">
          <span className="px-2 py-1 rounded-md border border-zinc-800/60 bg-zinc-900/60">{activeTab}</span>
        </div>

        <div className="flex-1" />

        <div className="relative w-48 sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search content, creators, regions..."
            className="w-full pl-9 pr-3 py-2 text-sm rounded-md bg-zinc-900/70 border border-zinc-800/60 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
        </div>

        <button
          onClick={onBookmark}
          className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-zinc-900/70 border border-zinc-800/60 text-zinc-200 hover:bg-zinc-800/60"
        >
          <Bookmark className="w-4 h-4" />
          <span className="hidden sm:inline">Bookmark</span>
        </button>

        <button
          onClick={onToggleTheme}
          className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-zinc-900/70 border border-zinc-800/60 text-zinc-200 hover:bg-zinc-800/60"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};

export default TopNav;
