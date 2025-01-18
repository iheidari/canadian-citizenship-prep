import React, { ReactElement } from "react";

interface ModalProps {
  message: ReactElement | string;
  cta: ReactElement[];
}

const Modal = (props: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gray-300 dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full shadow-lg">
        {/* Modal Content */}
        <div className="flex flex-col items-center">
          {/* Text */}
          {props.message}
          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 w-full">
            {...props.cta}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
