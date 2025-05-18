import Link from "next/link";

import styles from "./letsTalkButton.module.scss";

const LetsTalkButton = () => {
	return (
		<div className={styles.letsTalkWrapper}>
			<Link className={styles.letsTalk__actionElement} href="/letsTalk">Let&#39;s Talk</Link>
		</div>
	);
};

export default LetsTalkButton;
