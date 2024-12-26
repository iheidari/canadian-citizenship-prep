import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmationModal from "./ConfirmationModal";

interface ProgressbarProps {
  value: number;
  onClose: () => void;
}

const Progressbar = (props: ProgressbarProps) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="col-start-1 row-start-1">
        <div
          style={{
            padding: "50px 40px 0",
            margin: "0 auto",
            maxWidth: "1080px",
          }}
        >
          <div className="grid grid-cols-[min-content_1fr_min-content] gap-6 items-center">
            <button
              className="outline-none h-4 w-4 bg-none border-none p-0 transition-filter duration-200"
              onClick={() => setShowConfirmationModal(true)}
            >
              <Image
                src="/icons/close.svg"
                alt="close"
                width={18}
                height={18}
              />
            </button>
            <div className="h-4 bg-gray-700 rounded-md">
              <div
                className="h-4 bg-green-600 rounded-md transition-all duration-500"
                style={{ width: `${props.value}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {showConfirmationModal ? (
        <ConfirmationModal
          onBack={props.onClose}
          onContinue={() => {
            setShowConfirmationModal(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Progressbar;
