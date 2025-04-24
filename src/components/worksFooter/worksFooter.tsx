import React from "react";

import SupportButton from "../supportButton/supportButton";

import ScrollTopButton from "../scrollTopButton/scrollTopButton";

import styles from "./worksFooter.module.scss";

const WorksFooter = () => {
  return (
		<div className={styles.footer}>
			<div className={styles.rectangle__container}>
				<div className={styles.rectangle}/>
			</div>
			<div className={styles.button__container}>
				<ScrollTopButton />
				<SupportButton />
			</div>
		</div>
	);
};

export default WorksFooter;