export default function SideDots({ count, active, onDotClick }) {
  return (
    <div className="side-dots">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`side-dot ${i === active ? 'active' : ''}`}
          aria-label={`Go to section ${i + 1}`}
          style={{
            background: 'none',
            cursor: 'none',
            padding: 0,
            border: 'none',
          }}
        >
          <span className={`side-dot ${i === active ? 'active' : ''}`} />
        </button>
      ))}
    </div>
  );
}
