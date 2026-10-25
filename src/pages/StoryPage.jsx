import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, animate } from 'framer-motion';
import Shell, { GlossButton, ContactBlock } from '../components/Shell';
import { contact } from '../data/works';

const ease = [0.25, 0.46, 0.45, 0.94];

function Parallax({ src, alt, pos = '50% 50%', className = '', imgClass, still }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  return (
    <div ref={ref} className={`px ${className}`}>
      <motion.img src={src} alt={alt} className={`${imgClass || ''} ${still ? 'still' : ''}`} style={still ? { objectPosition: pos } : { y, objectPosition: pos }} loading="lazy" />
    </div>
  );
}

function Reveal({ children, delay = 0, as: Tag = 'div', className, style }) {
  const M = motion[Tag];
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </M>
  );
}

function CountUp({ to, suffix = '', label, group = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: 'easeOut',
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v).toLocaleString('en-US', { useGrouping: group }) + suffix; },
    });
    return () => controls.stop();
  }, [inView, to, suffix, group]);
  return (
    <div className="stat">
      <span className="stat-num display" ref={ref}>0{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Chapter({ n, kicker, title, children, photo, pos, flip, caption, landscape, tall, imgClass }) {
  return (
    <section className={`chapter ${flip ? 'flip' : ''} ${landscape ? 'landscape' : ''} ${tall ? 'tall' : ''}`}>
      <Reveal className="chapter-photo">
        <Parallax src={photo} alt={caption} pos={pos} imgClass={imgClass} still={tall} />
        <span className="chapter-cap">{caption}</span>
      </Reveal>
      <div className="chapter-text">
        <Reveal><p className="chapter-n">{n} <span>{kicker}</span></p></Reveal>
        <Reveal delay={0.08} as="h2" className="display chapter-title">{title}</Reveal>
        <Reveal delay={0.16}>{children}</Reveal>
      </div>
    </section>
  );
}

function Shot({ src, alt, cap }) {
  return (
    <Reveal as="figure" className="shot">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{cap}</figcaption>
    </Reveal>
  );
}

const SPOTIFY_TRACK = 'https://open.spotify.com/track/6HSXNV0b4M4cLJ7ljgVVeh';

function Music() {
  return (
    <section className="music">
      <Reveal className="music-card">
        <a className="cd" href={SPOTIFY_TRACK} target="_blank" rel="noopener noreferrer" aria-label="Open Knockin' on Heaven's Door on Spotify">
          <img src="/assets/story/knockin-cover.jpg" alt="Pat Garrett & Billy the Kid soundtrack cover" loading="lazy" />
        </a>
        <div className="music-text">
          <p className="eyebrow">Oh, I love music too</p>
          <h3 className="display">Here's a song suggestion. Hope you like it.</h3>
          <p className="music-by">Knockin' on Heaven's Door · Bob Dylan</p>
          <a className="btn-gloss" href={SPOTIFY_TRACK} target="_blank" rel="noopener noreferrer">Play on Spotify</a>
        </div>
      </Reveal>
    </section>
  );
}

const boardFrames = [
  { src: '/assets/story/boys-park.jpg', ar: 4 / 3, alt: 'Six friends posing in a park', cap: 'Serious faces. Mostly.' },
  { src: '/assets/story/boys-car.jpg', ar: 4 / 3, alt: 'Four friends squeezed into a car', cap: 'Road trip, front-seat selfie.' },
  { src: '/assets/story/boys-guitar.jpg', ar: 4 / 3, alt: 'Friends on a porch, one playing guitar', cap: 'Guitar hour.' },
  { src: '/assets/story/sunset.jpg', ar: 739 / 1311, alt: 'Friends on the rocks at sunset', cap: 'Sunset, on the rocks.' },
  { src: '/assets/story/boys-kurta.jpg', ar: 3 / 4, alt: 'Six friends in kurtas by a pond', cap: 'All dressed up, same crew.' },
  { src: '/assets/story/boys-night.jpg', ar: 4 / 3, alt: 'Five friends in a dim selfie', cap: 'Lights low, spirits high.' },
];

function Storyboard() {
  return (
    <section className="board-sec">
      <Reveal><p className="chapter-n">~ <span>Between launches</span></p></Reveal>
      <Reveal delay={0.08} as="h2" className="display chapter-title wide">
        Between lectures and launches, I love spending time with the boys.
      </Reveal>
      <div className="board">
        {boardFrames.map((f, i) => (
          <Reveal
            as="figure"
            key={f.src}
            delay={i * 0.06}
            className="panel"
            style={{ flex: `${f.ar * 100} 1 ${f.ar * 150}px`, maxWidth: `${f.ar * 215}px` }}
          >
            <img src={f.src} alt={f.alt} loading="lazy" />
            <figcaption><b>{String(i + 1).padStart(2, '0')}</b> {f.cap}</figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const strip = [
  { src: '/assets/story/family-00.jpg', alt: 'Family, Eid day' },
  { src: '/assets/story/childhood.jpg', alt: 'Then and now' },
  { src: '/assets/story/family-20.jpg', alt: 'With the little ones' },
  { src: '/assets/story/17.jpg', alt: 'Sea and sky' },
];

export default function StoryPage() {
  return (
    <Shell tone="dark">
      <section className="s-hero">
        <img className="s-hero-img" src="/assets/story/03.jpg" alt="Ashab by the river in Chattogram" />
        <div className="s-hero-shade" />
        <div className="s-hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
          >
            Story · Chattogram, Bangladesh
          </motion.p>
          <motion.h1
            className="display s-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.35, ease }}
          >
            A port-city kid who never stopped building things.
          </motion.h1>
        </div>
      </section>

      <Chapter
        n="I" kicker="The city" flip={false}
        title="I'm from Chattogram, the port city."
        photo="/assets/story/04.jpg" pos="50% 45%" caption="Chattogram, by the sea"
      >
        <p>A city built on ships, trade and people who make things happen. It's where I learned that things don't just appear. Someone has to build them.</p>
      </Chapter>

      <Chapter
        n="II" kicker="At home" flip
        title="Raised in a business family."
        photo="/assets/story/family.jpg" pos="50% 50%" caption="Family, at the table" landscape
      >
        <p>Growing up around business, building something of my own never felt like a dream. It felt like the next step.</p>
      </Chapter>

      <Chapter
        n="III" kicker="Grade nine" flip={false}
        title="My first business, at fifteen: Poster Junkies."
        photo="/assets/story/friends-collage.jpg" pos="50% 40%" caption="The people who were there for it" tall
      >
        <p>In grade nine I started Poster Junkies, my first business. Somewhere between the first poster and the first sale, I found the thing I've been chasing ever since: building a brand, and launching it.</p>
        <p className="more">I've built many more brands since, like Frame Korbo, PolaroidsBD and many more.</p>
      </Chapter>

      <section className="chokka-ch">
        <Reveal><p className="chapter-n">IV <span>Chokka</span></p></Reveal>
        <Reveal delay={0.08} as="h2" className="display chapter-title wide">
          Then I wanted to do something new. So I built Chokka.
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lead">
            A board-game brand, started from scratch: the name, the mark, the packaging, the content and the shop.
            I built the brand, and people showed up.
          </p>
        </Reveal>
        <div className="stats">
          <CountUp to={500} suffix="K+" label="people reached" />
          <CountUp to={1000} suffix="+" label="game boxes sold" />
          <CountUp to={2023} group={false} label="founded" />
        </div>
        <Reveal className="hero-shot">
          <img src="/assets/chokka-ig/boxes-in-hand.jpg" alt="Chokka's three games held in hand" loading="lazy" />
          <span className="hero-shot-cap">Three games, one hand.</span>
        </Reveal>
        <div className="shots">
          <Shot src="/assets/chokka-ig/launch.jpg" alt="Chokka launches its first original card game, Sholo Ana" cap="The launch post: Chokka's first original card game, Sholo Ana." />
          <Shot src="/assets/chokka-ig/insights.jpg" alt="Instagram insights showing 574,231 views" cap="574,231 views in 90 days. Not on our bucket list." />
          <Shot src="/assets/chokka-ig/gamenight.jpg" alt="People playing Chokka card games" cap="Game night, in the wild." />
          <Shot src="/assets/chokka-ig/cards-table.jpg" alt="Chokka cards laid out on a table" cap="The decks, laid out." />
          <Shot src="/assets/chokka-ig/gimbal.jpg" alt="Filming content with a gimbal" cap="Behind the content: a phone, a gimbal, a friend." />
        </div>
      </section>

      <Music />

      <Chapter
        n="V" kicker="The degree" flip
        title="Oh, and I'm a BBA student."
        photo="/assets/story/class.jpg" pos="50% 40%" caption="Pitching in class, apparently" tall
      >
        <p>I study business at North South University. Am I doing it for any grand reason? Not really. Mostly so I can say I did an undergrad.</p>
      </Chapter>

      <Storyboard />

      <section className="s-final">
        <Parallax src="/assets/story/21.jpg" alt="Black and white portrait" pos="50% 35%" className="s-final-img" />
        <div className="s-final-shade" />
        <div className="s-final-copy">
          <Reveal><p className="chapter-n">VI <span>Now</span></p></Reveal>
          <Reveal delay={0.08} as="h2" className="display chapter-title wide">
            Today I take that launch playbook to other founders.
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead">Motion and social content for startups that are about to go live. Built fast, built to be posted the same day.</p>
            <div className="s-actions">
              <GlossButton to="/">See the work</GlossButton>
              <a className="ghost" href={`mailto:${contact.email}`}>Start a project</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="reel">
        <p className="eyebrow reel-label">Frames</p>
        <div className="reel-track">
          {strip.map((p) => (
            <figure key={p.src}><img src={p.src} alt={p.alt} loading="lazy" /></figure>
          ))}
        </div>
      </section>

      <section className="stand">
        <h3 className="eyebrow">Where I stand</h3>
        <ul>
          <li><b>Founder</b><span>Chokka</span></li>
          <li><b>Junior Digital Marketing Executive</b><span>Mortgage Magic · UK SaaS</span></li>
          <li><b>BBA, for the sake of saying I did one</b><span>North South University</span></li>
        </ul>
      </section>

      <ContactBlock />
    </Shell>
  );
}
