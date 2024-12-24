export const getBorderColor = (score: number) => {
  if (score >= 80) {
    return "border-green-500";
  }
  if (score >= 60) {
    return "border-yellow-500";
  }
  return "border-white";
};
