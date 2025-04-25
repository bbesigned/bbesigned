"use client";

import React from "react";

import styles from "./menuButton.module.scss";

export const MenuButton = () => {
	return (
		<div className={styles.burger__container}>
			<button className={styles.menuButton}>
				<div className={styles.menuButton__hamburger}>
					<span className={styles["menuButton__hamburger__hamburgerLine"]}></span>
					<span className={styles["menuButton__hamburger__hamburgerLine"]}></span>
					<span className={styles["menuButton__hamburger__hamburgerLine"]}></span>
				</div>
			</button>
		</div>
	);
};

export default MenuButton;
