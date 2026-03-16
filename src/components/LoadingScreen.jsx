import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ textAlign: 'center' }}
        >
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '0.5rem',
          }}>
            Portfolio
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}>
            Ashab Alam
          </h1>
        </motion.div>

        {/* Loading bar */}
        <div className="loading-bar-track" style={{ marginTop: '2rem' }}>
          <motion.div
            className="loading-bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
        </div>

        {/* Percentage indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            marginTop: '1rem',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.15em',
          }}
        >
          LOADING...
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
