import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FilmArt, SocialArt, BrandArt, WebArt } from '../components/ServiceArt';
import Shell, { GlossButton, ContactBlock } from '../components/Shell';
import { works, brands, contact } from '../data/works';

const ease = [0.25, 0.46, 0.45, 0.94];

function Sun() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 320], [0, -40]);
  const scale = useTransform(scrollY, [0, 320], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 80, 340], [1, 1, 0]);
  return (
    <motion.div
      className="sun"
      aria-hidden="true"
      initial={{ opacity: 0, y: 90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, ease }}
    >
      <motion.div className="sun-body" style={{ y, scale, opacity }} />
    </motion.div>
  );
}

function Card({ work, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const external = work.kind === 'web';

  const media = (
    <>
      <div className="card-media" style={{ aspectRatio: work.ratio, background: work.tint }}>
        <img src={work.cover} alt={`${work.title} cover`} loading="lazy" />
        <span className="card-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
        <div className="pills">
          <span className="pill">{work.title}</span>
          {work.tags.map((t) => <span className="pill" key={t}>{t}</span>)}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease }}
    >
      {external ? (
        <a className="card" href={work.url} target="_blank" rel="noopener noreferrer" title={work.blurb}>
          {media}
        </a>
      ) : (
        <Link className="card" to={`/design/${work.slug}`}>{media}</Link>
      )}
    </motion.div>
  );
}

const services = [
  {
    art: FilmArt,
    title: 'Launch videos & motion',
    text: 'Short, sharp videos and reels that explain your product in seconds and are cut for launch day.',
  },
  {
    art: SocialArt,
    title: 'Social content',
    text: 'Posts, carousels and stories built as one system, so your launch week looks like a real brand.',
  },
  {
    art: BrandArt,
    title: 'Brand identity',
    text: 'Logo, type, colour and packaging delivered as one handoff your team can actually follow.',
  },
  {
    art: WebArt,
    title: 'Websites & launch pages',
    text: 'Fast sites and stores, built and shipped with the analytics already wired in.',
  },
];

export default function WorksPage() {
  const left = works.filter((_, i) => i % 2 === 0);
  const right = works.filter((_, i) => i % 2 === 1);

  return (
    <Shell>
      <section className="hero">
        <Sun />
        <motion.h1
          className="display hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          Hey! I'm Ashab Alam, a creator who launches startups with motion and social content built for day one
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <GlossButton href={`mailto:${contact.email}`}>Start a project with me</GlossButton>
        </motion.div>
      </section>

      <p className="strip">
        Launch videos, reels and social content for early-stage startups. Founder of Chokka: 1,000+ games sold, 500K+ people reached.
      </p>

      <section className="works" id="works" aria-label="Selected work">
        <div className="works-col">
          {left.map((w, i) => <Card key={w.id} work={w} index={i * 2} />)}
        </div>
        <div className="works-col">
          {right.map((w, i) => <Card key={w.id} work={w} index={i * 2 + 1} />)}
          <div className="soon">
            <span>More projects</span>
            <span>coming soon</span>
          </div>
        </div>
      </section>

      <section className="brands">
        <p className="brands-label">Brands I've built and launched for</p>
        <div className="brands-grid">
          {brands.map((b) => (
            <div className="brand-cell" key={b.name}>
              {b.logo && <img src={b.logo} alt="" loading="lazy" />}
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="services">
        <h2 className="display section-title">Everything a launch needs, in one place</h2>
        <div className="services-grid">
          {services.map(({ art: Art, title, text }) => (
            <div className="service" key={title}>
              <Art />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactBlock />
    </Shell>
  );
}
