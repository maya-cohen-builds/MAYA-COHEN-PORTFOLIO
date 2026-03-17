const HeroGeometricBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base gradient: deep black to dark charcoal */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, hsl(220 30% 2%) 0%, hsl(220 15% 8%) 50%, hsl(220 20% 5%) 100%)",
        }}
      />

      {/* Geometric SVG overlay at ~12% opacity in amber-gold */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.12 }}
      >
        <defs>
          <pattern
            id="hex-grid"
            width="120"
            height="104"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(15)"
          >
            {/* Hexagon 1 */}
            <polygon
              points="60,2 90,18 90,50 60,66 30,50 30,18"
              fill="none"
              stroke="hsl(45 93% 47%)"
              strokeWidth="0.6"
            />
            {/* Hexagon 2 (offset) */}
            <polygon
              points="0,54 30,70 30,102 0,118 -30,102 -30,70"
              fill="none"
              stroke="hsl(45 93% 47%)"
              strokeWidth="0.6"
            />
            <polygon
              points="120,54 150,70 150,102 120,118 90,102 90,70"
              fill="none"
              stroke="hsl(45 93% 47%)"
              strokeWidth="0.6"
            />
          </pattern>

          <pattern
            id="tri-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-10) scale(1.5)"
          >
            {/* Triangles */}
            <polygon
              points="40,5 75,70 5,70"
              fill="none"
              stroke="hsl(45 93% 47%)"
              strokeWidth="0.4"
            />
            <polygon
              points="40,75 75,10 5,10"
              fill="none"
              stroke="hsl(45 93% 47%)"
              strokeWidth="0.25"
            />
          </pattern>

          <pattern
            id="node-grid"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Interconnected nodes */}
            <circle cx="0" cy="0" r="1.5" fill="hsl(45 93% 47%)" />
            <circle cx="200" cy="0" r="1.5" fill="hsl(45 93% 47%)" />
            <circle cx="0" cy="200" r="1.5" fill="hsl(45 93% 47%)" />
            <circle cx="200" cy="200" r="1.5" fill="hsl(45 93% 47%)" />
            <circle cx="100" cy="100" r="1.5" fill="hsl(45 93% 47%)" />
            <circle cx="60" cy="40" r="1" fill="hsl(45 93% 47%)" />
            <circle cx="140" cy="160" r="1" fill="hsl(45 93% 47%)" />
            <circle cx="160" cy="60" r="1" fill="hsl(45 93% 47%)" />
            <circle cx="40" cy="140" r="1" fill="hsl(45 93% 47%)" />

            {/* Connection lines */}
            <line x1="0" y1="0" x2="100" y2="100" stroke="hsl(45 93% 47%)" strokeWidth="0.3" />
            <line x1="200" y1="0" x2="100" y2="100" stroke="hsl(45 93% 47%)" strokeWidth="0.3" />
            <line x1="0" y1="200" x2="100" y2="100" stroke="hsl(45 93% 47%)" strokeWidth="0.3" />
            <line x1="200" y1="200" x2="100" y2="100" stroke="hsl(45 93% 47%)" strokeWidth="0.3" />
            <line x1="60" y1="40" x2="160" y2="60" stroke="hsl(45 93% 47%)" strokeWidth="0.2" />
            <line x1="40" y1="140" x2="140" y2="160" stroke="hsl(45 93% 47%)" strokeWidth="0.2" />
            <line x1="60" y1="40" x2="40" y2="140" stroke="hsl(45 93% 47%)" strokeWidth="0.2" />
            <line x1="160" y1="60" x2="140" y2="160" stroke="hsl(45 93% 47%)" strokeWidth="0.2" />
          </pattern>
        </defs>

        {/* Layer 1: Hexagon grid */}
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
        {/* Layer 2: Triangle grid */}
        <rect width="100%" height="100%" fill="url(#tri-grid)" opacity="0.5" />
        {/* Layer 3: Node connections */}
        <rect width="100%" height="100%" fill="url(#node-grid)" opacity="0.7" />
      </svg>

      {/* Vignette to keep text area clean */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 80%, transparent 0%, hsl(220 30% 2% / 0.6) 100%)",
        }}
      />
    </div>
  );
};

export default HeroGeometricBackground;
