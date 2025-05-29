"use client";

import { useState } from "react";

import { ISelectActivityProps } from "types/common/ComponentsProps";

import styles from "./selectActivity.module.scss";



const SelectActivity = ({ selected, onChange, onClose }: ISelectActivityProps) => {
	const [localSelected, setLocalSelected] = useState<string[]>(selected);

	const activityList = [
		"UX/UI Design",
		"Mobile App",
		"Web Design",
		"Graphic Design",
		"Logo creating",
		"Video editing",
	];

	// eslint-disable-next-line no-undef
	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setLocalSelected((prev) =>
			e.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
		);
	};

	// eslint-disable-next-line no-undef
	const handleApply = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault(); 
		onChange(localSelected);
		onClose(); 
	};

	const handleCancel = () => {
		setLocalSelected([]);
		onChange([]);
		onClose();
	};

	return (
		<div className={styles.selectActivity}>
			<div className={styles.selectActivity__options}>
				{activityList.map((item, index) => (
					<label className={styles.selectActivity__label} key={index}>
						<input
							className={styles.selectActivity__check}
							type="checkbox"
							value={item}
							checked={localSelected.includes(item)}
							onChange={handleCheckboxChange}
						/>
						{item}
					</label>
				))}
			</div>

			<div className={styles.selectActivity__buttons}>
				<button
					type="button"
					className={`${styles.selectActivity__button} ${styles["selectActivity__button--cancel"]}`}
					onClick={handleCancel}
				>
					Cancel
				</button>

				<button
					type="button"
					className={`${styles.selectActivity__button} ${styles["selectActivity__button--apply"]}`}
					onClick={handleApply}
				>
					Apply
				</button>
			</div>
		</div>
	);
};

export default SelectActivity;
