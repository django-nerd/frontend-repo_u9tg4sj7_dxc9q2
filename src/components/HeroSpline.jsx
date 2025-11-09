import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSpline = () => {
  return (
    <section className="relative w-full h-[360px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-2xl border border-zinc-800/60 bg-black">
      <Spline
        scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft gradient overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-end p-6 sm:p-8">
        <div className="text-white max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Interactive Strategic Dashboard
          </h1>
          <p className="mt-2 text-sm sm:text-base text-zinc-300">
            A dark, futuristic data experience for executive insights — powered by real‑time filters, drill‑downs, and exportable views.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
