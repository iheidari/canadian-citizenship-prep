import Image from "next/image";
import React from "react";

interface Props {
  correctAnswer?: string;
  onContinue: () => void;
}

const Answer = (props: Props) => {
  const isCorrect = !props.correctAnswer;
  const color = isCorrect
    ? "bg-green-400 border-green-400 dark:bg-green-600 dark:border-green-600"
    : "bg-red-400 border-red-400 dark:bg-red-600 dark:border-red-600";

  return (
    <div className="grid h-full w-full col-start-1 row-start-3 relative z-[40]">
      <div className="col-start-1 row-start-1 min-h-0">
        <div className="absolute bottom-0 border-t-2 border-gray-500 dark:border-white max-h-[140px] min-h-[140px] overflow-hidden w-full">
          <div
            className={`grid items-center md:grid-rows-[auto] md:grid-cols-5 flex-col justify-between gap-y-2 gap-x-4 min-h-[140px] px-10 w-full max-w-[1000px] relative touch-none grid-rows-[1fr] grid-cols-[100%] justify-items-stretch
              lg:ml-[calc(50%-500px)] `}
          >
            {/* Icon and Text Section */}
            <div className="md:flex md:flex-col md:col-span-4 md:justify-center md:min-h-[140px] md:py-4 md:relative bottom-0 left-0 right-0 ">
              <div className="grid md:grid-cols-[min-content_1fr] gap-4 auto-cols-max">
                {/* Icon */}
                <div className="hidden md:flex justify-center items-center bg-[rgba(100,100,100,0.1)] dark:bg-[rgba(250,250,250,0.1)] rounded-full h-[80px] w-[80px]">
                  <Image
                    src={isCorrect ? "/icons/tick.svg" : "/icons/cross.svg"}
                    alt="check"
                    width={31}
                    height={41}
                    className="block filter dark:invert"
                  />
                </div>
                {/* Text */}
                <div
                  className={`flex flex-col justify-center font-bold text-lg ${
                    isCorrect
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  <div>{isCorrect ? "Great job!" : "Correct answer:"}</div>
                  <div className="text-base font-normal">
                    {props.correctAnswer}
                  </div>
                </div>
              </div>
            </div>
            {/* Continue Button */}
            <div className="md:col-start-5 md:justify-self-end">
              <button
                onClick={props.onContinue}
                className={`outline-none min-w-[150px] w-full md:w-auto h-[50px] px-4 flex justify-center items-center uppercase font-bold text-lg rounded-xl border-2 ${color}`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
