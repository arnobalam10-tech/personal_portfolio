import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import WorksPage from './pages/WorksPage';
import StoryPage from './pages/StoryPage';
import DesignProjectPage from './pages/DesignProjectPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WorksPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/design/:slug" element={<DesignProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
