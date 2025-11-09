import React from 'react';

const tabs = [
  'Executive Overview',
  'Content Explorer',
  'Trend Intelligence',
  'Geographic Insights',
  'Genre & Category',
  'Creator & Talent Hub',
  'Strategic Recs',
];

const Tabs = ({ active, onChange }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-2 min-w-max">
        {tabs.map((t) => {
          const isActive = active === t;
          return (
            <button
              key={t}
              onClick={() => onChange?.(t)}
              className={
                `px-3 sm:px-4 py-2 rounded-full text-sm border transition-colors ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                    : 'bg-zinc-900/60 text-zinc-300 border-zinc-800/60 hover:bg-zinc-800/60'
                }`
              }
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
