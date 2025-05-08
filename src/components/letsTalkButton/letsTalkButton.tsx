import styles from "./letsTalkButton.module.scss";

const LetsTalkButton = () => {
	return (
		<div className={styles.letsTalkWrapper}>
			<button className={styles.letsTalk__actionElement}>Let&#39;s Talk</button>
		</div>
	);
};

export default LetsTalkButton;
