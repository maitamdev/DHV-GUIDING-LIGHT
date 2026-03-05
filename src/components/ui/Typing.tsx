import React, { useState, useEffect } from 'react';
interface Props { texts: string[]; speed?: number; deleteSpeed?: number; pauseTime?: number; className?: string; }
const Typing: React.FC<Props> = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000, className = '' }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex(c => c + 1);
        if (charIndex >= currentText.length) { setTimeout(() => setIsDeleting(true), pauseTime); }
      } else {
        setCharIndex(c => c - 1);
        if (charIndex <= 0) { setIsDeleting(false); setTextIndex(i => (i + 1) % texts.length); }
      }
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime]);
  return <span className={className}>{texts[textIndex].slice(0, charIndex)}<span className='animate-pulse'>|</span></span>;
};
export default Typing;
