import React, { useState, useEffect } from 'react';

const CountdownClock = ({ targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 60);

  useEffect(() => {
    setTimeRemaining(targetTime * 60); // Reset the timeRemaining when targetTime changes
  }, [targetTime]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevSeconds => Math.max(prevSeconds - 1, 0));
    }, 1000);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetTime]); 

  const hours = Math.floor(timeRemaining / 60 / 60);
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  

  return (
    <div className="countdown-clock">
      <p>{`${hours < 10 ? '0' : ''}${hours}:${minutes === 60 ? '00' : minutes < 10 ? '0' : ''}${minutes < 60 ? minutes : ''}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
    </div>
  );
};

export default CountdownClock;
