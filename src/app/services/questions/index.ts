import data from "./data.json";

export const getQuestions = (id: string) => {
  return data[id];
};
