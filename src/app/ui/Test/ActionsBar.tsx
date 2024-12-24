import React from "react";

interface Props {
  onSkip: () => void;
  onSubmit?: () => void;
}

const ActionsBar = (props: Props) => {
  return (
    <div className="grid h-full w-full col-start-1 row-start-3 relative z-[110]">
      <div className="col-start-1 row-start-1 min-h-0">
        <div className="absolute bottom-0 border-t-2 border-white max-h-[140px] min-h-[140px] overflow-hidden w-full">
          <div className="grid items-center grid-rows-[auto] grid-cols-5 justify-between gap-y-2 gap-x-4 min-h-[140px] px-10 w-full max-w-[1000px] relative touch-none">
            {/* Skip button */}
            <div className="col-span-1 justify-self-start hidden md:block">
              {/* Hidden on screens smaller than 700px (md breakpoint) */}
              <button
                onClick={props.onSkip}
                className="outline-none min-w-[150px] w-full border border-white border-b-4 rounded-xl h-[50px] px-4 flex justify-center items-center uppercase"
              >
                Skip
              </button>
            </div>
            {/* Submit button */}
            <div
              className={`col-span-full md:col-span-1 md:col-start-5 justify-self-stretch md:justify-self-end`}
            >
              <button
                onClick={props.onSubmit}
                disabled={!props.onSubmit}
                className={`outline-none w-full md:w-auto border border-white border-b-4 rounded-xl h-[50px] px-4 flex justify-center items-center uppercase ${
                  !props.onSubmit
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-transparent"
                }`}
              >
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;