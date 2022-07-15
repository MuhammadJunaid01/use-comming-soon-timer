import React from "react";

const UseTimer = () => {
  const commingSoon = (date) => {
    const dest = new Date(date).getTime();
    // const res = new Date("Jul 22 2022 03:44:00").getTime();

    const now = new Date().getTime();
    const diff = dest - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secounds = Math.floor((diff % (1000 * 60)) / 1000);
    if (days <= 0 || hours <= 0 || (minutes <= 0 && secounds <= 0)) {
    }
    const result = {
      days,
      hours,
      minutes,
      secounds,
    };
    return { result };
  };
  return { commingSoon };
};

export default UseTimer;
