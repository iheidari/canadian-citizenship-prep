export const getResultText = (score: number) => {
  if (score < 50) {
    return "Practice and try again!";
  }
  if (score < 70) {
    return "Good job!";
  }
  if (score < 90) {
    return "Excellent";
  }
  return "WOW... Great job!";
};

export const convertTime = (time: number) => {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
};
