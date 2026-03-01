'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from value (e.g., "120+" → 120, "99.9%" → 99.9)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  
  const springValue = useSpring(0, { duration: 2000 });
  const displayValue = useTransform(springValue, (latest) => {
    if (value.includes('.')) {
      return latest.toFixed(1) + suffix;
    }
    return Math.round(latest) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
        {displayValue}
      </motion.div>
      <div className="text-sm md:text-base text-gray-300">{label}</div>
    </motion.div>
  );
}
