"use client";
import React, { useState, useEffect, useCallback } from "react";

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = useCallback(() => {
    setShowAnswer(false);
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }, [currentQuestionIndex, questions.length]);

  const handlePrevious = useCallback(() => {
    setShowAnswer(false);
    setSelectedOption(null);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }, [currentQuestionIndex]);

  const handleSubmit = useCallback(() => {
    if (selectedOption !== null) {
      alert(
        selectedOption === currentQuestion.answer
          ? "Correct!"
          : `Incorrect. The correct answer is: ${
              currentQuestion.options[currentQuestion.answer]
            }`
      );
    } else {
      alert("Please select an option first!");
    }
  }, [currentQuestion.answer, currentQuestion.options, selectedOption]);

  const handleShowAnswer = useCallback(() => {
    setSelectedOption(currentQuestion.answer);
    setShowAnswer(true);
  }, [currentQuestion.answer]);

  const handleOptionSelect = useCallback((index: number) => {
    setSelectedOption(index);
  }, []);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Enter": // Submit on Enter
          handleSubmit();
          break;
        case "A": // Show Answer on Space
        case "a": // Show Answer on Space
          e.preventDefault(); // Prevent default page scrolling
          handleShowAnswer();
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
  }, [currentQuestionIndex, selectedOption]);

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
              className={`block h-16 cursor-pointer text-lg ${
                selectedOption === index ? "text-blue-400" : "text-white"
              }`}
            >
              <input
                type="radio"
                name="option"
                value={index}
                checked={selectedOption === index}
                onChange={() => handleOptionSelect(index)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Submit and Show Answer Buttons */}
        <div className="flex my-4 justify-between">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-900"
          >
            Submit
          </button>
          <button
            onClick={handleShowAnswer}
            className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-900"
          >
            Show Answer
          </button>
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
