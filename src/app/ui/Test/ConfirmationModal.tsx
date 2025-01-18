import React from "react";
import Modal from "../Modal";

interface ModalProps {
  onBack: () => void;
  onContinue: () => void;
}

const ConfirmationModal = ({ onBack, onContinue }: ModalProps) => {
  return (
    <Modal
      message={<Message />}
      cta={[
        <KeepLearningButton key="keep" onClick={onContinue} />,
        <EndSessionButton key="end" onClick={onBack} />,
      ]}
    />
  );
};

const Message = () => {
  return (
    <p className="text-lg font-semibold text-center mb-4">
      Wait, don’t go! You’ll lose your progress if you quit now
    </p>
  );
};

const KeepLearningButton = (props: { onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-2 bg-blue-500 font-bold text-lg rounded-md shadow-md hover:bg-blue-600"
    >
      KEEP LEARNING
    </button>
  );
};

const EndSessionButton = (props: { onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-2 text-red-500 font-bold text-lg"
    >
      END SESSION
    </button>
  );
};
export default ConfirmationModal;
