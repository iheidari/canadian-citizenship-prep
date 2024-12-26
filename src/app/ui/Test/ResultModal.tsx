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
        <Label title="Score" value={`${props.score}%`} color="yellow-500" />
        <Label title="Time" value={convertTime(props.time)} color="green-500" />
      </div>
    </>
  );
};

const BackButton = (props: { onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-2 text-red-500 font-bold text-lg"
    >
      Back
    </button>
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
