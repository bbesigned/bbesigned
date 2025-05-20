"use client";

import { useState } from "react";

import styles from "./selectActivity.module.scss";

const SelectActivity = () => {
	const activityList = [
		"UX/UI Design",
		"Mobile App",
		"Web Design",
		"Graphic Design",
		"Logo creating",
		"Video editing",
	];

	const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setSelectedActivities((prev) =>
			e.target.checked ? [...prev, value] : prev.filter((item) => item !== value),
		);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(selectedActivities);
	};

	const handleCancel = () => {
		setSelectedActivities([]);
	};

	return (
		<form className={styles.selectActivity} onSubmit={handleSubmit}>
			<div className={styles.selectActivity__options}>
				{activityList.map((item, index) => (
					<label className={styles.selectActivity__label} key={index}>
						<input
							className={styles.selectActivity__check}
							type="checkbox"
							name="activity"
							value={item}
							checked={selectedActivities.includes(item)}
							onChange={handleCheckboxChange}
						/>
						{item}
					</label>
				))}
			</div>

			<div className={styles.selectActivity__buttons}>
				<button
					className={`${styles.selectActivity__button} ${styles["selectActivity__button--cancel"]}`}
					type="button"
					onClick={handleCancel}>
					Cancel
				</button>

				<button
					className={`${styles.selectActivity__button} ${styles["selectActivity__button--apply"]}`}
					type="submit">
					Apply
				</button>
			</div>
		</form>
	);
};

export default SelectActivity;
