import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';

const ShinyText = ({
  text,
  disabled = false,
  className = '',
  color = '#b5b5b5',
}) => {
  /* Removed useAnimationFrame and infinite loop for GPU performance */
  const textStyle = {
    color: color,
    display: 'inline-block'
  };

  return (
    <span
      className={`${className}`}
      style={textStyle}>
      {text}
    </span>
  );
};

export default ShinyText;
