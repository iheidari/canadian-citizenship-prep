import React from "react";

interface ModalProps {
  onClose: () => void;
  onContinue: () => void;
}

const ConfirmationModal = ({ onClose, onContinue }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gray-800 text-white rounded-lg p-6 max-w-sm w-full shadow-lg">
        {/* Modal Content */}
        <div className="flex flex-col items-center">
          {/* Text */}
          <p className="text-lg font-semibold text-center mb-4">
            Wait, don’t go! You’ll lose your progress if you quit now
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Keep Learning Button */}
            <button
              onClick={onContinue}
              className="w-full py-2 bg-blue-500 text-white font-bold text-lg rounded-md shadow-md hover:bg-blue-600"
            >
              KEEP LEARNING
            </button>

            {/* End Session Button */}
            <button
              onClick={onClose}
              className="w-full py-2 text-red-500 font-bold text-lg"
            >
              END SESSION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
