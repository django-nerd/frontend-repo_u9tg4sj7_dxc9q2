import React, { useEffect, useMemo, useState } from 'react';
import HeroSpline from './components/HeroSpline';
import TopNav from './components/TopNav';
import Tabs from './components/Tabs';
import DashboardPanels from './components/DashboardPanels';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('Executive Overview');
  const [query, setQuery] = useState('');
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const raw = localStorage.getItem('execdash.bookmarks');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('execdash.bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const pageKey = useMemo(() => ({ tab: activeTab, q: query }), [activeTab, query]);

  const handleBookmark = () => {
    const exists = bookmarks.find(b => b.tab === activeTab && b.q === query);
    if (!exists) setBookmarks([...bookmarks, pageKey]);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-500/30">
      <TopNav
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        theme={theme}
        activeTab={activeTab}
        onSearch={setQuery}
        onBookmark={handleBookmark}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <HeroSpline />

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-4">
            <Tabs active={activeTab} onChange={setActiveTab} />
            <DashboardPanels activeTab={activeTab} query={query} />
          </div>
          <aside className="md:w-72 space-y-3">
            <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60">
              <div className="text-sm font-medium text-zinc-300">Bookmarks</div>
              {bookmarks.length === 0 ? (
                <div className="mt-2 text-sm text-zinc-500">Save a view to access it quickly.</div>
              ) : (
                <ul className="mt-2 space-y-2">
                  {bookmarks.map((b, i) => (
                    <li key={i}>
                      <button
                        onClick={() => { setActiveTab(b.tab); setQuery(b.q); }}
                        className="w-full text-left px-3 py-2 rounded-md bg-zinc-900/60 border border-zinc-800/60 hover:bg-zinc-800/60 text-sm"
                      >
                        <div className="font-medium text-zinc-200 truncate">{b.tab}</div>
                        {b.q && <div className="text-xs text-zinc-500 truncate">“{b.q}”</div>}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60">
              <div className="text-sm font-medium text-zinc-300">Shareable Link</div>
              <div className="mt-2 text-xs text-zinc-400">Copy to share this view.</div>
              <button
                onClick={() => {
                  const url = new URL(window.location.href);
                  url.searchParams.set('tab', activeTab);
                  if (query) url.searchParams.set('q', query); else url.searchParams.delete('q');
                  navigator.clipboard.writeText(url.toString());
                }}
                className="mt-3 w-full px-3 py-2 rounded-md bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400"
              >
                Copy Link
              </button>
            </div>
          </aside>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-xs text-zinc-500">
        Data visualizations are interactive placeholders. Connect to your data to enable real‑time analytics, exports, and drill‑downs.
      </footer>
    </div>
  );
};

export default App;
