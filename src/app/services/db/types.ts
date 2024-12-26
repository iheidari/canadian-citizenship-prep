type QuestionStatus = "correct" | "incorrect" | "skipped";

export interface ResultType {
  questionId: number;
  status?: QuestionStatus;
  timeMs: number;
}

export interface TestResult {
  categoryId: string;
  result: ResultType[];
  score: number;
  date: Date;
  totalTimeMs: number;
}
