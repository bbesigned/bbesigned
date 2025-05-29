"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

import { ISubmitLetsTalkButtonProps } from "types/common/ComponentsProps";

import arrow from "../../../public/arrow.svg";

import styles from "./submitLetsTalkButton.module.scss";

const SubmitLetsTalkButton = ({ submit, agree }: ISubmitLetsTalkButtonProps) => {
	const [active, setActive] = useState(submit);

	useEffect(() => {
		setActive(submit);
	}, [submit]);

	const handleClick = () => {
		if (active) {
			setActive(!active);
		}
	};

	return (
		<button type="submit" className={styles.submitLetsTalkButton}>
			<div
				className={`${styles.submitLetsTalkButton__slide} ${active && agree ? styles.active : ""}`}
				onClick={handleClick}>
				{active && agree ? "Successful send" : "Click to send"}
			</div>
			{!active && agree && (
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
