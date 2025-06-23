"use client";

import { useState } from "react";
import cn from "classnames";

import ModalBurger from "components/modalBurger/modalBurger";

import { IBurgerButtonProps } from "types/common/ComponentsProps";

import styles from "./menuButton.module.scss";

export const MenuButton = ({ dark }: IBurgerButtonProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className={styles.burgerMenuWrap} onClick={handleOpen}>
				<button className={styles.burgerMenuActionElement}>
					<div
						className={cn(styles.burgerMenuActionElement__burgerMenuContainer, {
							[styles.burgerMenuActionElement__burgerMenuContainer_dark]: dark,
						})}>
						<span
							className={cn(styles.burgerMenuContainer__line, {
								[styles.burgerMenuContainer__line_dark]: dark,
							})}></span>
						<span
							className={cn(styles.burgerMenuContainer__line, {
								[styles.burgerMenuContainer__line_dark]: dark,
							})}></span>
						<span
							className={cn(styles.burgerMenuContainer__line, {
								[styles.burgerMenuContainer__line_dark]: dark,
							})}></span>
					</div>
				</button>
			</div>
			<ModalBurger visible={isOpen} onClose={handleClose} />
		</>
	);
};

export default MenuButton;
