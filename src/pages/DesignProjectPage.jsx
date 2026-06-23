import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { designProjects } from '../data/designProjects';

export default function DesignProjectPage({ theme, toggleTheme }) {
  const { slug } = useParams();
  const project = designProjects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const ProjectComponent = project.component;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Floating controls — overlay on top of whatever the project page looks like */}
      <div
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: '1.25rem',
          right: '1.25rem',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/#design"
          data-cursor="hover"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '100px',
            background: 'rgba(10,10,10,0.6)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            color: '#FFFFFF',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            cursor: 'none',
          }}
        >
          <ArrowLeft size={15} /> Design Work
        </Link>

        <button
          onClick={toggleTheme}
          data-cursor="hover"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            borderRadius: '100px',
            background: 'rgba(10,10,10,0.6)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            color: '#FFFFFF',
            cursor: 'none',
          }}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>

      <ProjectComponent project={project} />
    </div>
  );
}
