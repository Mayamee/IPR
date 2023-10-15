import { useEffect, useState } from "react";

export const useClock = (updateInterval: number = 1000) => {
  const [time, setTime] = useState<number>(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(Date.now());
    }, updateInterval);
    return () => clearInterval(timer);
  }, [updateInterval]);

  return time;
};
