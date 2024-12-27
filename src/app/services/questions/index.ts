import { Question } from "../types";
import questionsData from "./data.json";
import categoriesData from "../categories/data.json";

export type CategoriesKey =
  | "applying-for-citizenship"
  | "rights-and-responsibilities-of-citizenship"
  | "who-we-are"
  | "canadas-history"
  | "modern-canada"
  | "how-canadians-govern-themselves"
  | "federal-elections"
  | "the-justice-system"
  | "canadian-symbols"
  | "canadas-economy"
  | "canadas-regions"
  | "random20";

export const getQuestionsByCategory = (id: CategoriesKey) => {
  if (id === "random20") {
    return getRandomQuestions(20);
  }
  return questionsData.filter((question) => question.categoryId === id);
};

export function getRandomQuestions(totalQuestions: number): Question[] {
  // Step 1: Calculate the number of questions per category based on the percentage
  const categoryQuestionCounts = categoriesData.map((category) => {
    return {
      id: category.id,
      count: Math.floor((category.percentage / 100) * totalQuestions), // Use Math.floor instead of Math.round
    };
  });

  // Step 2: Adjust counts to ensure the total matches `totalQuestions`
  const totalAllocated = categoryQuestionCounts.reduce(
    (sum, item) => sum + item.count,
    0
  );
  let remaining = totalQuestions - totalAllocated;

  // Distribute the remaining questions, giving 1 extra question to categories until the remaining count is 0
  while (remaining > 0) {
    for (let i = 0; i < categoryQuestionCounts.length && remaining > 0; i++) {
      categoryQuestionCounts[i].count++;
      remaining--;
    }
  }

  // Step 3: Randomly pick questions from each category
  const selectedQuestions: Question[] = [];
  categoryQuestionCounts.forEach(({ id: categoryId, count }) => {
    const categoryQuestions = getQuestionsByCategory(
      categoryId as CategoriesKey
    );
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
