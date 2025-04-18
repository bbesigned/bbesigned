"use client";

import React from "react";

import { FaComment } from "react-icons/fa";

import styles from "./SupportButton.module.css";

const SupportButton: React.FC = () => {
	return (
		<button className={styles.supportButton}>
			<FaComment className={styles.supportButton__iconElement} />
		</button>
	);
};

export default SupportButton;
