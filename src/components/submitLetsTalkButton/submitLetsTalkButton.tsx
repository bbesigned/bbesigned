"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

import arrow from "../../../public/arrow.svg";

import styles from "./submitLetsTalkButton.module.scss";

const SubmitLetsTalkButton = ({ submit }) => {
	const [active, setActive] = useState(submit);

	useEffect(() => {
		setActive(submit);
	}, [submit]);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<button type="submit" className={styles.submitLetsTalkButton}>
			<div
				className={`${styles.submitLetsTalkButton__slide} ${active ? styles.active : ""}`}
				onClick={handleClick}>
				{active ? "Successful send" : "Slide to send"}
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
