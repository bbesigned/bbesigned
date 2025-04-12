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
                                                   }) => {
  return (
    <svg
      className={`${styles["vector-letter"]} ${withShadow ? styles["vector-letter--shadow"] : ""}`}
      width={width}
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