import React from "react";

interface ProgressbarProps {
  value: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({ value }) => {
  return (
    <div
      style={{
        width: `${value}%`,
        height: "10px",
        backgroundColor: "lightblue",
      }}
    ></div>
  );
};

export default Progressbar;
