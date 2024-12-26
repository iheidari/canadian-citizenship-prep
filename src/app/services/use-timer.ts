import { useState } from "react";

const useTimer = () => {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [time, setTime] = useState(new Date().getTime());

  const resetTimer = () => {
    setStartTime(new Date().getTime());
  };

  /*
   * Returns the time difference in milliseconds
   */
  const getElapsedTime = () => {
    const currentTime = new Date().getTime();
    const diff = currentTime - time;
    setTime(currentTime);
    return diff;
  };

  const getTotalTime = () => {
    return new Date().getTime() - startTime;
  };

  return { startTime, resetTimer, getElapsedTime, getTotalTime };
};

export default useTimer;
