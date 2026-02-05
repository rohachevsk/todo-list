import React, { useState, useEffect } from "react";
const Timer = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const formattedTime = time.toLocaleTimeString();
  return (
    <div className="timer card">
      <div className="time" aria-live="polite">{formattedTime}</div>
    </div>
  );
};
export default Timer;
