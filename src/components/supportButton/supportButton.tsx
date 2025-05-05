"use client";

import { FaComment } from "react-icons/fa";

import styles from "./supportButton.module.scss";

const SupportButton = () => {
	return (
		<div className={styles["supportButtonWrapper"]}>
			<button className={styles["supportButtonContainer"]}>
				<FaComment className={styles["supportButtonContainer__iconElement"]} />
			</button>
		</div>
	);
};

export default SupportButton;
