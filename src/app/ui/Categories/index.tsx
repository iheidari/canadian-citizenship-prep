import React from "react";
import Item from "./Item";
import { getCategories } from "@/app/services/categories";

const Categories = () => {
  const categories = getCategories();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8  w-full px-4 justify-items-center">
        {categories.map((item, index) => (
          <Item key={item.id} index={index} name={item.title} slug={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
