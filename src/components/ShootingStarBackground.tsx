import React from 'react';

const ShootingStarBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Night sky gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at bottom, #232946 0%, #1a1a2e 60%, #0f1021 100%)',
        width: '100%',
        height: '100%',
      }} />
      {/* Faint background stars */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {Array.from({ length: 80 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r={Math.random() * 0.7 + 0.3}
            fill="#fff"
            opacity={Math.random() * 0.5 + 0.2}
          />
        ))}
      </svg>
      {/* Shooting star */}
      <div className="shooting-star" />
      <style>{`
        .shooting-star {
          position: absolute;
          top: 10%;
          left: -10%;
          width: 2px;
          height: 120px;
          background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(173,216,255,0.7) 40%, rgba(255,255,255,0.1) 100%);
          box-shadow: 0 0 16px 6px #fff, 0 0 32px 12px #aeefff;
          border-radius: 50% 50% 80% 80%/60% 60% 100% 100%;
          filter: blur(0.5px);
          animation: shooting 2.2s cubic-bezier(0.7,0.1,0.9,0.7) 1 forwards;
        }
        @keyframes shooting {
          0% {
            opacity: 0;
            transform: translate(0, 0) scaleY(0.7) scaleX(1.2) rotate(-30deg);
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
            box-shadow: 0 0 32px 12px #fff, 0 0 64px 24px #aeefff;
          }
          100% {
            opacity: 0;
            transform: translate(120vw, 80vh) scaleY(0.5) scaleX(1.5) rotate(-30deg);
            box-shadow: 0 0 0 0 #fff;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStarBackground; 