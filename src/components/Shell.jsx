import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { contact } from '../data/works';

export function GlossButton({ href, to, children, className = '' }) {
  const inner = (
    <>
      {children}
      <span className="btn-caret" aria-hidden="true" />
    </>
  );
  if (to) return <Link to={to} className={`btn-gloss ${className}`}>{inner}</Link>;
  return <a href={href} className={`btn-gloss ${className}`}>{inner}</a>;
}

function TopBar() {
  const onStory = useLocation().pathname.startsWith('/story');
  return (
    <header className="bar">
      <div className="bar-inner">
        <nav className="toggle" aria-label="Primary">
          <NavLink to="/" className={() => (onStory ? '' : 'on')}>Works</NavLink>
          <NavLink to="/story" className={() => (onStory ? 'on' : '')}>Story</NavLink>
        </nav>
        <Link to="/" className="bar-name">Ashab Alam</Link>
        <div className="bar-right">
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gloss btn-sm">Let's chat</a>
        </div>
      </div>
    </header>
  );
}

export function ContactBlock() {
  return (
    <section className="contact">
      <p className="eyebrow"><span className="dot" /> Currently open to collaborations</p>
      <h2 className="display">Launching something? Let's make it loud.</h2>
      <a className="contact-mail" href={`mailto:${contact.email}`}>
        {contact.email} <ArrowUpRight size={20} />
      </a>
      <div className="contact-links">
        {contact.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
        ))}
      </div>
    </section>
  );
}

export default function Shell({ tone = 'light', children }) {
  return (
    <div className="site" data-tone={tone}>
      <TopBar />
      <div className="frame">{children}</div>
      <p className="legal">© {new Date().getFullYear()} Ashab Alam · Chattogram, Bangladesh</p>
    </div>
  );
}
