"use client";

import styles from "./menuButton.module.scss";

export const MenuButton = () => {
	return (
		<div className={styles["burgerMenuWrap"]}>
			<button className={styles["burgerMenuActionElement"]}>
				<div className={styles["burgerMenuActionElement__burgerMenuContainer"]}>
					<span className={styles["burgerMenuContainer__line"]}></span>
					<span className={styles["burgerMenuContainer__line"]}></span>
					<span className={styles["burgerMenuContainer__line"]}></span>
				</div>
			</button>
		</div>
	);
};

export default MenuButton;
