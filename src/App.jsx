import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

import HomePage from './pages/HomePage';
import DesignProjectPage from './pages/DesignProjectPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  /* ---- Loading ---- */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  /* ---- Theme ---- */
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next === 'light' ? 'light' : '');
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <CustomCursor />

      <Routes>
        <Route
          path="/"
          element={<HomePage loading={loading} theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/design/:slug"
          element={<DesignProjectPage theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </>
  );
}
