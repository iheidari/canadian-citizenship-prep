import Modal from "../Modal";
import { PageMode } from "./types";

interface ModalProps {
  pageMode: PageMode;
  onAction: () => void;
  onReset: () => void;
}

const ContinueModal = (props: ModalProps) => {
  const message =
    props.pageMode === "review"
      ? "Review your wrong answers"
      : "Continue from where you left off?";

  const actionLabel = props.pageMode === "review" ? "REVIEW" : "CONTINUE";

  return (
    <Modal
      message={<Message message={message} />}
      cta={[
        <ContinueButton
          key="continue"
          onClick={props.onAction}
          label={actionLabel}
        />,
        <ResetButton key="reset" onClick={props.onReset} />,
      ]}
    />
  );
};

const Message = (props: { message: string }) => {
  return (
    <p className="text-lg font-semibold text-center mb-4">{props.message}</p>
  );
};

const ContinueButton = (props: { onClick: () => void; label: string }) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-2 bg-blue-500 dark:bg-blue-600 text-white font-bold text-lg rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-700"
    >
      {props.label}
    </button>
  );
};

const ResetButton = (props: { onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-2 text-red-500 dark:text-red-400 font-bold text-lg"
    >
      RESET
    </button>
  );
};

export default ContinueModal;
