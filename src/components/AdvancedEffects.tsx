import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TypingIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  size = 'md',
  color = '#3b82f6'
}) => {
  const sizeMap = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${sizeMap[size]} rounded-full`}
          style={{ backgroundColor: color }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
};

interface BadgeUnlockProps {
  icon: ReactNode;
  title: string;
  isVisible: boolean;
  onClose: () => void;
}

export const BadgeUnlock: React.FC<BadgeUnlockProps> = ({
  icon,
  title,
  isVisible,
  onClose
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, rotate: 180 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl p-12 text-center shadow-2xl max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 2
          }}
          className="inline-block mb-6"
        >
          {icon}
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Achievement Unlocked!
        </h2>
        <p className="text-xl text-gray-600 mb-6">{title}</p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
        >
          Awesome!
        </button>
      </motion.div>
    </motion.div>
  );
};

interface PointsAnimationProps {
  points: number;
  x: number;
  y: number;
}

export const PointsAnimation: React.FC<PointsAnimationProps> = ({
  points,
  x,
  y
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0, x: 0 }}
      animate={{ opacity: 0, y: -50, x: Math.random() * 40 - 20 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="fixed pointer-events-none z-[9998]"
      style={{ left: x, top: y }}
    >
      <div className="text-2xl font-bold text-green-500 drop-shadow-lg">
        +{points}
      </div>
    </motion.div>
  );
};

interface VoiceWaveProps {
  isActive: boolean;
  color?: string;
}

export const VoiceWave: React.FC<VoiceWaveProps> = ({
  isActive,
  color = '#3b82f6'
}) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full"
          style={{ backgroundColor: color }}
          animate={isActive ? {
            height: ['8px', '24px', '8px']
          } : {
            height: '8px'
          }}
          transition={{
            duration: 0.6,
            repeat: isActive ? Infinity : 0,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );
};

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}) => {
  const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  const { x, y } = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
