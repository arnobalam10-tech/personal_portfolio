function Tile({ bg, children, style }) {
  return (
    <span className="app-icon" style={{ background: bg, ...style }}>
      {children}
    </span>
  );
}

export function FilmArt() {
  return (
    <div className="service-art" style={{ width: 128 }}>
      <svg viewBox="0 0 128 96" width="128" height="96" role="img" aria-label="Film clapperboard">
        <defs>
          <clipPath id="arm"><rect x="10" y="12" width="100" height="16" rx="3" /></clipPath>
          <clipPath id="bar"><rect x="10" y="32" width="100" height="14" rx="3" /></clipPath>
          <linearGradient id="slate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2b2b30" />
            <stop offset="1" stopColor="#0d0d0f" />
          </linearGradient>
        </defs>
        <g transform="rotate(-13 12 30)">
          <rect x="10" y="12" width="100" height="16" rx="3" fill="#0f0f11" />
          <g clipPath="url(#arm)" fill="#fff">
            {[0, 1, 2, 3, 4].map((i) => (
              <polygon key={i} points={`${20 + i * 20},12 ${32 + i * 20},12 ${22 + i * 20},28 ${10 + i * 20},28`} />
            ))}
          </g>
        </g>
        <rect x="10" y="32" width="100" height="14" rx="3" fill="#0f0f11" />
        <g clipPath="url(#bar)" fill="#fff">
          {[0, 1, 2, 3, 4].map((i) => (
            <polygon key={i} points={`${10 + i * 20},32 ${22 + i * 20},32 ${12 + i * 20},46 ${0 + i * 20},46`} />
          ))}
        </g>
        <rect x="10" y="48" width="100" height="42" rx="5" fill="url(#slate)" />
        <rect x="10" y="48" width="100" height="42" rx="5" fill="none" stroke="rgba(255,255,255,0.18)" />
        <g fill="rgba(255,255,255,0.8)">
          <rect x="18" y="57" width="34" height="3" rx="1.5" />
          <rect x="18" y="66" width="52" height="3" rx="1.5" opacity="0.55" />
          <rect x="18" y="75" width="40" height="3" rx="1.5" opacity="0.55" />
        </g>
        <circle cx="92" cy="69" r="11" fill="#fff" />
        <polygon points="89,63 89,75 99,69" fill="#0c0c0e" />
      </svg>
    </div>
  );
}

export function SocialArt() {
  return (
    <div className="service-art" style={{ width: 176 }}>
      <Tile
        bg="linear-gradient(135deg, #feda75 0%, #fa7e1e 28%, #d62976 55%, #962fbf 78%, #4f5bd5 100%)"
        style={{ left: 0, top: 18, transform: 'rotate(-9deg)' }}
      >
        <img src="/assets/icons/instagram.svg" alt="Instagram" />
      </Tile>
      <Tile bg="linear-gradient(#2d8cff, #1877f2)" style={{ left: 52, top: 4, zIndex: 2 }}>
        <img src="/assets/icons/facebook.svg" alt="Facebook" />
      </Tile>
      <Tile bg="#fff" style={{ left: 104, top: 20, transform: 'rotate(9deg)', zIndex: 1 }}>
        <img src="/assets/icons/linkedin.svg" alt="LinkedIn" style={{ width: 40, height: 40 }} />
      </Tile>
    </div>
  );
}

export function BrandArt() {
  return (
    <div className="service-art" style={{ width: 150 }}>
      <span className="grid-tile">
        <svg viewBox="0 0 84 84" width="84" height="84" aria-hidden="true">
          <g fill="none" stroke="rgba(12,12,14,0.16)" strokeWidth="1">
            <circle cx="42" cy="42" r="32" />
            <circle cx="42" cy="42" r="18" />
            <line x1="42" y1="4" x2="42" y2="80" />
            <line x1="4" y1="42" x2="80" y2="42" />
            <line x1="10" y1="10" x2="74" y2="74" />
            <line x1="74" y1="10" x2="10" y2="74" />
          </g>
        </svg>
        <img src="/assets/chokka-logo.webp" alt="Chokka mark" />
      </span>
      <span className="swatch" style={{ background: '#1B5E3C', left: 78, top: 12 }} />
      <span className="swatch" style={{ background: '#5A1220', left: 96, top: 30 }} />
      <span className="swatch" style={{ background: '#1A2BD1', left: 114, top: 48 }} />
    </div>
  );
}

export function WebArt() {
  return (
    <div className="service-art" style={{ width: 170 }}>
      <span className="browser">
        <span className="browser-bar"><i /><i /><i /></span>
        <span className="browser-body">
          <b style={{ width: '70%' }} />
          <b style={{ width: '48%', opacity: 0.55 }} />
          <em />
        </span>
      </span>
      <Tile bg="linear-gradient(#a6cf62, #7aa83f)" style={{ left: 82, top: 0, transform: 'rotate(8deg)', zIndex: 2 }}>
        <img src="/assets/icons/shopify.svg" alt="Shopify" />
      </Tile>
      <Tile bg="linear-gradient(#2a8fbf, #1b6a93)" style={{ left: 104, top: 40, transform: 'rotate(-6deg)', zIndex: 3, width: 56, height: 56, borderRadius: 15 }}>
        <img src="/assets/icons/wordpress.svg" alt="WordPress" />
      </Tile>
    </div>
  );
}
