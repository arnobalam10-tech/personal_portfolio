import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const pills = [
  { label: 'Strategy',           rotate: -3 },
  { label: 'Branding',           rotate:  5 },
  { label: 'Board Games',        rotate: -6 },
  { label: 'Product Design',     rotate:  2 },
  { label: 'Marketing',          rotate: -4 },
  { label: 'Community Building', rotate:  7 },
];

function useCounter(target, duration = 2000, inView) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 4);
    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(easeOut(progress) * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, target, duration]);
  return count;
}

/* ── Instagram post grid — pulled from the Chokka design project work ── */
const igPosts = [
  { color: ['#0d2a6e','#1a3fa0'], img: '09-logo-lockup.webp' },
  { color: ['#1a2d80','#2540cc'], img: '06-three-boxes-promo.webp' },
  { color: ['#0a1f6e','#1a3090'], img: '01-tong-cards-flatlay.webp' },
  { color: ['#1a348f','#2a4abf'], img: '04-sholo-ana-boxes.webp' },
  { color: ['#0d1f80','#1a2fc0'], img: '02-tong-lifestyle.webp' },
  { color: ['#12288a','#1e3aad'], img: '05-sholo-ana-sky.webp' },
];

export default function Chokka({ id }) {
  const counterRef = useRef(null);
  const counterInView = useInView(counterRef, { once: true, margin: '-80px' });
  const igRef = useRef(null);
  const igInView = useInView(igRef, { once: true, margin: '-60px' });

  /* Real stats */
  const gamesCount    = useCounter(1153, 2200, counterInView); // Actual games sold
  const followersCount = useCounter(5610, 2800, igInView);     // Actual followers

  return (
    <section id={id} className="chokka-section">
      <div className="section-container">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'0.72rem',
            letterSpacing:'0.2em', textTransform:'uppercase',
            color:'rgba(255,255,255,0.55)', marginBottom:'1.25rem' }}
        >
          Passion Project
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25,0.46,0.45,0.94] }}
          style={{ fontFamily:"'Playfair Display',serif", fontWeight:900,
            fontSize:'clamp(2.5rem,6vw,5rem)', lineHeight:1.0,
            color:'white', letterSpacing:'-0.03em', marginBottom:'1rem' }}
        >
          BUILDING BRANDS<br />
          <em style={{ fontStyle:'italic', fontWeight:700 }}>from scratch</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ color:'rgba(255,255,255,0.65)', fontSize:'clamp(0.95rem,1.5vw,1.1rem)',
            marginBottom:'4rem', maxWidth:'520px', lineHeight:1.7 }}
        >
          I don&rsquo;t just think about business — I build them. Meet my first brand.
        </motion.p>

        {/* Main grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
          gap:'2.5rem', alignItems:'start', marginBottom:'5rem' }}
        >
          {/* Brand Card */}
          <motion.div
            initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration:1.0, ease:[0.25,0.46,0.45,0.94] }}
            style={{ background:'rgba(255,255,255,0.1)', borderRadius:'24px',
              padding:'2.5rem', border:'1px solid rgba(255,255,255,0.2)',
              backdropFilter:'blur(16px)' }}
          >
            {/* Chokka Logo — drop chokka-logo.webp in public/assets/ */}
            <div style={{ width:'80px',height:'80px',borderRadius:'20px',
              overflow:'hidden', marginBottom:'1.5rem', background:'white',
              display:'flex',alignItems:'center',justifyContent:'center' }}>
              <img
                src="/assets/chokka-logo.webp"
                alt="Chokka Logo"
                width="80" height="80"
                style={{ width:'100%',height:'100%',objectFit:'cover' }}
                onError={(e)=>{e.target.style.display='none';e.target.parentNode.innerHTML='🎯';}}
              />
            </div>

            <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900,
              fontSize:'2.5rem', color:'white', letterSpacing:'-0.02em', marginBottom:'0.5rem' }}>
              CHOKKA
            </h3>
            <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'0.9rem', lineHeight:1.6 }}>
              Bangladesh&rsquo;s Homegrown Board Game Brand
            </p>

            {/* Highlight stat */}
            <div style={{ marginTop:'1.5rem', padding:'1rem 1.25rem',
              borderRadius:'12px', background:'rgba(255,255,255,0.08)',
              border:'1px solid rgba(255,255,255,0.15)' }}>
              <p style={{ fontSize:'0.68rem', letterSpacing:'0.12em', textTransform:'uppercase',
                color:'rgba(255,255,255,0.5)', marginBottom:'0.25rem' }}>
                Organic Reach — First Month
              </p>
              <p style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:900,
                fontSize:'2rem', color:'white', letterSpacing:'-0.02em' }}>
                350K<span style={{ fontSize:'1rem', fontWeight:400, opacity:0.6 }}> reach</span>
              </p>
            </div>

            {/* Stats row */}
            <div style={{ display:'flex', gap:'2rem', marginTop:'1.5rem',
              paddingTop:'1.5rem', borderTop:'1px solid rgba(255,255,255,0.15)' }}>
              {[
                { label:'Founded',  value:'2023' },
                { label:'🔥 Reels', value:'5×100K+' },
                { label:'Cities',   value:'BD Wide' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontSize:'1.15rem', fontWeight:700, color:'white',
                    fontFamily:"'Space Grotesk',sans-serif" }}>{value}</p>
                  <p style={{ fontSize:'0.68rem', letterSpacing:'0.1em',
                    textTransform:'uppercase', color:'rgba(255,255,255,0.45)' }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Instagram Mock Card */}
          <motion.div
            ref={igRef}
            initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration:1.0, delay:0.15, ease:[0.25,0.46,0.45,0.94] }}
          >
            <div className="ig-card">
              {/* Header */}
              <div style={{ padding:'1rem 1.25rem', borderBottom:'1px solid #f0f0f0' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                  {/* Instagram profile pic — same as chokka-logo.webp */}
              <div className="ig-avatar" style={{overflow:'hidden',padding:0}}>
                <img
                  src="/assets/chokka-logo.webp"
                  alt="Chokka"
                  style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'50%'}}
                  onError={(e)=>{e.target.style.display='none';e.target.parentNode.textContent='C';}}
                />
              </div>
                  <div>
                    {/* TODO: Update @handle if different */}
                    <p style={{ fontWeight:700, fontSize:'0.9rem', color:'#0A0A0A' }}>@chokka.bd</p>
                    <p style={{ fontSize:'0.72rem', color:'#9CA3AF' }}>Board Game Brand · Bangladesh</p>
                  </div>
                  <a 
                    href="https://www.instagram.com/chokka.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ marginLeft:'auto' }}
                  >
                    <button style={{ background:'#3B5BFF', color:'white',
                      border:'none', borderRadius:'8px', padding:'0.4rem 1rem',
                      fontSize:'0.75rem', fontWeight:600, cursor:'pointer' }}>
                      Follow
                    </button>
                  </a>
                </div>
              </div>

              {/* Stats row */}
              <div style={{ padding:'1rem 1.25rem', borderBottom:'1px solid #f0f0f0' }}>
                <div style={{ display:'flex', gap:'2rem' }}>
                  {[
                    { label:'Followers',  value: followersCount.toLocaleString() + '+' },
                    { label:'Posts',      value: '48' },
                    { label:'Following',  value: '120' },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ textAlign:'center' }}>
                      <p style={{ fontWeight:700, fontSize:'1.1rem', color:'#0A0A0A' }}>{value}</p>
                      <p style={{ fontSize:'0.7rem', color:'#9CA3AF' }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post grid */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2px', padding:'2px' }}>
                {igPosts.map((p, i) => (
                  <div key={i} style={{
                    aspectRatio:'1',
                    background:`linear-gradient(135deg, ${p.color[0]}, ${p.color[1]})`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'1.5rem', overflow:'hidden', position:'relative',
                  }}>
                    <img
                      src={`/assets/design/chokka/${p.img}`}
                      alt={`Chokka — ${p.img.replace(/\.webp$/, '').replace(/^\d+-/, '').replace(/-/g, ' ')}`}
                      style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}
                      onError={(e)=>{e.target.style.display='none';}}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Counter ── */}
        <div ref={counterRef} style={{ textAlign:'center', marginBottom:'5rem' }}>
          <motion.p
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            style={{ fontSize:'0.75rem', letterSpacing:'0.2em', textTransform:'uppercase',
              color:'rgba(255,255,255,0.5)', marginBottom:'0.5rem' }}
          >
            Total Board Games Sold Across Bangladesh
          </motion.p>

          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'center', gap:'0.2rem' }}>
            <span className="odometer-number">{gamesCount.toLocaleString()}</span>
            <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:900,
              fontSize:'clamp(3rem,8vw,6rem)', color:'rgba(255,255,255,0.6)' }}>+</span>
          </div>

          <motion.p
            initial={{ opacity:0 }} whileInView={{ opacity:1 }}
            viewport={{ once: true }} transition={{ delay:0.3 }}
            style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.45)',
              letterSpacing:'0.05em', marginTop:'0.5rem' }}
          >
            and counting...
          </motion.p>
        </div>

        {/* ── Pill Tags ── */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.75rem', justifyContent:'center' }}>
          {pills.map(({ label, rotate }, i) => (
            <motion.span
              key={label}
              className="pill-tag"
              initial={{ opacity:0, y:30, rotate: rotate * 2 }}
              whileInView={{ opacity:1, y:0, rotate }}
              viewport={{ once: true }}
              transition={{ duration:0.6, delay: i * 0.08, type:'spring', stiffness:150, damping:18 }}
              style={{ rotate:`${rotate}deg` }}
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
