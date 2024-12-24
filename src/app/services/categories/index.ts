import { Category } from "../types";
import categories from "./data.json";

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};

export const getCategories = (): Category[] => {
  return categories;
};
