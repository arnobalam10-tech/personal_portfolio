import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Shell from '../components/Shell';
import { designProjects } from '../data/designProjects';

export default function DesignProjectPage() {
  const { slug } = useParams();
  const index = designProjects.findIndex((p) => p.slug === slug);
  const project = designProjects[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const ProjectComponent = project.component;
  const next = designProjects[(index + 1) % designProjects.length];

  return (
    <Shell>
      <div className="case">
        <ProjectComponent project={project} />
      </div>
      <nav className="case-nav" aria-label="Case study navigation">
        <Link to="/"><ArrowLeft size={16} /> All works</Link>
        <Link to={`/design/${next.slug}`}>Next: {next.title} <ArrowRight size={16} /></Link>
      </nav>
    </Shell>
  );
}
