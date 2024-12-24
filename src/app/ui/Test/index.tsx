"use client";

import React, { useEffect, useState } from "react";
import Question from "./Question";
import { QuestionType } from "./type";
import Progressbar from "./Progressbar";
import ActionsBar from "./ActionsBar";
import Answer from "./Answer";
import { useRouter } from "next/navigation";
import { TestResult } from "@/app/services/db/types";
import { saveTestResult } from "@/app/services/db";

interface Props {
  categoryId: string;
  questions: QuestionType[];
}

let testResult: TestResult = {
  categoryId: "1",
  result: [],
  score: 0,
  date: new Date(),
};
let startTime: number;
let time: number;

const Test = (props: Props) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const currentQuestion = props.questions[currentQuestionIndex];

  useEffect(() => {
    testResult = {
      categoryId: props.categoryId,
      result: [],
      score: 0,
      date: new Date(),
    };
    startTime = new Date().getTime();
    time = new Date().getTime();
  }, [props.categoryId]);

  const handleOptionChanged = (index: number) => {
    setSelectedOption(index);
  };

  const handleSkip = () => {
    setResult(currentQuestion.options[currentQuestion.answer]);
  };

  const handleSubmit = () => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - time;
    if (selectedOption === currentQuestion.answer) {
      testResult.result.push({
        questionId: currentQuestionIndex,
        isCorrect: true,
        timeMs: timeDiff,
      });
      setResult("");
      return;
    }
    testResult.result.push({
      questionId: currentQuestionIndex,
      isCorrect: false,
      timeMs: timeDiff,
    });
    setResult(currentQuestion.options[currentQuestion.answer]);
  };

  const handleContinue = async () => {
    const isLastQuestion = currentQuestionIndex === props.questions.length - 1;
    if (isLastQuestion) {
      // go to result page
      testResult.score = Math.floor(
        (testResult.result.filter((r) => r.isCorrect).length /
          props.questions.length) *
          100
      );
      testResult.totalTimeMs = new Date().getTime() - startTime;
      await saveTestResult(testResult);
      router.back();
      return;
    }
    const currentTime = new Date().getTime();
    time = currentTime;

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
            value={(currentQuestionIndex / props.questions.length) * 100}
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
