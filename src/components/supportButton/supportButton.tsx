import React from "react";

import { TbMessageCircle } from "react-icons/tb";

import styles from "./supportButton.module.scss";

const SupportButton = () => {
	return (
		<div className={styles.supportButton__container}>
			<button className={styles.supportButton}>
				<TbMessageCircle className={styles.supportButton__iconElement} />
			</button>
		</div>
	);
};

export default SupportButton;
