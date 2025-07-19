import React from 'react';

// Helper to generate random star data
const generateStars = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    top: Math.random() * 100, // percent
    left: Math.random() * 100, // percent
    size: Math.random() * 2 + 1, // px
    delay: Math.random() * 3, // seconds
    duration: 3 + Math.random() * 2, // seconds (slower twinkle)
  }));
};

const stars = generateStars(60);

const ShootingStarBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <section
        className="absolute top-0 left-0 w-full h-screen bg-glow-animate"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse at bottom, #232946 0%, #1a1a2e 60%, #0f1021 100%)',
        }}
      >
        {/* Twinkling stars */}
        {stars.map((star, i) => (
          <span
            key={i}
            className="twinkle-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
        {/* Shooting stars */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className={`shooting-star-span shooting-star-span-${i + 1}`}></span>
        ))}
      </section>
      <style>{`
        .bg-glow-animate {
          animation: background-glow 8s ease-in-out infinite;
        }
        @keyframes background-glow {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 0px #00adb5);
          }
          50% {
            filter: brightness(1.15) drop-shadow(0 0 40px #00adb5cc);
          }
        }
        .twinkle-star {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          opacity: 0.7;
          pointer-events: none;
          box-shadow: 0 0 6px 1px #fff8;
          animation: twinkle 4s infinite ease-in-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.2; }
        }
        .shooting-star-span {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.1),0 0 0 8px rgba(255,255,255,0.1),0 0 20px rgba(255,255,255,0.1);
          animation: shooting-star-animate 3s cubic-bezier(0.25,0.1,0.7,1.7) infinite;
        }
        .shooting-star-span::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 1px;
          background: linear-gradient(90deg,#fff,transparent);
        }
        @keyframes shooting-star-animate {
          0% {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(315deg) translateX(-1000px);
            opacity: 0;
          }
        }
        .shooting-star-span-1 {
          top: 0;
          right: 0;
          left: initial;
          animation-delay: 0s;
          animation-duration: 1s;
        }
        .shooting-star-span-2 {
          top: 0;
          right: 80px;
          left: initial;
          animation-delay: 0.2s;
          animation-duration: 3s;
        }
        .shooting-star-span-3 {
          top: 80px;
          right: 0px;
          left: initial;
          animation-delay: 0.4s;
          animation-duration: 2s;
        }
        .shooting-star-span-4 {
          top: 0;
          right: 180px;
          left: initial;
          animation-delay: 0.6s;
          animation-duration: 1.5s;
        }
        .shooting-star-span-5 {
          top: 0;
          right: 400px;
          left: initial;
          animation-delay: 0.8s;
          animation-duration: 2.5s;
        }
        .shooting-star-span-6 {
          top: 0;
          right: 600px;
          left: initial;
          animation-delay: 1s;
          animation-duration: 3s;
        }
        .shooting-star-span-7 {
          top: 300px;
          right: 0px;
          left: initial;
          animation-delay: 1.2s;
          animation-duration: 1.75s;
        }
        .shooting-star-span-8 {
          top: 0px;
          right: 700px;
          left: initial;
          animation-delay: 1.4s;
          animation-duration: 1.25s;
        }
        .shooting-star-span-9 {
          top: 0px;
          right: 1000px;
          left: initial;
          animation-delay: 0.75s;
          animation-duration: 2.25s;
        }
        .shooting-star-span-10 {
          top: 0px;
          right: 450px;
          left: initial;
          animation-delay: 2.75s;
          animation-duration: 2.75s;
        }
      `}</style>
    </div>
  );
};

export default ShootingStarBackground; 