import React from 'react';

/**
 * CircleMeshBackground Component
 * 
 * A reusable, performant background with repeating circular mesh patterns.
 * Uses CSS radial-gradient for premium, non-distracting effect.
 * 
 * Props:
 * - children: content to render on top
 * - variant: 'dark' (light circles on dark), 'light' (dark circles on light), 'tinted' (colored)
 * - intensity: 'subtle' (5%), 'medium' (8%), 'bold' (12%)
 * - animated: boolean - adds slow animation
 * - blur: boolean - adds subtle blur effect
 */
export default function CircleMeshBackground({
  children,
  variant = 'dark',
  intensity = 'subtle',
  animated = true,
  blur = true,
}) {
  // Determine opacity based on intensity
  const opacityMap = {
    subtle: 0.15,
    medium: 0.25,
    bold: 0.35,
  };

  // Determine circle color based on variant
  const circleColorMap = {
    light: 'rgba(30, 41, 59, 0.3)',
    tinted: 'rgba(139, 92, 246, 0.3)',
  };

  const opacityValue = opacityMap[intensity];
  const circleColor = circleColorMap[variant];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background container with mesh pattern */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, ${circleColor} 5px, transparent 5px),
            radial-gradient(circle at 60% 70%, ${circleColor} 4px, transparent 4px),
            radial-gradient(circle at 50% 20%, ${circleColor} 6px, transparent 6px),
            radial-gradient(circle at 80% 80%, ${circleColor} 4px, transparent 4px),
            radial-gradient(circle at 10% 10%, ${circleColor} 5px, transparent 5px),
            radial-gradient(circle at 90% 10%, ${circleColor} 6px, transparent 6px),
            radial-gradient(circle at 30% 80%, ${circleColor} 4px, transparent 4px),
            radial-gradient(circle at 70% 30%, ${circleColor} 5px, transparent 5px)
          `,
          backgroundSize: '200px 200px, 300px 250px, 250px 200px, 280px 300px, 220px 280px, 240px 260px, 260px 240px, 270px 220px',
          backgroundPosition: '0 0, 40px 60px, 80px 10px, 20px 80px, 60px 30px, 10px 90px, 90px 20px, 30px 50px',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: opacityValue,
        }}
      />

      {/* Content layer positioned on top */}
        className="relative w-full"
        style={{ zIndex: 2 }}
      >
        {children}
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes mesh-pulse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-mesh-pulse {
            animation: none;
          }
        }

        ${animated ? `
          div[style*="z-index: 1"] {
            animation: mesh-pulse 20s ease-in-out infinite;
          }
        ` : ''}
      `}</style>
    </div>
  );
}
