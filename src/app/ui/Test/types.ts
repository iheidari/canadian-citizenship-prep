export type QuestionType = {
  id: number;
  question: string;
  options: string[];
  answer: number; // Index of the correct answer
};

export type PageMode = "normal" | "continue" | "review";
