import { Question } from "../types";
import questionsData from "./data.json";
import categoriesData from "../categories/data.json";

export interface DataType {
  "applying-for-citizenship": Question[];
  "rights-and-responsibilities-of-citizenship": Question[];
  "who-we-are": Question[];
  "canadas-history": Question[];
  "modern-canada": Question[];
  "how-canadians-govern-themselves": Question[];
  "federal-elections": Question[];
  "the-justice-system": Question[];
  "canadian-symbols": Question[];
  "canadas-economy": Question[];
  "canadas-regions": Question[];
}

const typedData: DataType = questionsData;
type categoriesKey = keyof DataType | "random20";

export const getQuestions = (id: categoriesKey) => {
  if (id === "random20") {
    return getRandomQuestions(20);
  }
  return typedData[id];
};

type QuestionsByCategory = Record<string, Question[]>;

export function getRandomQuestions(totalQuestions: number): Question[] {
  const questionsByCategory: QuestionsByCategory = questionsData;
  // Step 1: Calculate the number of questions per category based on the percentage
  const categoryQuestionCounts = categoriesData.map((category) => {
    return {
      id: category.id,
      count: Math.round((category.percentage / 100) * totalQuestions), // Calculate questions based on percentage
    };
  });

  // Step 2: Adjust counts to ensure the total matches `totalQuestions`
  const totalAllocated = categoryQuestionCounts.reduce(
    (sum, item) => sum + item.count,
    0
  );
  let remaining = totalQuestions - totalAllocated;

  // Distribute the remaining questions
  while (remaining > 0) {
    for (let i = 0; i < categoryQuestionCounts.length && remaining > 0; i++) {
      categoryQuestionCounts[i].count++;
      remaining--;
    }
  }

  // Step 3: Randomly pick questions from each category
  const selectedQuestions: Question[] = [];
  categoryQuestionCounts.forEach(({ id, count }) => {
    const categoryQuestions = questionsByCategory[id];
    if (categoryQuestions && categoryQuestions.length > 0) {
      // Shuffle and pick the required number of questions
      const shuffledQuestions = [...categoryQuestions].sort(
        () => Math.random() - 0.5
      );
      selectedQuestions.push(...shuffledQuestions.slice(0, count));
    }
  });

  return selectedQuestions.sort(() => Math.random() - 0.5);
}
