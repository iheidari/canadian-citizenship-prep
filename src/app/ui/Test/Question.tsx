import React, { useEffect, useState } from "react";
import { QuestionType } from "./type";

interface CarouselProps {
  question: QuestionType;
  selectedOption: string | null;
  onOptionChanged: (item: string) => void;
}
const Question = (props: CarouselProps) => {
  const [randomizedOptions, setRandomizedOptions] = useState<string[]>([]);
  useEffect(() => {
    // randomly order the options
    setRandomizedOptions(
      [...props.question.options].sort(() => Math.random() - 0.5)
    );
  }, [props.question.options]);

  return (
    <div className="col-start-1 row-start-2 flex flex-col min-h-0 w-full">
      <div className="grid h-full relative w-full">
        <div className="transform translate-x-0 col-start-1 row-start-1 min-h-0">
          <div className="grid h-full justify-center text-center w-full">
            <div className="grid min-h-[450px] w-full md:w-[600px] grid-rows-[min-content_minmax(0,1fr)] gap-6 transform translate-z-0 overflow-visible px-4">
              {/* Question */}
              <h2 className="text-base sm:text-lg md:text-2xl font-bold mt-4 md:mt-6 text-left md:text-center md:whitespace-normal">
                {props.question.question}
              </h2>
              {/* Options */}
              <div className="mb-6 md:mb-8">
                {randomizedOptions.map((option) => (
                  <label
                    key={option}
                    className={`block py-2 md:py-4 cursor-pointer text-base md:text-lg ${
                      props.selectedOption === option
                        ? "text-blue-400"
                        : "text-white"
                    } text-left md:whitespace-normal`}
                  >
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={props.selectedOption === option}
                      onChange={() => props.onOptionChanged(option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
