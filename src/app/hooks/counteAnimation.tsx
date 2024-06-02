"use client";
import { useInView } from "framer-motion";
import React, { memo, useEffect, useState } from "react";

interface CounterAnimationProps {
  initialValue: number;
  targetValue: number;
  duration: number;
}

export default memo(function CounterAnimation({
  initialValue,
  targetValue,
  duration,
}: CounterAnimationProps): React.ReactElement {
  const [count, setCount] = useState<number>(initialValue);
  const pRef = React.useRef(null);
  const inView = useInView(pRef, { once: true });
  useEffect(() => {
    if (!inView) return;
    let startValue: number = initialValue;
    const totalSteps = Math.floor(duration / 10);
    const increment: number = (targetValue - initialValue) / totalSteps;
    const interval: number = 10;
    const counter = setInterval(() => {
      startValue += increment;
      setCount(Math.round(startValue));
      if (
        (increment > 0 && startValue >= targetValue) ||
        (increment < 0 && startValue <= targetValue)
      ) {
        clearInterval(counter);
        setCount(targetValue);
      }
    }, interval);

    return () => clearInterval(counter);
  }, [inView]);

  return (
    <p ref={pRef} className="text-h4 md:text-h3 text-D_Gray font-semibold">
      {count}
    </p>
  );
});
