"use client";
import React from "react";
import { convertTime, getResultText } from "./util";

interface ModalProps {
  onClose: () => void;
  // onReview: () => void;
  score: number;
  time: number;
}

const ResultModal = ({ onClose, score, time }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gray-800 text-white rounded-lg p-6 max-w-sm w-full shadow-lg">
        {/* Modal Content */}
        <div className="flex flex-col items-center">
          {/* Text */}
          <p className="text-lg text-center mb-4">{getResultText(score)}</p>
          <div className="flex flex-row justify-around w-full mb-9">
            <Label title="Score" value={`${score}%`} color="yellow-500" />
            <Label title="Time" value={convertTime(time)} color="green-500" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Keep Learning Button */}
            {/* {score === 100 ? null : (
              <button
                onClick={onReview}
                className="w-full py-2 bg-blue-500 text-white font-bold text-lg rounded-md shadow-md hover:bg-blue-600"
              >
                Review wrong answers
              </button>
            )} */}
            {/* End Session Button */}
            <button
              onClick={onClose}
              className="w-full py-2 text-red-500 font-bold text-lg"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Label = (props: { title: string; value: string; color: string }) => {
  return (
    <div>
      <div
        className={`bg-${props.color} rounded-t-lg px-4 py-2 text-center font-bold text-black w-32`}
      >
        {props.title}
      </div>
      <div
        className={`border-2 border-${props.color} rounded-b-lg flex items-center justify-center bg-black text-${props.color} py-4`}
      >
        <span className="text-xl">{props.value}</span>
      </div>
    </div>
  );
};

export default ResultModal;
