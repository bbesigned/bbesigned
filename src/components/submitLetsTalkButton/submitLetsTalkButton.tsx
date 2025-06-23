"use client";
import Image from "next/image";
import cn from "classnames";

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
		<div className={styles.submitLetsTalkButton}>
			<button
				type="submit"
				className={cn(styles.submitLetsTalkButton__slide, {
					[styles.active]: active && agree,
				})}
				onClick={handleClick}>
				{active && agree ? "Successful send" : "Click to send"}
			</button>
			{!active && agree && (
				<div className={styles.submitLetsTalkButton__arrows}>
					<Image src={arrow} alt="Photo" width={24} height={24} />
					<Image src={arrow} alt="Photo" width={24} height={24} />
					<Image src={arrow} alt="Photo" width={24} height={24} />
				</div>
			)}
		</div>
	);
};

export default SubmitLetsTalkButton;
