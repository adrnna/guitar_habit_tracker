import React, { useState, useEffect } from 'react';

const CountdownClock = ({ targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount

  }, []); // Empty dependency array ensures the effect runs only once after initial render

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const target = now + targetTime * 60 * 1000; // Convert target time to milliseconds
    const difference = target - now;

    if (difference <= 0) {
      // Countdown has reached or passed the target time
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
      <p>{`${timeRemaining.days} days ${timeRemaining.hours} hours ${timeRemaining.minutes} minutes ${timeRemaining.seconds} seconds`}</p>
    </div>
  );
};

export default CountdownClock;
