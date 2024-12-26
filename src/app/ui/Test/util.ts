import { saveTestResult } from "@/app/services/db";
import { TestResult } from "@/app/services/db/types";

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

export const calculateScore = (
  result: TestResult["result"],
  totalQuestionsCount: number
) => {
  return Math.floor(
    (result.filter((r) => r.status === "correct").length /
      totalQuestionsCount) *
      100
  );
};

export const saveResult = async (
  testResult: TestResult,
  totalQuestionsCount: number,
  totalTime: number
) => {
  testResult.score = calculateScore(testResult.result, totalQuestionsCount);
  testResult.totalTimeMs = totalTime;
  await saveTestResult(testResult);
};
