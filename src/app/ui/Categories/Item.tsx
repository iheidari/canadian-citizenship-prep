import Link from "next/link";
import React from "react";

interface Props {
  index: number;
  name: string;
  slug: string;
}

const Item = (props: Props) => {
  return (
    <Link href={`/categories/${props.slug}`}>
      <div className="relative text-white border-white border w-32 h-32 p-2 overflow-hidden break-words flex items-center justify-center text-center hover:border-blue-500 transition-colors duration-300">
        <div className="absolute top-2 left-2 text-sm font-bold">
          {props.index + 1}
        </div>
        <div>{props.name}</div>
      </div>
    </Link>
  );
};

export default Item;
