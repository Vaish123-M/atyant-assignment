import React from 'react';

export default function CircleMeshBackground({
  children,
  variant = 'dark',
  intensity = 'subtle',
  animated = true,
}) {
  const opacityMap = {
    subtle: 0.18,
    medium: 0.28,
    bold: 0.4,
  };

  const particleOpacity = opacityMap[intensity];

  const palette =
    variant === 'dark'
      ? ['#FF6B2B', '#8B5CF6', '#FFFFFF', '#60A5FA']
      : ['#1E293B', '#7C3AED', '#F97316', '#0F172A'];

  const particles = [
    { left: '8%', top: '14%', size: 10, color: palette[0], delay: 0.1 },
    { left: '18%', top: '72%', size: 14, color: palette[1], delay: 0.4 },
    { left: '28%', top: '28%', size: 8, color: palette[2], delay: 0.2 },
    { left: '38%', top: '64%', size: 12, color: palette[3], delay: 0.5 },
    { left: '52%', top: '18%', size: 16, color: palette[1], delay: 0.15 },
    { left: '60%', top: '58%', size: 9, color: palette[0], delay: 0.35 },
    { left: '68%', top: '32%', size: 11, color: palette[2], delay: 0.25 },
    { left: '78%', top: '76%', size: 15, color: palette[3], delay: 0.45 },
    { left: '86%', top: '20%', size: 10, color: palette[0], delay: 0.3 },
    { left: '92%', top: '62%', size: 8, color: palette[1], delay: 0.6 },
  ];

  return (
    <div className="relative w-full overflow-hidden isolate">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle, index) => (
          <span
            key={index}
            className={animated ? 'circle-particle animate-float' : 'circle-particle'}
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particleOpacity,
              animationDelay: `${particle.delay}s`,
              boxShadow: `0 0 18px ${particle.color}22`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {children}
      </div>

      <style jsx>{`
        .circle-particle {
          position: absolute;
          border-radius: 9999px;
          transform: translate3d(0, 0, 0);
          will-change: transform, opacity;
          filter: blur(0.2px);
        }

        .animate-float {
          animation: particle-float 12s ease-in-out infinite;
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -12px, 0) scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
