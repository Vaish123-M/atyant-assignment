import React from 'react';

export default function CircleMeshBackground({
  children,
  variant = 'dark',
  intensity = 'subtle',
  animated = true,
}) {
  const opacityMap = {
    subtle: 0.5,
    medium: 0.7,
    bold: 0.9,
  };

  const circleColor = variant === 'dark' ? '#FFFFFF' : '#1E293B';
  const opacityValue = opacityMap[intensity];

  // Circle positions and sizes  
  const circles = [
    { x: '20%', y: '50%', r: 18, delay: 0 },
    { x: '60%', y: '70%', r: 15, delay: 0.2 },
    { x: '50%', y: '20%', r: 22, delay: 0.4 },
    { x: '80%', y: '80%', r: 15, delay: 0.1 },
    { x: '10%', y: '10%', r: 18, delay: 0.3 },
    { x: '90%', y: '10%', r: 22, delay: 0.2 },
    { x: '30%', y: '80%', r: 15, delay: 0.5 },
    { x: '70%', y: '30%', r: 18, delay: 0.1 },
  ];

  return (
    <div className="relative w-full">
      {/* SVG overlay with circles */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          opacity: opacityValue,
          animation: animated ? 'circle-pulse 20s ease-in-out infinite' : 'none',
          top: 0,
          left: 0,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="circle-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
          </filter>
        </defs>
        {circles.map((circle, idx) => (
          <circle
            key={idx}
            cx={circle.x}
            cy={circle.y}
            r={circle.r / 100}
            fill={circleColor}
            opacity="0.7"
            filter="url(#circle-blur)"
            style={{
              animation: animated ? `circle-float ${20 + idx * 2}s ease-in-out infinite` : 'none',
              animationDelay: `${circle.delay}s`,
            }}
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative">
        {children}
      </div>

      <style jsx>{`
        @keyframes circle-pulse {
          0%, 100% {
            opacity: ${opacityValue};
          }
          50% {
            opacity: ${opacityValue * 0.8};
          }
        }

        @keyframes circle-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          svg {
            animation: none !important;
          }
          circle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
