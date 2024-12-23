import Image from "next/image";
import React from "react";

interface Props {
  correctAnswer?: string;
  onContinue: () => void;
}

const Answer = (props: Props) => {
  const isCorrect = !props.correctAnswer;
  const color = isCorrect ? "#79b933" : "#d84848";
  return (
    <div
      style={{
        display: "grid",
        height: "100%",
        width: "100%",
        gridColumn: 1,
        gridRow: 3,
        position: "relative",
        zIndex: 110,
      }}
    >
      <div
        style={{
          gridColumn: 1,
          gridRow: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            bottom: 0,
            position: "absolute",
            borderTop: "2px solid white",
            maxHeight: "140px",
            minHeight: "140px",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              gridAutoRows: "auto",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "100%",
              justifyContent: "space-between",
              gridGap: "8px 16px",
              display: "grid",
              justifyItems: "stretch",
              minHeight: "140px",
              padding: "0 40px",
              width: "100%",
              maxWidth: "1000px",
              position: "relative",
              touchAction: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gridColumn: "1/5",
                justifyContent: "center",
                margin: 0,
                minHeight: "140px",
                padding: "16px 0",
                position: "relative",
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              <div
                style={{
                  gridTemplateColumns: "min-content 1fr",
                  gridGap: "16px",
                  display: "grid",
                  gridAutoFlow: "column",
                }}
              >
                {/* icon */}
                <div
                  style={{
                    alignSelf: "center",
                    background: "rgba(250, 250, 250, 0.1)",
                    borderRadius: "98px",
                    display: "block",
                    float: "left",
                    height: "80px",
                    width: "80px",
                  }}
                >
                  <Image
                    src={isCorrect ? "/icons/tick.svg" : "/icons/cross.svg"}
                    alt="check"
                    width={31}
                    height={41}
                    style={{
                      display: "block",
                      margin: "27px 0 0 20px",
                      borderStyle: "none",
                      height: "31px",
                      width: "41px",
                    }}
                  />
                </div>
                {/* text */}
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color,
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  <div>{isCorrect ? "Great job!" : "Correct answer:"}</div>
                  <div style={{ fontSize: "16px" }}>{props.correctAnswer}</div>
                </div>
              </div>
            </div>
            {/* continue button */}
            <div style={{ gridColumn: "5/auto", justifySelf: "end" }}>
              <button
                onClick={props.onContinue}
                style={{
                  outline: "none",
                  minWidth: "150px",
                  width: "auto",
                  border: `2px solid ${color}`,
                  borderRadius: "12px",
                  height: "50px",
                  padding: "0 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "uppercase",
                  backgroundColor: color,
                  color: "black",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
