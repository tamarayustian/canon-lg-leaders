import { FEMALE_LEADER_NAME, MALE_LEADER_NAME } from '@/data/submissions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    document.title = 'Thank You, Leaders — A Small Group Tribute';
    const meta =
      document.querySelector('meta[name="description"]') ??
      (() => {
        const m = document.createElement('meta');
        m.setAttribute('name', 'description');
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute('content', 'A heartfelt thank-you from our small group to two leaders who shaped us.');
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-6 py-20 md:py-28 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">From your small group</p>
        <h1 className="text-5xl md:text-7xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Thank you, leaders.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-14">Two people. Twenty hearts. One huge thank-you. Pick a leader to read what we wrote.</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link
            to="/leader/makoto"
            className="group relative overflow-hidden rounded-2xl p-10 text-left transition-transform hover:-translate-y-2"
            style={{
              background: 'var(--gradient-pkm-sky)',
              boxShadow: '0 20px 50px -20px hsl(354 80% 30% / 0.5)',
              minHeight: 360,
            }}
          >
            <div className="absolute -top-6 -right-6 pkm-float">
              <div className="pokeball" />
            </div>
            <p className="pkm-title text-xs text-white/90 mb-6">CHOOSE YOUR LEADER</p>
            <h2 className="pkm-title text-3xl md:text-4xl text-white mb-4">{MALE_LEADER_NAME}</h2>
            <p className="text-white/90 max-w-sm">A collection of trainer cards from your small group. Gotta read 'em all.</p>
            <span className="absolute bottom-8 left-10 pkm-badge inline-block px-4 py-2 text-xs">ENTER →</span>
          </Link>

          <Link
            to="/leader/leena"
            className="group relative overflow-hidden rounded-2xl p-10 text-left transition-transform hover:-translate-y-2"
            style={{
              background: 'var(--gradient-iu-sky)',
              boxShadow: 'var(--shadow-iu-card)',
              minHeight: 360,
            }}
          >
            <div className="absolute top-6 right-8 iu-sparkle" style={{ width: 10, height: 10 }} />
            <div className="absolute top-20 right-20 iu-sparkle" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-24 right-16 iu-sparkle" style={{ animationDelay: '2s' }} />
            <p className="iu-serif uppercase tracking-[0.4em] text-xs mb-6" style={{ color: 'hsl(var(--iu-ink))' }}>
              A photocard collection
            </p>
            <h2 className="iu-title text-4xl md:text-5xl mb-4" style={{ color: 'hsl(var(--iu-ink))' }}>
              {FEMALE_LEADER_NAME}
            </h2>
            <p className="iu-serif text-lg" style={{ color: 'hsl(var(--iu-ink) / 0.75)' }}>
              Soft notes, warm memories, and twenty thank-yous wrapped like petals.
            </p>
            <span className="absolute bottom-8 left-10 inline-block px-5 py-2 rounded-full text-xs tracking-widest uppercase" style={{ background: 'hsl(var(--iu-ink))', color: 'hsl(var(--iu-cream))' }}>
              Open ✦
            </span>
          </Link>
        </div>

        <p className="mt-16 text-sm text-muted-foreground iu-serif italic">made with love by your CANON LIFE Group ♡</p>
      </section>
    </main>
  );
};

export default Index;
