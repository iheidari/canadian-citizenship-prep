import React from "react";
import { notFound } from "next/navigation";
import { getCategoryById } from "@/app/services/categories";
import {
  CategoriesKey,
  getQuestionsByCategory,
} from "@/app/services/questions";
import Test from "@/app/ui/Test";
import StudyGuide from "@/app/ui/StudyGuide";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";

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

  // Mock test doesn't need study guide
  if (slug === "mock-test") {
    return (
      <Test
        questions={getQuestionsByCategory(slug as CategoriesKey)}
        categoryId={slug}
      />
    );
  }

  return (
    <>
      <Header />
      <StudyGuide category={category!} />
      <div className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Practice?</h2>
          <p className="mb-6 leading-relaxed">
            Now that you&apos;ve reviewed the study material, test your
            knowledge with our practice questions for{" "}
            <strong>{category!.title}</strong>. Each question is designed to
            mirror the official citizenship test format.
          </p>
        </div>
      </div>
      <Test
        questions={getQuestionsByCategory(slug as CategoriesKey)}
        categoryId={slug}
      />
      <Footer />
    </>
  );
};

export default page;
