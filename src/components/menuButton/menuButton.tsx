"use client";

import { useState } from "react";
import cn from "classnames";

import ModalBurger from "components/modalBurger/modalBurger";

import { IBurgerButton } from "types/common/ComponentsProps";

import styles from "./menuButton.module.scss";

export const MenuButton = ({ isDark }: IBurgerButton) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<button className={styles.burgerMenuWrap} onClick={handleOpen}>
				<div className={styles.burgerMenuActionElement}>
					<div
						className={cn(styles.burgerMenuActionElement__burgerMenuContainer, {
							[styles.burgerMenuActionElement__burgerMenuContainer_dark]: isDark,
						})}>
						<span
							className={cn(styles.burgerMenuContainer__line, {
								[styles.burgerMenuContainer__line_dark]: isDark,
							})}></span>
						<span
							className={cn(styles.burgerMenuContainer__line, {
								[styles.burgerMenuContainer__line_dark]: isDark,
							})}></span>
						<span
							className={cn(styles.burgerMenuContainer__line, {
								[styles.burgerMenuContainer__line_dark]: isDark,
							})}></span>
					</div>
				</div>
			</button>
			<ModalBurger visible={isOpen} onClose={handleClose} />
		</>
	);
};

export default MenuButton;
