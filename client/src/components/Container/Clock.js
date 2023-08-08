import React, { useState, useEffect } from 'react';
import './Clockcss.css';
const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <div className="digital-clock">
      <div className="time">
        <span>{hours}</span>
        <span className="colon">:</span>
        <span>{minutes}</span>
        <span className="colon">:</span>
        <span>{seconds}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
