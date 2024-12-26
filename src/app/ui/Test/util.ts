import { saveTestResult } from "@/app/services/db";
import { ResultType, TestResult } from "@/app/services/db/types";
import { QuestionType } from "./types";

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
  results: ResultType[],
  totalQuestionsCount: number
) => {
  return Math.floor(
    (results.filter((r) => r.status === "correct").length /
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

export const getQuestionById = (id: number, questions: QuestionType[]) => {
  return questions.find((q) => q.id === id);
};

export const isLastQuestion = (
  currentQuestionId: number,
  questions: QuestionType[]
) => {
  return currentQuestionId === questions[questions.length - 1].id;
};

export const getNextQuestionId = (
  currentQuestionId: number,
  questions: QuestionType[]
) => {
  const currentIndex = questions.findIndex((q) => q.id === currentQuestionId);
  return questions[currentIndex + 1].id;
};

export const updateResults = (results: ResultType[], newResult: ResultType) => {
  const updatedResult = [...results];
  const index = updatedResult.findIndex(
    (r) => r.questionId === newResult.questionId
  );
  if (index === -1) {
    updatedResult.push(newResult);
  } else {
    updatedResult[index] = newResult;
  }

  return updatedResult;
};
