"use client";

import React, { useState } from "react";
import Question from "./Question";
import { QuestionType } from "./type";
import Progressbar from "./Progressbar";
import ActionsBar from "./ActionsBar";
import Answer from "./Answer";
import { useRouter } from "next/navigation";

interface Props {
  questions: QuestionType[];
}

const Test = (props: Props) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const currentQuestion = props.questions[currentQuestionIndex];

  const handleOptionChanged = (index: number) => {
    setSelectedOption(index);
  };

  const handleSkip = () => {
    setResult(currentQuestion.options[currentQuestion.answer]);
  };

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setResult("");
      return;
    }
    setResult(currentQuestion.options[currentQuestion.answer]);
  };

  const handleContinue = () => {
    const isLastQuestion = currentQuestionIndex === props.questions.length - 1;
    if (isLastQuestion) {
      // go to result page
      router.back();
      return;
    }
    setResult(null);
    setSelectedOption(null);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <div
      className="max-w-[1140px] mx-auto min-w-[900px]"
      style={{ maxWidth: "1140px", margin: "0 auto" }}
    >
      <div className="absolute inset-0">
        <div className="py-6 px-4 md:p-0 gap-0 grid grid-rows-[100px_1fr_140px] min-h-[690px] grid-cols-[100%] overflow-hidden absolute h-full w-full">
          <Progressbar
            value={((currentQuestionIndex + 1) / props.questions.length) * 100}
          />
          <Question
            question={props.questions[currentQuestionIndex]}
            selectedOption={selectedOption}
            onOptionChanged={handleOptionChanged}
          />
          {result === null ? (
            <ActionsBar
              onSkip={handleSkip}
              onSubmit={selectedOption === null ? undefined : handleSubmit}
            />
          ) : (
            <Answer onContinue={handleContinue} correctAnswer={result} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
