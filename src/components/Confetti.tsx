import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfettiProps {
  active: boolean;
  duration?: number;
  particleCount?: number;
}

const Confetti: React.FC<ConfettiProps> = ({
  active,
  duration = 3000,
  particleCount = 50
}) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    if (active) {
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        rotation: Math.random() * 360,
        color: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'][
          Math.floor(Math.random() * 6)
        ],
        delay: Math.random() * 0.3
      }));
      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [active, duration, particleCount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute top-0 w-3 h-3 rounded-sm"
            style={{
              left: `${particle.x}%`,
              backgroundColor: particle.color,
              rotate: particle.rotation
            }}
            initial={{ y: -20, opacity: 1 }}
            animate={{
              y: window.innerHeight + 20,
              opacity: 0,
              rotate: particle.rotation + 720
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2 + Math.random(),
              delay: particle.delay,
              ease: 'easeIn'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Confetti;
