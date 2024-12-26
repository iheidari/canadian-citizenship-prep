"use client";

import React, { useEffect, useState } from "react";
import Question from "./Question";
import { QuestionType } from "./type";
import Progressbar from "./Progressbar";
import ActionsBar from "./ActionsBar";
import Answer from "./Answer";
import { useRouter } from "next/navigation";
import { TestResult } from "@/app/services/db/types";
import { getTestResult } from "@/app/services/db";
import ResultModal from "./ResultModal";
import { saveResult } from "./util";
import useTimer from "@/app/services/use-timer";
import ContinueModal from "./ContinueModal";

interface Props {
  categoryId: string;
  questions: QuestionType[];
}

let previousTestResult: TestResult;
let testResult: TestResult;

const Test = (props: Props) => {
  const router = useRouter();
  const timer = useTimer();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const [showContinueModal, setShowContinueModal] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);

  useEffect(() => {
    testResult = {
      categoryId: props.categoryId,
      result: [],
      score: 0,
      totalTimeMs: 0,
      date: new Date(),
    };
  }, [props.categoryId]);

  useEffect(() => {
    const loadTestResult = async () => {
      const previousResult = await getTestResult(props.categoryId);

      if (previousResult) {
        const lastUnAnsweredQuestionIndex = previousResult.result.length;
        if (
          lastUnAnsweredQuestionIndex > 0 &&
          lastUnAnsweredQuestionIndex < props.questions.length
        ) {
          setShowContinueModal(true);
          previousTestResult = previousResult;
        }
      }
    };

    loadTestResult();
  }, [props.categoryId, props.questions.length]);

  const handleOptionChanged = (option: string) => {
    setSelectedOption(option);
  };

  const handleSkip = () => {
    const currentQuestion = props.questions[currentQuestionIndex];

    testResult.result.push({
      questionId: currentQuestionIndex,
      status: "skipped",
      timeMs: timer.getElapsedTime(),
    });
    setResult(currentQuestion.options[currentQuestion.answer]);
  };

  const handleSubmit = () => {
    const currentQuestion = props.questions[currentQuestionIndex];
    const timeDiff = timer.getElapsedTime();

    setProgressValue((prev) => prev + 1);

    if (selectedOption === currentQuestion.options[currentQuestion.answer]) {
      testResult.result.push({
        questionId: currentQuestionIndex,
        status: "correct",
        timeMs: timeDiff,
      });
      setResult("");
      return;
    }

    testResult.result.push({
      questionId: currentQuestionIndex,
      status: "incorrect",
      timeMs: timeDiff,
    });
    setResult(currentQuestion.options[currentQuestion.answer]);
  };

  const handleContinueToNext = async () => {
    const isLastQuestion = currentQuestionIndex === props.questions.length - 1;
    if (isLastQuestion) {
      saveResult(testResult, props.questions.length, timer.getTotalTime());
      setShowFinalResult(true);
      return;
    }

    timer.getElapsedTime();

    setResult(null);
    setSelectedOption(null);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleClose = () => {
    if (testResult.result.length > 0) {
      saveResult(testResult, props.questions.length, timer.getTotalTime());
      setShowFinalResult(true);
      return;
    }
    router.back();
  };

  const handleContinuePreviousTest = () => {
    testResult = { ...previousTestResult };
    const lastUnAnsweredQuestionIndex = previousTestResult.result.length;
    if (lastUnAnsweredQuestionIndex < props.questions.length) {
      setCurrentQuestionIndex(lastUnAnsweredQuestionIndex);
      setProgressValue(lastUnAnsweredQuestionIndex);
    }
    setShowContinueModal(false);
  };

  return (
    <div
      className="max-w-[1140px] mx-auto min-w-[900px]"
      style={{ maxWidth: "1140px", margin: "0 auto" }}
    >
      <div className="absolute inset-0">
        <div className="py-6 px-4 md:p-0 gap-0 grid grid-rows-[100px_1fr_140px] min-h-[690px] grid-cols-[100%] overflow-hidden absolute h-full w-full">
          <Progressbar
            value={(progressValue / props.questions.length) * 100}
            onClose={handleClose}
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
            <Answer onContinue={handleContinueToNext} correctAnswer={result} />
          )}
          {showFinalResult ? (
            <ResultModal
              onClose={() => router.back()}
              // onReview={() =>
              //   router.push(`/categories/${props.categoryId}?review=true`)
              // }
              score={testResult.score}
              time={testResult.totalTimeMs}
            />
          ) : null}
          {showContinueModal ? (
            <ContinueModal
              onContinue={handleContinuePreviousTest}
              onReset={() => setShowContinueModal(false)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Test;
