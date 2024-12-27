"use client";
import React, { useEffect } from "react";
import Item from "./Item";
import { getCategories } from "@/app/services/categories";
import { Category } from "@/app/services/types";
import { getAllTestResults } from "@/app/services/db";
import { TestResult } from "@/app/services/db/types";

const Categories = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [testResults, setTestResults] = React.useState<TestResult[]>([]);
  useEffect(() => {
    const loadData = async () => {
      setCategories(getCategories());
      const testResults = await getAllTestResults();
      setTestResults(testResults);
    };
    loadData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 w-full justify-items-center">
        <Item
          index={-1}
          name={"Mock Test"}
          slug={"random20"}
          score={0}
          borderColor="border-green-500"
        />
        {categories.map((item, index) => {
          const score =
            testResults.find((r) => r.categoryId === item.id)?.score ?? 0;
          return (
            <Item
              key={item.id}
              index={index}
              name={item.title}
              slug={item.id}
              score={score}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
