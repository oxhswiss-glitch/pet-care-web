'use client';

import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function MotionSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
  once = true,
}: MotionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
