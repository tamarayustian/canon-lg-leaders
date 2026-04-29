import { MALE_LEADER_NAME, maleSubmissions, type Submission } from '@/data/submissions';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const typeColors = [
  { name: 'FIRE', bg: '354 80% 52%', emoji: '🔥' },
  { name: 'WATER', bg: '215 90% 48%', emoji: '💧' },
  { name: 'GRASS', bg: '140 65% 40%', emoji: '🌿' },
  { name: 'ELECTRIC', bg: '48 100% 50%', emoji: '⚡' },
  { name: 'PSYCHIC', bg: '300 65% 55%', emoji: '✨' },
  { name: 'FIGHTING', bg: '20 75% 45%', emoji: '👊' },
];

const TrainerCard = ({ s, i }: { s: Submission; i: number }) => {
  const t = typeColors[i % typeColors.length];
  const hp = 80 + ((i * 17) % 80);
  return (
    <article className="pkm-card w-full max-w-[340px] mx-auto">
      <div className="pkm-frame">
        {/* Header */}
        <div className="flex items-center justify-between px-3 pt-2 pb-1">
          <h3 className="font-bold text-[hsl(var(--pkm-ink))] text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            {s.member}
          </h3>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold text-[hsl(var(--pkm-ink))]">HP</span>
            <span className="text-xl font-extrabold text-[hsl(var(--pkm-red))]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {hp}
            </span>
            <span className="ml-1 w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 border-[hsl(var(--pkm-ink))]" style={{ background: `hsl(${t.bg})` }} title={t.name}>
              {t.emoji}
            </span>
          </div>
        </div>

        {/* Art */}
        <div className="pkm-art mx-2 rounded-md">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center text-5xl pkm-float"
              style={{
                background: `radial-gradient(circle at 30% 30%, white, hsl(${t.bg}))`,
                boxShadow: `0 10px 24px hsl(${t.bg} / 0.6), inset 0 -8px 14px hsl(0 0% 0% / 0.2)`,
                border: '3px solid hsl(var(--pkm-ink))',
              }}
            >
              {t.emoji}
            </div>
          </div>
          <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[hsl(var(--pkm-ink))] bg-white/70 px-1.5 rounded">NO. {String(i + 1).padStart(3, '0')}</span>
        </div>

        {/* Trait as "move" */}
        <div className="px-3 py-2 border-y-2 border-[hsl(var(--pkm-ink))] mt-2 mx-2 bg-[hsl(48_60%_85%)]">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-[hsl(var(--pkm-ink))] uppercase text-sm tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.08em' }}>
              ✦ {s.trait}
            </span>
            <span className="text-xs font-bold text-[hsl(var(--pkm-ink))]">+{20 + (i % 4) * 10}</span>
          </div>
          <p className="text-[11px] leading-snug text-[hsl(var(--pkm-ink))] mt-1 italic">"{s.memory}"</p>
        </div>

        {/* Flavor text */}
        <div className="px-3 py-3 mx-2">
          <p className="text-[11px] leading-relaxed text-[hsl(var(--pkm-ink))]" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="italic">{s.message}</span>
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-3 pb-2 pt-1 mx-2 border-t border-[hsl(var(--pkm-ink))]/40">
          <span className="text-[9px] text-[hsl(var(--pkm-ink))]/70">CANON LG • 2026</span>
          <span className="text-[9px] font-bold text-[hsl(var(--pkm-ink))]">★ RARE HOLO</span>
        </div>
      </div>
    </article>
  );
};

const MaleLeader = () => {
  const [shuffled, setShuffled] = useState(maleSubmissions);

  useEffect(() => {
    document.title = `Thank You, ${MALE_LEADER_NAME} — Trainer Card Collection`;
  }, []);

  const shuffle = () => {
    setShuffled([...shuffled].sort(() => Math.random() - 0.5));
  };

  return (
    <main className="pkm-page min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-6 pt-10 pb-6 flex items-center justify-between">
        <Link to="/" className="pkm-badge px-3 py-2 text-[10px]">
          ← BACK
        </Link>
        <button onClick={shuffle} className="pkm-badge px-3 py-2 text-[10px]">
          SHUFFLE DECK
        </button>
      </header>

      <section className="container mx-auto px-6 py-10 text-center">
        <p className="pkm-title text-[10px] md:text-xs text-[hsl(var(--pkm-yellow))] mb-6">A LEGENDARY COLLECTION</p>
        <h1 className="pkm-title text-3xl md:text-6xl text-white mb-6 uppercase">
          Thank you,
          <br />
          {MALE_LEADER_NAME}
        </h1>
        <p className="max-w-xl mx-auto text-white/85 text-sm md:text-base">20 trainer cards from your LIFE Group. Each one a trait, a memory, a message — all for you.</p>
        <div className="flex justify-center mt-8">
          <div className="pokeball pkm-float" />
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {shuffled.map((s, i) => (
            <TrainerCard key={s.member} s={s} i={i} />
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-white/60 pkm-title">★ COLLECT ALL 20 ★</footer>
    </main>
  );
};

export default MaleLeader;
