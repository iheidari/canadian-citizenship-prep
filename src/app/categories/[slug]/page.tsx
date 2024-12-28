import React from "react";
import { notFound } from "next/navigation";
import { getCategoryById } from "@/app/services/categories";
import {
  CategoriesKey,
  getQuestionsByCategory,
} from "@/app/services/questions";
import Test from "@/app/ui/Test";

// for nextjs 15, params will pass as a promise
type Params = Promise<{ slug: string }>;

interface IProps {
  params: Params;
}

export async function generateMetadata({ params }: IProps) {
  const slug = (await params).slug;
  const category = getCategoryById(slug);

  if (!category && slug !== "mock-test") {
    return { title: "Not Found" };
  }
  const title = category?.title ?? "Mock Test";
  return {
    title: `${title} | Canadian Citizenship Test`,
    description: `Take the ${title} and prepare for your Canadian Citizenship Test.`,
  };
}

const page = async ({ params }: IProps) => {
  const slug = (await params).slug;
  const category = getCategoryById(slug);

  if (!category && slug !== "mock-test") {
    return notFound();
  }

  return (
    <Test
      questions={getQuestionsByCategory(slug as CategoriesKey)}
      categoryId={slug}
    />
  );
};

export default page;
