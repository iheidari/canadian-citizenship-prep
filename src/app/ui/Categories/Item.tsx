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
      <div className="relative text-white border-white border w-40 h-40 p-2 overflow-hidden break-words flex items-center justify-center text-center hover:border-blue-500 transition-colors duration-300 rounded-md m-0">
        <div className="absolute top-2 left-2 text-lg font-bold">
          {props.index + 1}
        </div>
        <div className="text-lg">{props.name}</div>
        <div className="absolute bottom-2 right-2 text-lg font-bold">0%</div>
      </div>
    </Link>
  );
};

export default Item;
