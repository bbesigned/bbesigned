"use client";

import { FaComment } from "react-icons/fa";

import commonStyles from "./supportButton.module.scss";

const SupportButton = () => {
	return (
		<div className={commonStyles["support-button__container"]}>
			<button className={commonStyles["support-button"]}>
				<FaComment className={commonStyles["support-button__icon-element"]} />
			</button>
		</div>
	);
};

export default SupportButton;
