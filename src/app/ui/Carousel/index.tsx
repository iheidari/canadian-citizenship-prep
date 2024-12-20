"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  CtaMode,
  getCtaText,
  getOptionColor,
  getStatusColor,
  MessageType,
} from "./util";
import { useRouter } from "next/navigation";

// Define types for the question structure
type Question = {
  question: string;
  options: string[];
  answer: number; // Index of the correct answer
};

// Define props for the Carousel component
type CarouselProps = {
  questions: Question[];
};

const Carousel: React.FC<CarouselProps> = ({ questions }) => {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [ctaMode, setCtaMode] = useState<CtaMode>("submit");
  const [message, setMessage] = useState<MessageType>({ text: "" });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = useCallback(() => {
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setCtaMode("submit");
    setMessage({ text: "" });
  }, [currentQuestionIndex, questions.length]);

  const handlePrevious = useCallback(() => {
    setSelectedOption(null);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    setCtaMode("submit");
  }, [currentQuestionIndex]);

  const handleBack = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleSubmit = useCallback(() => {
    if (selectedOption == null) {
      setMessage({ text: "Please select an option first!", status: "error" });
      return;
    }
    if (selectedOption === currentQuestion.answer) {
      setMessage({ text: "Correct Answer!", status: "success" });
    } else {
      setMessage({
        text: `Correct answer: ${
          currentQuestion.options[currentQuestion.answer]
        }`,
        status: "error",
      });
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCtaMode("next");
    } else {
      setCtaMode("back");
    }
  }, [
    selectedOption,
    currentQuestion.answer,
    currentQuestion.options,
    currentQuestionIndex,
    questions.length,
  ]);

  const handleCtaClick = useCallback(() => {
    if (ctaMode === "submit") {
      handleSubmit();
    } else if (ctaMode === "next") {
      handleNext();
    } else if (ctaMode === "back") {
      handleBack();
    }
  }, [ctaMode, handleBack, handleNext, handleSubmit]);

  const handleOptionSelect = useCallback((index: number) => {
    setSelectedOption(index);
  }, []);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Enter": // Submit on Enter
          handleCtaClick();
          break;
        case "n": // Next question
        case "N": // ESC key also moves to next question
          handleNext();
          break;
        case "p": // Previous question
        case "P": // Previous question
          handlePrevious();
          break;
        case "1": // Select Option 1
          handleOptionSelect(0);
          break;
        case "2": // Select Option 2
          handleOptionSelect(1);
          break;
        case "3": // Select Option 3
          handleOptionSelect(2);
          break;
        case "4": // Select Option 4
          handleOptionSelect(3);
          break;
        default:
          break;
      }
    };

    // Attach the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    currentQuestionIndex,
    handleNext,
    handleOptionSelect,
    handlePrevious,
    handleCtaClick,
    selectedOption,
  ]);

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="w-full flex flex-row gap-3 justify-center items-center text-white">
      <div className="h-40 w-16">
        {currentQuestionIndex === 0 ? null : (
          <button
            id="previous"
            onClick={handlePrevious}
            className="h-full w-full text-4xl font-bold text-white hover:bg-slate-700"
            disabled={currentQuestionIndex === 0}
          >
            &lt;
          </button>
        )}
      </div>

      <div className="w-full">
        {/* Question */}
        <h2 className="text-2xl font-bold mt-6 mb-10 h-16">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="mb-8">
          {currentQuestion.options.map((option, index) => (
            <label
              key={index}
              className={`block py-4 cursor-pointer text-lg ${
                selectedOption === index
                  ? getOptionColor(message.status)
                  : "text-white"
              }`}
            >
              <input
                type="radio"
                name="option"
                value={index}
                checked={selectedOption === index}
                onChange={() => handleOptionSelect(index)}
                className="mr-2"
                disabled={ctaMode !== "submit"}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Submit and Show Answer Buttons */}
        <div className="flex my-4 items-center">
          <button
            onClick={handleCtaClick}
            className="px-6 py-2 w-40 bg-blue-700 text-white rounded hover:bg-blue-900"
          >
            {getCtaText(ctaMode)}
          </button>
          <span className={`ml-5 ${getStatusColor(message.status)}`}>
            {message.text}
          </span>
        </div>
      </div>
      <div className="h-40 w-16">
        {currentQuestionIndex === questions.length - 1 ? null : (
          <button
            id="next"
            onClick={handleNext}
            className="w-full h-full text-4xl font-bold text-white hover:bg-slate-700"
            disabled={currentQuestionIndex === questions.length - 1}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
