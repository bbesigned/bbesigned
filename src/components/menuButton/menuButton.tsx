"use client";

import commonStyles from "./menuButton.module.scss";

export const MenuButton = () => {
	return (
		<div className={commonStyles["burger__container"]}>
			<button className={commonStyles["menu-button"]}>
				<div className={commonStyles["menu-button__hamburger"]}>
					{/* eslint-disable-next-line sonarjs/no-duplicate-string */}
					<span className={commonStyles["menu-button__hamburger__hamburger-line"]}></span>
					<span className={commonStyles["menu-button__hamburger__hamburger-line"]}></span>
					<span className={commonStyles["menu-button__hamburger__hamburger-line"]}></span>
				</div>
			</button>
		</div>
	);
};

export default MenuButton;
