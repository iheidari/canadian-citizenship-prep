import React from "react";
import Item from "./Item";
import { getCategories } from "@/app/services/categories";

const Categories = () => {
  const categories = getCategories();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap gap-8 p-4 ">
        {categories.map((item, index) => (
          <Item key={item.id} index={index} name={item.title} slug={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
