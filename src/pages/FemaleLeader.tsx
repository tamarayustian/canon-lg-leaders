import {
  FEMALE_LEADER_NAME,
  femaleSubmissions,
  type Submission,
} from '@/data/submissions';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const photoGradients = [
  'linear-gradient(165deg, hsl(340 70% 88%), hsl(280 50% 78%))',
  'linear-gradient(165deg, hsl(25 80% 90%), hsl(340 60% 82%))',
  'linear-gradient(165deg, hsl(280 50% 85%), hsl(220 50% 80%))',
  'linear-gradient(165deg, hsl(35 85% 92%), hsl(18 75% 82%))',
  'linear-gradient(165deg, hsl(345 65% 85%), hsl(35 75% 88%))',
  'linear-gradient(165deg, hsl(260 45% 82%), hsl(330 60% 85%))',
];

const Photocard = ({
  s,
  i,
  showImages,
}: {
  s: Submission;
  i: number;
  showImages: boolean;
}) => {
  const rot = ((i * 37) % 7) - 3; // -3 to +3 deg
  const grad = photoGradients[i % photoGradients.length];
  const iuImageNumber = (i % 20) + 1; // Cycles through iu-1.jpg to iu-20.jpg

  return (
    <article className="iu-card" style={{ transform: `rotate(${rot}deg)` }}>
      <div
        className={showImages && s.imageUrl ? 'iu-photo-image' : 'iu-photo'}
        style={{ background: grad }}
      >
        {showImages && s.imageUrl ? (
          <div className="relative">
            <img
              src={s.imageUrl}
              alt={`Photo from ${s.member}`}
              className="w-full h-auto rounded-lg"
              style={{
                minHeight: '200px',
                maxHeight: '400px',
                objectFit: 'contain',
              }}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={`/iu/iu-${iuImageNumber}.jpg`}
              alt={`IU ${iuImageNumber}`}
              className="w-48 h-48 rounded-full object-cover"
              style={{
                border: '3px solid hsl(var(--iu-ink) / 0.3)',
                boxShadow: '0 4px 20px hsl(0 0% 0% / 0.3)',
              }}
            />
          </div>
        )}
        <div
          className="iu-sparkle"
          style={{ top: '15%', left: '20%', animationDelay: `${i * 0.3}s` }}
        />
        <div
          className="iu-sparkle"
          style={{
            top: '60%',
            right: '15%',
            animationDelay: `${i * 0.3 + 1}s`,
          }}
        />
        <div
          className="iu-sparkle"
          style={{
            bottom: '20%',
            left: '30%',
            animationDelay: `${i * 0.3 + 2}s`,
          }}
        />

        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
          <span className="iu-hangul text-[10px] text-white/90 tracking-widest">
            매우 감사합니다
          </span>
          <span className="iu-serif text-[10px] text-white/90 italic">
            no. {String(i + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="pt-4 px-1">
        <p
          className="iu-serif uppercase tracking-[0.35em] text-[10px] mb-1"
          style={{ color: 'hsl(var(--iu-lilac-deep))' }}
        >
          from {s.member}
        </p>
        <h3
          className="iu-title text-2xl leading-tight mb-2"
          style={{ color: 'hsl(var(--iu-ink))' }}
        >
          {s.trait}
        </h3>
        <p
          className="iu-serif text-[13px] leading-relaxed italic mb-3"
          style={{ color: 'hsl(var(--iu-ink) / 0.75)' }}
        >
          "{s.memory}"
        </p>
        <div
          className="border-t pt-3 mt-2 text-[12px] leading-relaxed"
          style={{
            borderColor: 'hsl(var(--iu-ink) / 0.15)',
            color: 'hsl(var(--iu-ink) / 0.85)',
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {s.message}
        </div>
      </div>
    </article>
  );
};

const FemaleLeader = () => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    document.title = `Thank You, ${FEMALE_LEADER_NAME} — A Photocard Collection`;
  }, []);

  const toggleImages = () => {
    setShowImages(!showImages);
  };

  const petals = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        left: `${(i * 8.3) % 100}%`,
        duration: `${10 + (i % 5) * 2}s`,
        delay: `${i * 1.3}s`,
        scale: 0.7 + (i % 4) * 0.2,
      })),
    []
  );

  return (
    <main className="iu-page min-h-screen relative">
      {petals.map((p, i) => (
        <span
          key={i}
          className="iu-petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            transform: `scale(${p.scale})`,
          }}
        />
      ))}

      <header className="container mx-auto px-6 pt-10 pb-4 flex gap-x-2 items-center justify-between relative z-10">
        <Link
          to="/"
          className="iu-serif text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full"
          style={{
            background: 'hsl(var(--iu-ink))',
            color: 'hsl(var(--iu-cream))',
          }}
        >
          ← back
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleImages}
            className="iu-serif text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full transition-all"
            style={{
              background: 'hsl(var(--iu-ink))',
              color: 'hsl(var(--iu-cream))',
            }}
          >
            {showImages ? 'hide photos' : 'show photos'} ♡
          </button>
          <span
            className="iu-hangul text-sm"
            style={{ color: 'hsl(var(--iu-lilac-deep))' }}
          >
            작은 모임 ♡
          </span>
        </div>
      </header>

      <section className="container mx-auto px-6 py-16 text-center relative z-10">
        <p
          className="iu-serif uppercase tracking-[0.5em] text-[11px] mb-6"
          style={{ color: 'hsl(var(--iu-lilac-deep))' }}
        >
          A Photocard Collection
        </p>
        <h1
          className="iu-title text-5xl md:text-7xl mb-6"
          style={{ color: 'hsl(var(--iu-ink))' }}
        >
          Dear {FEMALE_LEADER_NAME},
        </h1>
        <p
          className="iu-serif italic text-lg md:text-xl max-w-xl mx-auto"
          style={{ color: 'hsl(var(--iu-ink) / 0.75)' }}
        >
          twenty soft notes, gathered like petals — every one of them yours.
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <span className="text-2xl">✦</span>
          <span className="text-2xl">♡</span>
          <span className="text-2xl">✦</span>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 max-w-7xl mx-auto">
          {femaleSubmissions.map((s, i) => (
            <Photocard key={s.member} s={s} i={i} showImages={showImages} />
          ))}
        </div>
      </section>

      <footer className="text-center pb-12 relative z-10">
        <p
          className="iu-serif italic text-sm"
          style={{ color: 'hsl(var(--iu-ink) / 0.6)' }}
        >
          made with so much love, from all of us ♡
        </p>
      </footer>
    </main>
  );
};

export default FemaleLeader;
