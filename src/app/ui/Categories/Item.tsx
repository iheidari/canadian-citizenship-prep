import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getBorderColor } from "./util";

interface Props {
  index: number;
  name: string;
  slug: string;
  score: number;
  borderColor?: string;
  imagePriority?: boolean;
}

const Item = (props: Props) => {
  return (
    <Link
      href={`/categories/${props.slug}`}
      className="w-full flex justify-center"
    >
      <div
        className={`relative border w-full sm:w-60 md:w-72  p-4 flex flex-col items-center 
          justify-between text-center border-black dark:border-white hover:border-blue-500 transition-colors duration-300 rounded-md m-2
          ${props.borderColor ?? getBorderColor(props.score)}`}
      >
        {/* Image Section */}
        <div className="relative w-full h-56 sm:h-56 md:h-64 rounded-md overflow-hidden">
          <Image
            src={`/images/categories/${props.slug}.webp`}
            alt={props.name}
            className="rounded-md w-full h-full object-cover"
            width={300}
            height={300}
            priority={props.imagePriority}
          />

          {/* Index */}
          {props.index >= 0 && (
            <div className="absolute top-2 left-2 text-lg font-bold bg-black text-white bg-opacity-70 rounded px-2">
              {props.index + 1}
            </div>
          )}

          {/* Score */}
          {props.score > 0 && (
            <div className="absolute bottom-2 right-2 text-lg font-bold bg-black text-white bg-opacity-70 rounded px-2">
              {props.score}%
            </div>
          )}
        </div>

        {/* Name Section */}
        <div className="w-full mt-4 text-lg sm:text-xl font-semibold">
          {props.name}
        </div>
      </div>
    </Link>
  );
};

export default Item;
