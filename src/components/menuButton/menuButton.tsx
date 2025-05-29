"use client";

import { useState } from "react";

import ModalBurger from "components/modalBurger/modalBurger";

import styles from "./menuButton.module.scss";

export const MenuButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className={styles.burgerMenuWrap} onClick={handleOpen}>
				<button className={styles.burgerMenuActionElement}>
					<div className={styles.burgerMenuActionElement__burgerMenuContainer}>
						<span className={styles.burgerMenuContainer__line}></span>
						<span className={styles.burgerMenuContainer__line}></span>
						<span className={styles.burgerMenuContainer__line}></span>
					</div>
				</button>
			</div>
			<ModalBurger visible={isOpen} onClose={handleClose} />
		</>
	);
};

export default MenuButton;
