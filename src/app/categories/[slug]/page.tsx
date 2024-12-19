import React from "react";
import { notFound } from "next/navigation";
import { getCategories, getCategoryById } from "@/app/services/categories";
import Carousel from "@/app/ui/Carousel";
import { getQuestions } from "@/app/services/questions";

// fro  nextjs 15, params will pass as a promise
type Params = Promise<{ slug: string }>;

interface IProps {
  params: Params;
}

const page = async ({ params }: IProps) => {
  const slug = (await params).slug;
  const category = getCategoryById(slug);

  if (!category) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      {/* <h2 className="text-3xl font-bold my-10 ml-8">{category.title}</h2> */}
      <Carousel questions={getQuestions(slug)} />
    </div>
  );
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await getCategories();
  const paths = [];

  for (const category of categories) {
    paths.push({ slug: category.id });
  }
  return paths;
}

export default page;
