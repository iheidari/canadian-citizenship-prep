import React from "react";
import { QuestionType } from "./type";

interface CarouselProps {
  question: QuestionType;
  selectedOption: number | null;
  onOptionChanged: (index: number) => void;
}

const Question = (props: CarouselProps) => {
  return (
    <div className="col-start-1 row-start-2 flex flex-col min-h-0 w-full">
      <div className="grid h-full relative w-full">
        <div className="transform translate-x-0 col-start-1 row-start-1 min-h-0">
          <div className="grid h-full justify-center text-center w-full">
            <div className="grid min-h-[450px] w-full md:w-[600px] grid-rows-[min-content_minmax(0,1fr)] gap-6 transform translate-z-0 overflow-visible px-4">
              {/* Question */}
              <h2 className="text-lg md:text-2xl font-bold mt-6 text-left md:text-center md:whitespace-normal">
                {props.question.question}
              </h2>
              {/* Options */}
              <div className="mb-8">
                {props.question.options.map((option, index) => (
                  <label
                    key={index}
                    className={`block py-4 cursor-pointer text-base md:text-lg ${
                      props.selectedOption === index
                        ? "text-blue-400"
                        : "text-white"
                    } text-left md:whitespace-normal`}
                  >
                    <input
                      type="radio"
                      name="option"
                      value={index}
                      checked={props.selectedOption === index}
                      onChange={() => props.onOptionChanged(index)}
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
