"use client";
import React from "react";
import { convertTime, getResultText } from "./util";
import Modal from "../Modal";

interface ModalProps {
  onClose: () => void;
  // onReview: () => void;
  score: number;
  time: number;
}

const ResultModal = ({ onClose, score, time }: ModalProps) => {
  return (
    <Modal
      message={<Message score={score} time={time} />}
      cta={[<BackButton key="back" onClick={onClose} />]}
    />
  );
};

const Message = (props: { score: number; time: number }) => {
  return (
    <>
      <p className="text-lg text-center mb-4">{getResultText(props.score)}</p>
      <div className="flex flex-row justify-around w-full mb-9">
        <LabelScore value={`${props.score}%`} />
        <LabelTime value={convertTime(props.time)} />
      </div>
    </>
  );
};

const BackButton = (props: { onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-2 text-red-600 dark:text-red-500 font-bold text-lg"
    >
      Back
    </button>
  );
};

const LabelScore = (props: { value: string }) => {
  return (
    <div>
      <div
        className={`bg-yellow-500 dark:bg-yellow-600 rounded-t-lg px-4 py-2 text-center font-bold text-black dark:text-white w-32`}
      >
        Score
      </div>
      <div
        className={`border-2 border-yellow-500 dark:border-yellow-600 rounded-b-lg flex items-center justify-center bg-black dark:bg-gray-900 text-yellow-500 dark:text-yellow-400 py-4`}
      >
        <span className="text-xl">{props.value}</span>
      </div>
    </div>
  );
};

const LabelTime = (props: { value: string }) => {
  return (
    <div>
      <div
        className={`bg-green-500 dark:bg-green-600 rounded-t-lg px-4 py-2 text-center font-bold text-black dark:text-white w-32`}
      >
        Time
      </div>
      <div
        className={`border-2 border-green-500 dark:border-green-600 rounded-b-lg flex items-center justify-center bg-black dark:bg-gray-900 text-green-500 dark:text-green-400 py-4`}
      >
        <span className="text-xl">{props.value}</span>
      </div>
    </div>
  );
};

export default ResultModal;
