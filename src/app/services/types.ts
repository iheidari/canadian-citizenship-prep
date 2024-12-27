export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  categoryId: string;
}

export interface Category {
  id: string;
  title: string;
  percentage: number;
}
