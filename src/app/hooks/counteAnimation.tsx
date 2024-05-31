"use client";
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
}: CounterAnimationProps): number {
  const [count, setCount] = useState<number>(initialValue);

  useEffect(() => {
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
  }, [initialValue, targetValue, duration]);

  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  return count;
});
