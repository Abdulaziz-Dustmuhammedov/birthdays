import React, { useState, useEffect } from "react";
import "./index.css";

const Sister = ({ deadline = "2026-04-16" }) => {
  const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date()),
      days = Math.floor(total / (1000 * 60 * 60 * 24)),
      hours = Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((total / (1000 * 60)) % 60),
      seconds = Math.floor((total / 1000) % 60);

    return { total, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeRemaining(deadline);
      setTimeLeft(time);

      if (time.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="timer text-center text-2xl font-bold mt-4">
      <h1 className="title text-4xl my-20">"My sister's birthday"</h1>
      <div className="flex flex-col sm:flex-row m-auto items-center justify-center gap-2 mb-10 sm: mb-0">
        {/*  */}

        <div className="wrapper-sister flex flex-col items-center justify-center w-45 h-40 rounded-xl text-3xl">
          <span className="" id="days">
            {timeLeft.days}
          </span>{" "}
          days
        </div>
        <div className="wrapper-sister flex flex-col items-center justify-center w-45 h-40 rounded-xl text-3xl">
          <span className="" id="hours">
            {timeLeft.hours}
          </span>{" "}
          hours
        </div>
        <div className="wrapper-sister flex flex-col items-center justify-center w-45 h-40 rounded-xl text-3xl">
          <span className="" id="minutes">
            {timeLeft.minutes}
          </span>{" "}
          minutes
        </div>
        <div className="wrapper-sister flex flex-col items-center justify-center w-45 h-40 rounded-xl text-3xl">
          <span className="" id="seconds">
            {timeLeft.seconds}
          </span>{" "}
          seconds
        </div>
      </div>
    </div>
  );
};

export default Sister;
