"use client";

import React from "react";

import { FaComment } from "react-icons/fa";

import styles from "./supportButton.module.scss";

const SupportButton = () => {
	return (
		<div className={styles.supportButton__container}>
			<button className={styles.supportButton}>
				<FaComment className={styles.supportButton__iconElement} />
			</button>
		</div>
	);
};

export default SupportButton;