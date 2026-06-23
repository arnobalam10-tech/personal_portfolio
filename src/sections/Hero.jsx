import { motion } from 'framer-motion';

export default function Hero({ id }) {
  return (
    <section
      id={id}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#0A0A0A',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
      }}
    >
      {/* Background Subtle Glows */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 70% 30%, rgba(59,91,255,0.05) 0%, transparent 60%)',
      }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* ——————————— LEFT/TOP CONTENT ——————————— */}
          <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: '#9CA3AF',
                marginBottom: '1rem',
              }}
            >
              Hi, I&rsquo;m
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 'clamp(3.5rem, 9vw, 10rem)',
                lineHeight: 0.9,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              ASHAB<br />
              <span style={{ color: '#3B5BFF' }}>ALAM</span>
            </motion.h1>

            {/* Accent Line */}
            <div style={{ width: '40px', height: '2px', background: '#3B5BFF', margin: '2rem 0' }} className="hidden md:block" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#9CA3AF',
                marginBottom: '1.5rem',
                fontWeight: 500,
              }}
            >
              GRAPHIC DESIGNER • DIGITAL MARKETER • VIBE CODER • WEB DEVELOPER
            </motion.p>

            {/* Desktop Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden md:block"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: '#9CA3AF',
                maxWidth: '500px',
                lineHeight: 1.6,
                textAlign: 'left',
              }}
            >
              Building credible, conversion-focused digital experiences that make businesses grow.
            </motion.p>
          </div>

          {/* ——————————— RIGHT/MIDDLE CONTENT: PORTRAIT ——————————— */}
          <div className="w-full md:w-[45%] relative flex justify-center items-end self-stretch">
            {/* Soft blue glow behind shoulders */}
            <div style={{
              position: 'absolute',
              bottom: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120%',
              height: '80%',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(59,91,255,0.15) 0%, transparent 70%)',
              zIndex: -1,
              pointerEvents: 'none',
            }} />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              style={{
                width: '100%',
                maxWidth: '600px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              }}
              className="w-[80vw] md:w-full"
            >
              <img
                src="/assets/hero.webp"
                alt="Ashab Alam"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </motion.div>
          </div>

          {/* ——————————— MOBILE ONLY: DESCRIPTION AT BOTTOM ——————————— */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:hidden w-full text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              color: '#9CA3AF',
              maxWidth: '320px',
              lineHeight: 1.6,
              margin: '0 auto',
            }}
          >
            Building credible, conversion-focused digital experiences that make businesses grow.
          </motion.p>

        </div>
      </div>
    </section>
  );
}





