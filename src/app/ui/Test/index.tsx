"use client";

import React, { useEffect, useState } from "react";
import Question from "./Question";
import { PageMode, QuestionType } from "./types";
import Progressbar from "./Progressbar";
import ActionsBar from "./ActionsBar";
import Answer from "./Answer";
import { useRouter } from "next/navigation";
import { TestResult } from "@/app/services/db/types";
import { getTestResult } from "@/app/services/db";
import ResultModal from "./ResultModal";
import {
  getNextQuestionId,
  getQuestionById,
  isLastQuestion,
  saveResult,
  updateResults,
} from "./util";
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

  const [questions, setQuestions] = useState<QuestionType[]>(props.questions);
  const [currentQuestionId, setCurrentQuestionId] = useState(
    props.questions[0].id
  );
  const [progressValue, setProgressValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const [pageMode, setPageMode] = useState<PageMode>("normal");

  const [showPageModeModal, setShowPageModeModal] = useState(false);
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
        previousTestResult = { ...previousResult };
        if (lastUnAnsweredQuestionIndex === questions.length) {
          // at least one incorrect answer
          if (previousResult.result.some((r) => r.status === "incorrect")) {
            setShowPageModeModal(true);
            setPageMode("review");
          }
        }
        if (
          lastUnAnsweredQuestionIndex > 0 &&
          lastUnAnsweredQuestionIndex < questions.length
        ) {
          setShowPageModeModal(true);
          setPageMode("continue");
        }
      }
    };

    if (props.categoryId !== "mock-test") {
      loadTestResult();
    }
  }, [props.categoryId, questions.length]);

  const handleOptionChanged = (option: string) => {
    setSelectedOption(option);
  };

  const handleSkip = () => {
    const currentQuestion = getQuestionById(currentQuestionId, questions);
    if (currentQuestion === undefined) {
      return;
    }

    testResult.result.push({
      questionId: currentQuestionId,
      status: "skipped",
      timeMs: timer.getElapsedTime(),
    });
    setResult(currentQuestion.options[currentQuestion.answer]);
  };

  const handleSubmit = () => {
    const currentQuestion = getQuestionById(currentQuestionId, questions);
    if (currentQuestion === undefined) {
      return;
    }
    const timeDiff = timer.getElapsedTime();

    setProgressValue((prev) => prev + 1);

    if (selectedOption === currentQuestion.options[currentQuestion.answer]) {
      testResult.result = updateResults(testResult.result, {
        questionId: currentQuestionId,
        status: "correct",
        timeMs: timeDiff,
      });

      setResult("");
      return;
    }

    testResult.result = updateResults(testResult.result, {
      questionId: currentQuestionId,
      status: "incorrect",
      timeMs: timeDiff,
    });

    setResult(currentQuestion.options[currentQuestion.answer]);
  };

  const handleContinueToNext = async () => {
    const isLast = isLastQuestion(currentQuestionId, questions);
    if (isLast) {
      saveResult(testResult, props.questions.length, timer.getTotalTime());
      setShowFinalResult(true);
      return;
    }

    timer.getElapsedTime();

    setResult(null);
    setSelectedOption(null);
    const nextQuestionId = getNextQuestionId(currentQuestionId, questions);
    setCurrentQuestionId(nextQuestionId);
  };

  const handleExitTest = () => {
    if (testResult.result.length > 0) {
      saveResult(testResult, props.questions.length, timer.getTotalTime());
      setShowFinalResult(true);
      return;
    }
    router.back();
  };

  const handleContinueModalAction = () => {
    testResult = { ...previousTestResult };
    if (pageMode === "continue") {
      const lastUnAnsweredQuestionIndex = previousTestResult.result.length;
      setCurrentQuestionId(props.questions[lastUnAnsweredQuestionIndex].id);
      setProgressValue(lastUnAnsweredQuestionIndex);
    }
    if (pageMode === "review") {
      const wrongAnsweredQuestionIds = testResult.result
        .filter((q) => q.status === "incorrect")
        .map((q) => q.questionId);
      setCurrentQuestionId(wrongAnsweredQuestionIds[0]);
      const newQuestionList = props.questions.filter((q) =>
        wrongAnsweredQuestionIds.includes(q.id)
      );

      setQuestions(newQuestionList);
    }
    setShowPageModeModal(false);
  };

  return (
    <div
      className="max-w-[1140px] mx-auto min-w-[900px]"
      style={{ maxWidth: "1140px", margin: "0 auto" }}
    >
      <div className="absolute inset-0">
        <div className="py-6 px-4 md:p-0 gap-0 grid grid-rows-[100px_1fr_140px] min-h-[690px] grid-cols-[100%] overflow-hidden absolute h-full w-full">
          <Progressbar
            value={(progressValue / questions.length) * 100}
            onClose={handleExitTest}
            isJustStarted={progressValue === 0}
          />
          <Question
            question={getQuestionById(currentQuestionId, questions)}
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
              score={testResult.score}
              time={testResult.totalTimeMs}
            />
          ) : null}
          {showPageModeModal ? (
            <ContinueModal
              pageMode={pageMode}
              onAction={handleContinueModalAction}
              onReset={() => setShowPageModeModal(false)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Test;
