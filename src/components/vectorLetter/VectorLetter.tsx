import React from "react";

import { IVectorLetter } from "../../types/common/ComponentsProps";

import styles from "./VectorLetter.module.scss";

const VectorLetter = ({
	letter,
	height = "7.375em",
	fill = "none",
	textX = "40%",
	textY = "50%",
	dominantBaseline = "middle",
	textAnchor = "middle",
	withShadow = false,
}: IVectorLetter) => {
	const defaultLetterSizes: { [key: string]: string } = {
		Y: "6.1em",
		O: "6.938em",
		U: "6.063em",
		D: "5.063em",
		E: "4.188em",
		I: "3.75em",
		R: "6.125em",
		W: "9.3em",
		G: "5.9em",
		N: "6.75em",
		" ": "2.563em",
	};

	const letterWidth = defaultLetterSizes[letter] || "5em";

	return (
		<svg
			className={`${styles["vector-letter"]} ${withShadow ? styles["vector-letter--shadow"] : ""}`}
			width={letterWidth}
			height={height}
			preserveAspectRatio="xMidYMid meet"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg">
			<text
				className={styles["vector-letter__text"]}
				x={textX}
				y={textY}
				dominantBaseline={dominantBaseline}
				textAnchor={textAnchor}>
				{letter}
			</text>
		</svg>
	);
};

export default VectorLetter;
