import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorClass, setCursorClass] = useState('');
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    /* Lerp smooth follow */
    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.25);
      current.current.y = lerp(current.current.y, pos.current.y, 0.25);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${current.current.x}px`;
        cursorRef.current.style.top  = `${current.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e) => {
      const el = e.target;
      if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('button') || el.closest('a') || el.dataset.cursor === 'hover') {
        setCursorClass('expanded');
      } else if (el.tagName === 'IMG' || el.closest('.project-card')) {
        setCursorClass('view-mode');
      }
    };

    const onLeave = () => setCursorClass('');

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return <div ref={cursorRef} className={`cursor ${cursorClass}`} />;
}
