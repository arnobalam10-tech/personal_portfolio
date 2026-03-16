import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', idx: 1 },
  { label: 'Chokka', idx: 2 },
  { label: 'Work', idx: 3 },
  { label: 'Contact', idx: 4 },
];

export default function Navbar({ scrollY, theme, toggleTheme, onNavClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 60;

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <button
          onClick={() => onNavClick(0)}
          style={{
            background: 'none', border: 'none', cursor: 'none',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: '1.25rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          AA<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* Desktop center links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {navLinks.map(({ label, idx }) => (
            <button
              key={label}
              onClick={() => onNavClick(idx)}
              style={{
                background: 'none', border: 'none', cursor: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            data-cursor="hover"
            style={{
              background: 'var(--gray-border)',
              border: '1px solid var(--gray-border)',
              borderRadius: '100px',
              padding: '0.4rem 1rem',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              cursor: 'none',
              color: 'var(--text-primary)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
          >
            {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'none',
              color: 'var(--text-primary)',
              padding: '0.25rem',
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: '4rem', left: 0, right: 0,
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              padding: '1.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
              borderBottom: '1px solid var(--gray-border)',
            }}
          >
            {navLinks.map(({ label, idx }) => (
              <button
                key={label}
                onClick={() => { onNavClick(idx); setMenuOpen(false); }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '1.5rem',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
