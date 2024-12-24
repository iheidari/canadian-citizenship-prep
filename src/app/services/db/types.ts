export interface TestResult {
  categoryId: string;
  result: { questionId: number; isCorrect: boolean; timeMs: number }[];
  score: number; // we can easily calculate this base on result
  date: Date;
  totalTimeMs?: number;
}
