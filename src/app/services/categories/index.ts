import categories from "./data.json";

export const getCategoryById = (id: string) => {
  return categories.find((category) => category.id === id);
};

export const getCategories = () => {
  return categories;
};
