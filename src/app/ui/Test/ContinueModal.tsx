import Modal from "../Modal";

interface ModalProps {
  onContinue: () => void;
  onReset: () => void;
}

const ContinueModal = (props: ModalProps) => {
  return (
    <Modal
      message={<Message />}
      cta={[
        <ContinueButton key="continue" onClick={props.onContinue} />,
        <ResetButton key="reset" onClick={props.onReset} />,
      ]}
    />
  );
};

const Message = () => {
  return <p className="text-lg font-semibold text-center mb-4">Continue?</p>;
};

const ContinueButton = (props: { onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-2 bg-blue-500 text-white font-bold text-lg rounded-md shadow-md hover:bg-blue-600"
    >
      CONTINUE
    </button>
  );
};

const ResetButton = (props: { onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-2 text-red-500 font-bold text-lg"
    >
      RESET
    </button>
  );
};

export default ContinueModal;
