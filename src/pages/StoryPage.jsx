import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, animate } from 'framer-motion';
import Shell, { GlossButton, ContactBlock } from '../components/Shell';
import { contact } from '../data/works';

const ease = [0.25, 0.46, 0.45, 0.94];

function Parallax({ src, alt, pos = '50% 50%', className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  return (
    <div ref={ref} className={`px ${className}`}>
      <motion.img src={src} alt={alt} style={{ y, objectPosition: pos }} loading="lazy" />
    </div>
  );
}

function Reveal({ children, delay = 0, as: Tag = 'div', className }) {
  const M = motion[Tag];
  return (
    <M
      className={className}
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

function Chapter({ n, kicker, title, children, photo, pos, flip, caption }) {
  return (
    <section className={`chapter ${flip ? 'flip' : ''}`}>
      <Reveal className="chapter-photo">
        <Parallax src={photo} alt={caption} pos={pos} />
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

const strip = [
  { src: '/assets/story/04.jpg', alt: 'On the beach' },
  { src: '/assets/story/16.jpg', alt: 'Golden hour' },
  { src: '/assets/story/17.jpg', alt: 'Sea and sky' },
  { src: '/assets/story/15.jpg', alt: 'Walking the green path' },
  { src: '/assets/story/23.jpg', alt: 'Evening light' },
  { src: '/assets/story/19.jpg', alt: 'Against the brick wall' },
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
        photo="/assets/story/02.jpg" pos="50% 40%" caption="Chattogram, by the water"
      >
        <p>A city built on ships, trade and people who make things happen. It's where I learned that things don't just appear. Someone has to build them.</p>
      </Chapter>

      <Chapter
        n="II" kicker="At home" flip
        title="Raised in a business family."
        photo="/assets/story/09.jpg" pos="50% 30%" caption="Home ground"
      >
        <p>Growing up around business, building something of my own never felt like a dream. It felt like the next step.</p>
      </Chapter>

      <Chapter
        n="III" kicker="Age nine" flip={false}
        title="My first business, at nine."
        photo="/assets/story/05.jpg" pos="50% 30%" caption="Still smiling about it"
      >
        <p>Somewhere between the first idea and the first sale, I found the thing I've been chasing ever since: building a brand, and launching it.</p>
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
        <div className="chokka-shots">
          <Parallax src="/assets/design/chokka/06-three-boxes-promo.webp" alt="Chokka's three game boxes" className="wide-shot" />
          <Parallax src="/assets/design/chokka/02-tong-lifestyle.webp" alt="People playing Tong" />
          <Parallax src="/assets/design/chokka/03-tong-promo-fan.webp" alt="A fan of Tong cards" />
        </div>
      </section>

      <section className="s-final">
        <Parallax src="/assets/story/21.jpg" alt="Black and white portrait" pos="50% 35%" className="s-final-img" />
        <div className="s-final-shade" />
        <div className="s-final-copy">
          <Reveal><p className="chapter-n">V <span>Now</span></p></Reveal>
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
          <li><b>BBA</b><span>North South University</span></li>
        </ul>
      </section>

      <ContactBlock />
    </Shell>
  );
}
