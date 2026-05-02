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
    subtle: 'opacity-5',
    medium: 'opacity-8',
    bold: 'opacity-12',
  };

  // Determine background colors based on variant
  const backgroundMap = {
    dark: 'bg-gradient-to-br from-white via-white to-white',
    light: 'bg-gradient-to-br from-slate-800 via-slate-800 to-slate-800',
    tinted: 'bg-gradient-to-br from-[#8B5CF6] via-[#FF6B2B] to-[#8B5CF6]',
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background container with mesh pattern */}
      <div
        className={`absolute inset-0 w-full h-full ${opacityMap[intensity]} ${
          blur ? 'backdrop-blur-sm' : ''
        } ${animated ? 'animate-mesh-pulse' : ''}`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px),
            radial-gradient(circle at 60% 70%, currentColor 1px, transparent 1px),
            radial-gradient(circle at 50% 20%, currentColor 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, currentColor 1px, transparent 1px),
            radial-gradient(circle at 10% 10%, currentColor 1px, transparent 1px),
            radial-gradient(circle at 90% 10%, currentColor 1px, transparent 1px),
            radial-gradient(circle at 30% 80%, currentColor 1px, transparent 1px),
            radial-gradient(circle at 70% 30%, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px, 300px 250px, 250px 200px, 280px 300px, 220px 280px, 240px 260px, 260px 240px, 270px 220px',
          backgroundPosition: '0 0, 40px 60px, 80px 10px, 20px 80px, 60px 30px, 10px 90px, 90px 20px, 30px 50px',
          backgroundColor: variant === 'dark' ? '#ffffff' : variant === 'light' ? '#1e293b' : 'transparent',
        }}
      />

      {/* Enhanced mesh layer for depth (optional secondary pattern) */}
      <div
        className="absolute inset-0 w-full h-full opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, transparent 20%, currentColor 100%)
          `,
          backgroundSize: '400px 400px',
          backgroundPosition: '0 0',
          backgroundColor: variant === 'tinted' ? 'transparent' : 'transparent',
          pointerEvents: 'none',
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes mesh-pulse {
          0%, 100% {
            transform: translateY(0px);
            opacity: ${opacityMap[intensity] === 'opacity-5' ? '0.05' : opacityMap[intensity] === 'opacity-8' ? '0.08' : '0.12'};
          }
          50% {
            transform: translateY(10px);
            opacity: ${opacityMap[intensity] === 'opacity-5' ? '0.07' : opacityMap[intensity] === 'opacity-8' ? '0.10' : '0.14'};
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-mesh-pulse {
            animation: none;
          }
        }

        ${animated ? `
          .animate-mesh-pulse {
            animation: mesh-pulse 20s ease-in-out infinite;
          }
        ` : ''}
      `}</style>
    </div>
  );
}
