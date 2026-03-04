import React from 'react';
import { motion } from 'framer-motion';
interface Props { children: React.ReactNode; className?: string; title?: string; subtitle?: string; background?: 'white' | 'gray' | 'gradient' | 'dark'; animate?: boolean; id?: string; }
const bgStyles = { white: 'bg-white', gray: 'bg-gray-50', gradient: 'bg-gradient-to-br from-gray-50 to-blue-50', dark: 'bg-gray-900 text-white' };
const Section: React.FC<Props> = ({ children, className = '', title, subtitle, background = 'white', animate = true, id }) => {
  const Wrapper = animate ? motion.section : 'section';
  const animProps = animate ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } } : {};
  return (
    <Wrapper id={id} className={`py-16 md:py-24 ${bgStyles[background]} ${className}`} {...animProps}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && <div className="text-center mb-12 md:mb-16">
          {title && <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>}
        {children}
      </div>
    </Wrapper>
  );
};
export default Section;
