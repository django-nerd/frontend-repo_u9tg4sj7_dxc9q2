import React, { useMemo } from 'react';
import { ArrowUpRight, ArrowDownRight, Globe2, Users2, BarChart3, MapPin, TrendingUp, Network } from 'lucide-react';

const KPI = ({ label, value, delta }) => {
  const up = delta >= 0;
  return (
    <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="text-2xl font-semibold text-zinc-100">{value}</div>
        <div className={`text-xs inline-flex items-center gap-1 ${up ? 'text-emerald-400' : 'text-rose-400'}`}>
          {up ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
          {Math.abs(delta)}%
        </div>
      </div>
    </div>
  );
};

const PlaceholderChart = ({ title, subtitle, icon: Icon = BarChart3 }) => (
  <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm text-zinc-300 font-medium">{title}</div>
        {subtitle && <div className="text-xs text-zinc-500">{subtitle}</div>}
      </div>
      <Icon className="w-5 h-5 text-zinc-400" />
    </div>
    <div className="mt-4 h-40 w-full rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/60" />
    <div className="mt-3 text-xs text-zinc-500">Interactive chart placeholder</div>
  </div>
);

const DataTable = ({ items = [], title = 'Results' }) => {
  return (
    <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60">
      <div className="text-sm text-zinc-300 font-medium">{title}</div>
      <div className="mt-3 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-zinc-400">
              <th className="py-2 pr-6 font-medium">Title</th>
              <th className="py-2 pr-6 font-medium">Genre</th>
              <th className="py-2 pr-6 font-medium">Region</th>
              <th className="py-2 pr-6 font-medium">Year</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, i) => (
              <tr key={i} className="border-t border-zinc-800/60 text-zinc-200">
                <td className="py-2 pr-6">{row.title}</td>
                <td className="py-2 pr-6">{row.genre}</td>
                <td className="py-2 pr-6">{row.region}</td>
                <td className="py-2 pr-6">{row.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DashboardPanels = ({ activeTab, query }) => {
  const sample = useMemo(() => [
    { title: 'Neon Horizons', genre: 'Sci‑Fi', region: 'US', year: 2024 },
    { title: 'Emerald Lines', genre: 'Documentary', region: 'UK', year: 2023 },
    { title: 'Grid Echo', genre: 'Thriller', region: 'JP', year: 2022 },
    { title: 'Vector Drift', genre: 'Action', region: 'KR', year: 2024 },
  ].filter(r => !query || Object.values(r).join(' ').toLowerCase().includes(query.toLowerCase())), [query]);

  switch (activeTab) {
    case 'Executive Overview':
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <KPI label="Total Titles" value="12,480" delta={8.2} />
            <KPI label="YoY Growth" value="+14.6%" delta={3.1} />
            <KPI label="Diversity Index" value="78" delta={1.8} />
            <KPI label="Global Reach" value="92 countries" delta={2.4} />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <PlaceholderChart title="Performance Over Time" subtitle="Monthly views & engagement" icon={TrendingUp} />
            <PlaceholderChart title="Top Regions" subtitle="View share by country" icon={Globe2} />
            <PlaceholderChart title="Audience Mix" subtitle="Demographics & segments" icon={Users2} />
          </div>
          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-sm font-medium text-emerald-300">Strategic recommendations preview</div>
            <ul className="mt-2 text-sm text-emerald-200 list-disc pl-5 space-y-1">
              <li>Accelerate investment in high‑growth Sci‑Fi and Thriller markets.</li>
              <li>Expand localization across APAC where engagement outpaces catalog size.</li>
              <li>Prioritize diverse creator pipelines to sustain the rising inclusion index.</li>
            </ul>
          </div>
        </div>
      );

    case 'Content Explorer':
      return (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <PlaceholderChart title="Filters & Quick Facts" subtitle="Dynamic counts update in real‑time" />
            <PlaceholderChart title="Sort & Compare" subtitle="Multi‑criteria exploration" />
            <PlaceholderChart title="Export Center" subtitle="CSV / PNG / PDF" />
          </div>
          <DataTable items={sample} title={`Results (${sample.length})`} />
        </div>
      );

    case 'Trend Intelligence':
      return (
        <div className="space-y-4">
          <PlaceholderChart title="Interactive Time‑Series" subtitle="Zoom, pan, and compare" icon={TrendingUp} />
          <div className="grid md:grid-cols-2 gap-4">
            <PlaceholderChart title="Seasonality" subtitle="Monthly/weekly patterns" />
            <PlaceholderChart title="Growth Projections" subtitle="12‑month outlook" />
          </div>
        </div>
      );

    case 'Geographic Insights':
      return (
        <div className="space-y-4">
          <PlaceholderChart title="Interactive World Map" subtitle="Drill into regions" icon={MapPin} />
          <div className="grid md:grid-cols-2 gap-4">
            <PlaceholderChart title="Country Comparison" />
            <PlaceholderChart title="Production Hubs" />
          </div>
        </div>
      );

    case 'Genre & Category':
      return (
        <div className="space-y-4">
          <PlaceholderChart title="Genre Explorer" />
          <div className="grid md:grid-cols-2 gap-4">
            <PlaceholderChart title="Co‑occurrence Matrix" />
            <PlaceholderChart title="Competitive Gap Analysis" />
          </div>
        </div>
      );

    case 'Creator & Talent Hub':
      return (
        <div className="space-y-4">
          <PlaceholderChart title="Collaboration Network" icon={Network} />
          <div className="grid md:grid-cols-2 gap-4">
            <PlaceholderChart title="Portfolio Analysis" />
            <PlaceholderChart title="Diversity Metrics" />
          </div>
        </div>
      );

    case 'Strategic Recs':
      return (
        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60">
            <div className="text-sm text-zinc-300 font-medium">Actionable insights summary</div>
            <ul className="mt-2 text-sm text-zinc-400 list-disc pl-5 space-y-1">
              <li>Allocate +15% budget to top‑performing regions with rising retention.</li>
              <li>Launch 3 pilot projects in under‑served genres to test demand.</li>
              <li>Scale partnerships with emerging studios across LATAM.</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <PlaceholderChart title="Priority Recommendations" />
            <PlaceholderChart title="Investment Opportunities" />
            <PlaceholderChart title="Risk Areas & Next Steps" />
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default DashboardPanels;
