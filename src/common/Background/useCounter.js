import { useState, useEffect } from "react";

export const useCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => (seconds < 3 ? seconds + 1 : (seconds = 0)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
};
