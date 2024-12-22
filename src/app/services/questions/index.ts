import data from "./data.json";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
}
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

const typedData: DataType = data;

export const getQuestions = (id: keyof DataType) => {
  return typedData[id];
};
