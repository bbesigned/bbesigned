import React from "react";

import styles from "./VectorLetter.module.css";

import { IVectorLetterProps } from "./types";

const VectorLetter: React.FC<IVectorLetterProps> = ({
                                                     letter,
                                                     width = letter === "W" ? "8em" :
                                                       letter === "O" || letter === "U" || letter === "G" || letter === "R" || letter === "D" ? "6em" :
                                                         letter === " " ? "2.5em" : "5em",
                                                     height = "7.375em",
                                                     fill = "none",
                                                     textX = "50%",
                                                     textY = "50%",
                                                     dominantBaseline = "middle",
                                                     textAnchor = "middle",
                                                     withShadow = false,
                                                     letterSizes,
                                                     sizeSet = "default",
                                                   }) => {

  const defaultLetterSizes: { [key: string]: string } = {
    Y: "6.625em",
    O: "6.9375em",
    U: "6.0625em",
    D: "6.0625em",
    E: "4.1875em",
    S: "5em",
    I: "3.75em",
    R: "6.125em",
    W: "10.0625em",
    G: "6.25em",
    N: "6.75em",
    " ": "2.5em",
  };

  // Задел для лого на будущее
  const logoLetterSizes: { [key: string]: string } = {
    Y: "7.5em",
    O: "8.125em",
    U: "6.875em",
    D: "6.875em",
    E: "5em",
    S: "5.625em",
    I: "4.375em",
    R: "6.875em",
    W: "11.25em",
    G: "7.5em",
    N: "7.5em",
    " ": "2.5em",
  };

  const sizes = letterSizes || (sizeSet === "logo" ? logoLetterSizes : defaultLetterSizes);

  const letterWidth = width || sizes[letter] || "5em";

  return (
    <svg
      className={`${styles["vector-letter"]} ${withShadow ? styles["vector-letter--shadow"] : ""}`}
      width={letterWidth}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        className={styles["vector-letter__text"]}
        x={textX}
        y={textY}
        dominantBaseline={dominantBaseline}
        textAnchor={textAnchor}
      >
        {letter}
      </text>
    </svg>
  );
};

export default VectorLetter;