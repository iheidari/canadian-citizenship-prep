import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface ProgressbarProps {
  value: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({ value }) => {
  console.log("🚀 ~ value:", value);
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <div className="col-start-1 row-start-1">
      <div
        style={{ padding: "50px 40px 0", margin: "0 auto", maxWidth: "1080px" }}
      >
        <div className="grid grid-cols-[min-content_1fr_min-content] gap-6 items-center">
          <button
            className="outline-none h-4 w-4 bg-none border-none p-0 transition-filter duration-200"
            onClick={handleClose}
          >
            <Image src="/icons/close.svg" alt="close" width={18} height={18} />
          </button>
          <div className="h-4 bg-gray-700 rounded-md">
            <div
              className="h-4 bg-green-600 rounded-md transition-all duration-500"
              style={{ width: `${value}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
