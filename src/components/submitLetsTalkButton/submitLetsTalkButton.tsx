"use client";
import Image from "next/image";

import { useState } from "react";

import arrow from "../../../public/arrow.svg";

import styles from "./submitLetsTalkButton.module.scss";

const SubmitLetsTalkButton = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<button type="button" className={styles.submitLetsTalkButton}>
			<div
				className={`${styles.submitLetsTalkButton__slide} ${active ? styles.active : ""}`}
				onClick={handleClick}>
				Slide to send
			</div>
			{!active && (
				<div className={styles.submitLetsTalkButton__arrows}>
					<Image src={arrow} alt="Photo" width={24} height={24} />
					<Image src={arrow} alt="Photo" width={24} height={24} />
					<Image src={arrow} alt="Photo" width={24} height={24} />
				</div>
			)}
		</button>
	);
};

export default SubmitLetsTalkButton;
