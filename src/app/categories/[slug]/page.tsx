import React from "react";
import { notFound } from "next/navigation";
import { getCategories, getCategoryById } from "@/app/services/categories";
import { DataType, getQuestions } from "@/app/services/questions";
import Test from "@/app/ui/Test";

// for nextjs 15, params will pass as a promise
type Params = Promise<{ slug: string }>;

interface IProps {
  params: Params;
}

const page = async ({ params }: IProps) => {
  const slug = (await params).slug;
  const category = getCategoryById(slug);

  if (!category && slug !== "random20") {
    return notFound();
  }

  return (
    <Test questions={getQuestions(slug as keyof DataType)} categoryId={slug} />
  );
};

export async function generateStaticParams() {
  const categories = await getCategories();
  const paths = [];

  for (const category of categories) {
    paths.push({ slug: category.id });
  }
  return paths;
}

export default page;
