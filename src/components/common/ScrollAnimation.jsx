import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade', 
  duration = 0.6,
  delay = 0,
  threshold = 0.2,
  once = true,
  className = '',
  style = {},
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  // Animation variants
  const animations = {
    fade: {
      visible: { opacity: 1, transition: { duration } },
      hidden: { opacity: 0 },
    },
    slideUp: {
      visible: { opacity: 1, y: 0, transition: { duration } },
      hidden: { opacity: 0, y: 50 },
    },
    slideDown: {
      visible: { opacity: 1, y: 0, transition: { duration } },
      hidden: { opacity: 0, y: -50 },
    },
    slideLeft: {
      visible: { opacity: 1, x: 0, transition: { duration } },
      hidden: { opacity: 0, x: 50 },
    },
    slideRight: {
      visible: { opacity: 1, x: 0, transition: { duration } },
      hidden: { opacity: 0, x: -50 },
    },
    scale: {
      visible: { opacity: 1, scale: 1, transition: { duration } },
      hidden: { opacity: 0, scale: 0.8 },
    },
    flip: {
      visible: { opacity: 1, rotateY: 0, transition: { duration } },
      hidden: { opacity: 0, rotateY: 90 },
    },
    rotate: {
      visible: { opacity: 1, rotate: 0, transition: { duration } },
      hidden: { opacity: 0, rotate: 20 },
    },
    pop: {
      visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 10 } },
      hidden: { opacity: 0, scale: 0.5 },
    },
    slideUpBig: {
      visible: { opacity: 1, y: 0, transition: { duration } },
      hidden: { opacity: 0, y: 100 },
    },
  };

  const selectedAnimation = animations[animation] || animations.fade;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={selectedAnimation}
      style={{ ...style }}
      className={className}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 